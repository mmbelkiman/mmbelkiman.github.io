import { useTranslation } from 'react-i18next'
import { PortfolioCard } from '../PortfolioCard'
import { portfolioItems } from '../../data/portfolio'

export function PortfolioSection() {
  const { t } = useTranslation()

  return (
    <>
      <div className="row">
        <div className="col-md-12 ">
          <h1 style={{ color: '#FFF', fontSize: '4em', marginTop: '50px' }}>
            {t('portfolio.heading')}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.titleKey} {...item} />
          ))}
        </div>
      </div>
    </>
  )
}
