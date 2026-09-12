import { useTranslation } from 'react-i18next'

type PageTopProps = {
  isHeaderShrunk: boolean
  heroOffset: number
  showScrollHint: boolean
  onToggleLanguage: () => void
}

export function PageTop({
  isHeaderShrunk,
  heroOffset,
  showScrollHint,
  onToggleLanguage,
}: PageTopProps) {
  const { t } = useTranslation()
  const titleClassName = isHeaderShrunk
    ? 'title col-md-6 col-lg-6 col-sm-6 hidden-xs shrink'
    : 'title col-md-6 col-lg-6 col-sm-6 hidden-xs'
  const mobileTitleClassName = isHeaderShrunk
    ? 'title hidden-md hidden-lg hidden-sm col-xs-1 shrink'
    : 'title hidden-md hidden-lg hidden-sm col-xs-1'

  return (
    <>
      <div id="page-top" className={isHeaderShrunk ? 'container-fluid shrink' : 'container-fluid'}>
        <div className="row">
          <div className={titleClassName}>
            <span className="menu-title">{t('static.text001')}</span>
            <br />
            <span id="menu-subtitle">{t('menu.menu-subtitle')}</span>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-8 hidden-xs links">
            <ul>
              <li className="menu-language" onClick={onToggleLanguage}>
                <a style={{ fontSize: '1.2em' }}>
                  <i className="fas fa-globe-americas"> </i>
                  <span className="menu-language-text">{t('menu.switchLanguage')}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={mobileTitleClassName}>
            <span className="menu-title">{t('static.text002')}</span>
            <br />
            <span id="menu-subtitle" style={{ marginLeft: '0px' }}>
              {t('menu.menu-subtitle')}
            </span>
          </div>
          <div className=" hidden-md hidden-lg hidden-sm col-xs-10 links">
            <ul>
              <li className="menu-language" onClick={onToggleLanguage}>
                <a style={{ fontSize: '1em' }}>
                  <i className="fa fa-globe-americas"> </i>
                  <span className="menu-language-text">{t('menu.switchLanguage')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="slide container-fluid cover-image"
        style={{
          backgroundImage: "url('/img-home.jpg')",
          backgroundPosition: `50% ${heroOffset}px`,
        }}
      >
        <div className="row welcome">
          <div id="content-allign">
            <div id="content-name-allign">{t('home.content-name-allign')}</div>
            <div id="welcome-1">{t('home.welcome-1')}</div>
            <div id="welcome-2">{t('home.welcome-2')}</div>

            <div>
              <span id="welcome-3">{t('home.welcome-3')}</span>
              <span id="blink_char" style={{ fontWeight: 'bold', color: 'white' }}>
                _
              </span>
            </div>
          </div>
        </div>

        <div className="row allign-content">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{ zIndex: '999' }}>
            <div
              id="mouse-scroll"
              style={{
                width: showScrollHint ? '150px' : '0px',
                height: showScrollHint ? '150px' : '0px',
                backgroundImage: "url('/mouse-scroll.gif')",
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
