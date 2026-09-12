import { useTranslation } from 'react-i18next'

export function ProgrammingSection() {
  const { t } = useTranslation()

  return (
    <div className="col-md-6 block">
      <h1>
        <span className="icon-title fas fa-code"> </span>
      </h1>
      <h1>
        <span id="topic-name-5">{t('home.topic-name-5')}</span>
      </h1>

      <div className="col-md-12 text-achievement">{t('static.text015')}</div>
    </div>
  )
}
