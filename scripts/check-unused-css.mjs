import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { PurgeCSS } from 'purgecss'

const SOURCE_EXTENSIONS = new Set(['.css', '.html', '.ts', '.tsx'])
const DYNAMIC_SELECTOR_SAFELIST = [
  /^v1-project-card__technology--(?:react|react-native|typescript|firebase|node-js|postgresql)$/,
  /^v1-project-card__technology--bg-(?:filled|transparent)$/,
  /^v1-project-card__technology--border-(?:visible|none)$/,
  /^v1-project-category--(?:financial|banking)$/,
  /^v1-project-type-badge--(?:game|mobile|software|web)$/,
  /^v1-professional-experience-row__company-logo--(?:compact|large)$/,
  /^v1-city-landscape-parallax__layer--(?:left|right)$/,
]

async function getSourceFiles(directory) {
  const entries = await readdir(directory, { recursive: true })

  return entries
    .filter((entry) => SOURCE_EXTENSIONS.has(path.extname(entry)))
    .map((entry) => path.join(directory, entry))
}

function getCssVariables(source) {
  return [...source.matchAll(/(?<![\w-])(--[\w-]+)\s*:/g)].map((match) => match[1])
}

function getCssVariableReferences(source) {
  return [...source.matchAll(/var\(\s*(--[\w-]+)/g)].map((match) => match[1])
}

function printSection(title, values) {
  if (values.length === 0) return

  console.error(`\n${title}:`)
  values.forEach((value) => console.error(`  - ${value}`))
}

const sourceFiles = [
  'index.html',
  ...(await getSourceFiles('src')),
  ...(await getSourceFiles('.storybook')),
]
const sourceContents = await Promise.all(sourceFiles.map((file) => readFile(file, 'utf8')))
const cssFiles = sourceFiles.filter((file) => path.extname(file) === '.css')

const purgeResults = await new PurgeCSS().purge({
  content: sourceFiles.filter((file) => path.extname(file) !== '.css'),
  css: cssFiles,
  rejected: true,
  safelist: { standard: DYNAMIC_SELECTOR_SAFELIST },
})

const unusedSelectors = [
  ...new Set(
    purgeResults
      .flatMap((result) => result.rejected ?? [])
      .map((selector) => selector.trim())
      .filter((selector) => !selector.startsWith('&'))
      .filter((selector) => !DYNAMIC_SELECTOR_SAFELIST.some((pattern) => pattern.test(selector))),
  ),
].sort()

const declaredVariables = new Set(sourceContents.flatMap(getCssVariables))
const referencedVariables = new Set(sourceContents.flatMap(getCssVariableReferences))
const unusedVariables = [...declaredVariables]
  .filter((variable) => !referencedVariables.has(variable))
  .sort()

if (unusedSelectors.length === 0 && unusedVariables.length === 0) {
  console.log('No unused CSS selectors or custom properties found.')
  process.exit(0)
}

console.error(
  'Potentially unused CSS detected. Remove it or explicitly safelist intentional dynamic usage.',
)
printSection('Selectors', unusedSelectors)
printSection('Custom properties', unusedVariables)
process.exit(1)
