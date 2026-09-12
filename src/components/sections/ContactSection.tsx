import { useTranslation } from 'react-i18next'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <div className="row">
      <div className="col-md-12 ">
        <p>
          <a
            className="contact-text"
            href="https://br.linkedin.com/in/marcelobelkiman"
            target="_blank"
          >
            <i className="fa-3x fa-fw fab fa-linkedin-in text-inverse"></i>
            {t('static.text031')}
          </a>
        </p>

        <p>
          <a className="contact-text" href="https://github.com/mmbelkiman" target="_blank">
            <i className="fa-3x fa-fw fab fa-github-alt  text-inverse"></i>
            {t('static.text032')}
          </a>
        </p>

        <p>
          <a className="contact-text" href="mailto:marcelobelkiman@gmail.com">
            <i className="fa-3x fa-fw fas fa-at text-inverse"></i>
            {t('static.text033')}
          </a>
        </p>
      </div>
    </div>
  )
}
