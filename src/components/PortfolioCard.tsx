import { useTranslation } from 'react-i18next';

export type PortfolioTechnology =
  | 'typescript'
  | 'reactNative'
  | 'nodeJs'
  | 'php'
  | 'javascript'
  | 'java'
  | 'monogame'
  | 'csharp'
  | 'unity'
  | 'construct2'
  | 'htmlCss'
  | 'sql';

const technologyClassNames: Record<PortfolioTechnology, string> = {
  typescript: 'col-md-2 portfolio-ts',
  reactNative: 'col-md-3 portfolio-reactnative',
  nodeJs: 'col-md-3 portfolio-nodejs',
  php: 'col-md-3 portfolio-php',
  javascript: 'col-md-2 portfolio-js',
  java: 'col-md-1 portfolio-java',
  monogame: 'col-md-3 portfolio-monogame',
  csharp: 'col-md-1 portfolio-csharp',
  unity: 'col-md-2 portfolio-unity',
  construct2: 'col-md-3 portfolio-construct',
  htmlCss: 'col-md-3 portfolio-html-css',
  sql: 'col-md-1 portfolio-sql',
};

export type PortfolioLink = {
  href: string;
  labelKey: string;
  textKey: string;
  className?: string;
  compact?: boolean;
};

export type PortfolioCardProps = {
  titleKey: string;
  previewUrl: string;
  category: 'software' | 'game';
  descriptionKeys?: string[];
  yearKey?: string;
  technologies: PortfolioTechnology[];
  links?: PortfolioLink[];
  supplementaryImage?: {
    src: string;
    width: string;
  };
  linkSpacer?: boolean;
};

export function PortfolioCard({
  titleKey,
  previewUrl,
  category,
  descriptionKeys = [],
  yearKey,
  technologies,
  links = [],
  supplementaryImage,
  linkSpacer = false,
}: PortfolioCardProps) {
  const { t } = useTranslation();
  const isSoftware = category === 'software';
  const previewSize = isSoftware ? '50%' : '100%';

  return (
    <div
      style={{ height: '800px' }}
      className={`col-md-5 ${isSoftware ? 'row-software-father' : 'row-games-father'} block`}
    >
      <h1>{t(titleKey)}</h1>

      <div className={`${isSoftware ? 'row-software' : 'row-games'} row-gif`}>
        <div className="col-md-12 col-gif">
          <img
            data-gifffer={previewUrl}
            data-gifffer-width={previewSize}
            data-gifffer-height={previewSize}
            alt={t(titleKey)}
          />
        </div>

        {descriptionKeys.map((descriptionKey) => (
          <p key={descriptionKey}>{t(descriptionKey)}</p>
        ))}
        {yearKey && <p>{t(yearKey)}</p>}

        {supplementaryImage && (
          <img src={supplementaryImage.src} style={{ width: supplementaryImage.width }} alt="" />
        )}

        <br />

        {technologies.map((technology) => (
          <div key={technology} className={technologyClassNames[technology]}>
            {t(`${titleKey.replace('.title', '')}.technologies.${technology}`)}
          </div>
        ))}

        {linkSpacer && <p className="portfolioUrl" />}

        {links.map((link) => (
          <p
            key={link.href}
            className="portfolioUrl"
            style={link.compact ? { marginTop: '0px' } : undefined}
          >
            {t(link.labelKey)}
            <a href={link.href} target="_blank" className={link.className}>
              {t(link.textKey)}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
