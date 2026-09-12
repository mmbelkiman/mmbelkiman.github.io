import { useTranslation } from 'react-i18next'

export function LanguagesSection() {
  const { t } = useTranslation()

  return (
    <div className="col-md-5 block">
      <h1>
        <span className="icon-title fas fa-language"> </span>
      </h1>
      <h1>
        <span id="topic-name-1">{t('home.topic-name-1')}</span>
      </h1>
      <p>
        <b id="language-port-1">{t('home.language-port-1')}</b>
        {t('static.text029')}
        <span id="language-port-2">{t('home.language-port-2')}</span>
      </p>
      <p>
        <b id="language-eng-1">{t('home.language-eng-1')}</b>
        {t('static.text030')}
        <span id="language-eng-2">{t('home.language-eng-2')}</span>
      </p>
    </div>
  )
}
