import { useTranslation } from 'react-i18next'

export function OtherKnowledgeSection() {
  const { t } = useTranslation()

  return (
    <div className="col-md-5 block">
      <h1>
        <span className="icon-title fab fa-connectdevelop"> </span>
      </h1>
      <h1>
        <span id="topic-name-6">{t('home.topic-name-6')}</span>
      </h1>

      <div className="col-md-12 text-achievement">{t('static.text016')}</div>
    </div>
  )
}
