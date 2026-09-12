import { createElement } from 'react'
import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

document.documentElement.dataset.theme = 'v1'

const preview: Preview = {
  decorators: [
    (Story) => createElement('div', { className: 'v1-storybook' }, createElement(Story)),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
    },
  },
}

export default preview
