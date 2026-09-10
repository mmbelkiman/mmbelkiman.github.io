import { useEffect, useRef, useState } from 'react'
import { language } from './language'
import './App.css'

declare global {
  interface Window {
    Gifffer?: (options: Record<string, unknown>) => void
  }
}

const languageCookie = 'language'
const cookieLifetimeSeconds = 99 * 24 * 60 * 60
type LanguageKey = keyof typeof language

function getStoredLanguage(): LanguageKey {
  const value = document.cookie.split('; ').find((cookie) => cookie.startsWith(languageCookie + '='))?.split('=')[1]
  return value === '2' ? 'en' : 'ptbr'
}

function App() {
  const [languageKey, setLanguageKey] = useState(getStoredLanguage)
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const professionalCarouselRef = useRef<HTMLElement>(null)
  const educationCarouselRef = useRef<HTMLElement>(null)
  const activeLanguage = language[languageKey]
  const heroOffset = 20 - scrollPosition / 4

  useEffect(() => {
    document.body.className = 'body-home'
    return () => {
      document.body.className = ''
    }
  }, [])

  useEffect(() => {
    const portfolio = activeLanguage.portfolio as Record<string, string>
    const translate = (entries: Record<string, string>) => {
      Object.entries(entries).forEach(([id, value]) => {
        document.getElementById(id)?.replaceChildren(value)
      })
    }

    translate(activeLanguage.home)
    translate(portfolio)
    document.querySelectorAll('.play-online').forEach((element) => { element.textContent = portfolio['play-online'] })
    document.querySelectorAll('.sourcecode').forEach((element) => { element.textContent = portfolio.sourcecode })
    document.querySelectorAll('#menu-subtitle').forEach((element) => { element.textContent = activeLanguage.menu['menu-subtitle'] })
    document.querySelectorAll('.menu-language-text').forEach((element) => { element.textContent = languageKey === 'ptbr' ? 'in english' : 'em português' })
  }, [activeLanguage, languageKey])

  useEffect(() => {
    const updateScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
      setIsHeaderShrunk(position >= 300)
      if (position > 0) setShowScrollHint(false)
    }
    const revealScrollHint = () => {
      if (window.scrollY < 400) setShowScrollHint(true)
    }
    updateScroll()
    const interval = window.setInterval(revealScrollHint, 5000)
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => {
      window.clearInterval(interval)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  useEffect(() => {
    window.Gifffer?.({
      playButtonStyles: { width: '60px', height: '60px', 'border-radius': '30px', background: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: '50%', left: '50%', margin: '-30px 0 0 -30px' },
      playButtonIconStyles: { width: '0', height: '0', 'border-top': '14px solid transparent', 'border-bottom': '14px solid transparent', 'border-left': '14px solid rgba(255, 255, 255, 0.9)', position: 'absolute', left: '26px', top: '16px' },
    })
  }, [])

  const toggleLanguage = () => {
    const nextLanguage = languageKey === 'ptbr' ? 'en' : 'ptbr'
    const languageValue = nextLanguage === 'ptbr' ? '1' : '2'
    document.cookie = languageCookie + '=' + languageValue + '; max-age=' + cookieLifetimeSeconds + '; path=/; samesite=lax'
    setLanguageKey(nextLanguage)
  }

  const scrollCarousel = (carouselRef: React.RefObject<HTMLElement | null>, direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 150, behavior: 'smooth' })
  }

  return (
    <>



<div id="page-top" className={isHeaderShrunk ? "container-fluid shrink" : "container-fluid"}>
    <div className="row">
        
        <div className={isHeaderShrunk ? "title col-md-6 col-lg-6 col-sm-6 hidden-xs shrink" : "title col-md-6 col-lg-6 col-sm-6 hidden-xs"}>
            <span className="menu-title">marcelo belkiman</span>
            <br/>
            <span id="menu-subtitle">Cientista da Computação</span>
        </div>
        <div className="col-md-8 col-lg-8 col-sm-8 hidden-xs links">
            <ul>
                <li className="menu-language" onClick={toggleLanguage}>
                    <a style={{ fontSize: "1.2em" }}>
                        <i className="fas fa-globe-americas"> </i>
                        <span className="menu-language-text">in english</span></a>
                </li>
            </ul>
        </div>

        
        <div className={isHeaderShrunk ? "title hidden-md hidden-lg hidden-sm col-xs-1 shrink" : "title hidden-md hidden-lg hidden-sm col-xs-1"}>
            <span className="menu-title">belkiman</span>
            <br/>
            <span id="menu-subtitle" style={{ marginLeft: "0px" }}>B.Sc</span>
        </div>
        <div className=" hidden-md hidden-lg hidden-sm col-xs-10 links">
            <ul>
                <li className="menu-language" onClick={toggleLanguage}>
                    <a style={{ fontSize: "1.0em" }}>
                        <i className="fa fa-globe-americas"> </i>
                        <span className="menu-language-text">in english</span></a>
                </li>
            </ul>
        </div>
    </div>
</div>



<div className="slide container-fluid cover-image" style={{ backgroundImage: "url('/img-home.jpg')", backgroundPosition: `50% ${heroOffset}px` }}>

    <div className="row welcome">
        <div id="content-allign">
            <div id="content-name-allign"></div>
            <div id="welcome-1"></div>
            <div id="welcome-2"></div>

            <div>
                <span id="welcome-3"></span><span id="blink_char" style={{ fontWeight: "bold", color: "white" }}>_</span>
            </div>
        </div>
    </div>

    <div className="row allign-content">
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{ zIndex: "999" }}>
            <div id="mouse-scroll" style={{ width: showScrollHint ? "150px" : "0px", height: showScrollHint ? "150px" : "0px", backgroundImage: "url('/mouse-scroll.gif')" }}>
            </div>
        </div>
    </div>

</div>


<div id="container-content" className="container">
    <div className="row">
        
        <div className="col-md-11  block-full">
            <h1><span className="icon-title fas fa-briefcase"> </span></h1>
            <h1><span id="topic-name-3">Experiência profissional</span></h1>

            <div className="col-md-12 pn-ProductNav_Wrapper">
                <nav ref={professionalCarouselRef} id="pnProductNav" className="col-md-12 pn-ProductNav"
                     style={{ overflow: "auto", scrollbarColor: "rgb(255,255,255) rgb(255,255,255)" }}>
                    <div id="pnProductNavContents" className=" pn-ProductNav_Contents">

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-trio.png" />
                                <div className="title-education">Trio</div>
                                <div id="trio-b-time" className="subtitle-education"></div>
                                <div id="trio-b-role" className="subtitle-education"></div>
                                <p id="trio-b-1"></p>
                                <p id="trio-b-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-aulapp.jpg" />
                                <div className="title-education">Aulapp</div>
                                <div id="aulapp-time" className="subtitle-education"></div>
                                <div id="aulapp-role" className="subtitle-education"></div>
                                <p id="aulapp-1"></p>
                                <p id="aulapp-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-cyberIsight.png" />
                                <div className="title-education">Cyber iSight</div>
                                <div id="cyberIsight-time" className="subtitle-education"></div>
                                <div id="cyberIsight-role" className="subtitle-education"></div>
                                <p id="cyberIsight-1"></p>
                                <p id="cyberIsight-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-trio.png" />
                                <div className="title-education">Trio</div>
                                <div id="trio-a-time" className="subtitle-education"></div>
                                <div id="trio-a-role" className="subtitle-education"></div>
                                <p id="trio-a-1"></p>
                                <p id="trio-a-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-ilia.png" />
                                <div className="title-education">ília</div>
                                <div id="ilia-time" className="subtitle-education"></div>
                                <div id="ilia-role" className="subtitle-education"></div>
                                <p id="ilia-1"></p>
                                <p id="ilia-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-onebrain.png" />
                                <div className="title-education">Onebrain</div>
                                <div id="onebrain-time" className="subtitle-education"></div>
                                <div id="onebrain-role" className="subtitle-education"></div>
                                <p id="onebrain-1"></p>
                                <p id="onebrain-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-ies2.png" />
                                <div className="title-education">IES2</div>
                                <div id="ies2-time" className="subtitle-education"></div>
                                <div id="ies2-role" className="subtitle-education"></div>
                                <p id="ies2-1"></p>
                                <p id="ies2-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-verisoft.png" />
                                <div className="title-education">Verisoft</div>
                                <div id="verisoft-time" className="subtitle-education"></div>
                                <div id="verisoft-role" className="subtitle-education"></div>
                                <p id="verisoft-1"></p>
                                <p id="verisoft-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-ciet.png" />
                                <div className="title-education">Ci&T</div>
                                <div id="cit-time" className="subtitle-education"></div>
                                <div id="cit-role" className="subtitle-education"></div>
                                <p id="cit-1"></p>
                                <p id="cit-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-clickideia.png" />
                                <div className="title-education">Clickideia</div>
                                <div id="click-time" className="subtitle-education"></div>
                                <div id="click-role" className="subtitle-education"></div>
                                <p id="click-company-1"></p>
                                <p id="click-company-2"></p>
                                <p id="click-company-3"></p>
                                <p id="click-company-4"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-artivinco.png" />
                                <div className="title-education">Artivinco</div>
                                <div id="art-time" className="subtitle-education"></div>
                                <div id="art-role" className="subtitle-education"></div>
                                <p id="art-1"></p>
                                <p id="art-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-brsimulations.png" />
                                <div className="title-education">BR Simulations</div>
                                <div id="brSim-time" className="subtitle-education"></div>
                                <div id="brSim-role" className="subtitle-education"></div>
                                <p id="brSim-1"></p>
                                <p id="brSim-2"></p>
                            </div>
                        </div>

                        <span id="pnIndicator" className="pn-ProductNav_Indicator"></span>
                    </div>
                </nav>
                <button id="pnAdvancerLeft" className="pn-Advancer pn-Advancer_Left" type="button" onClick={() => scrollCarousel(professionalCarouselRef, -1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                                d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z"/>
                    </svg>
                </button>
                <button id="pnAdvancerRight" className="pn-Advancer pn-Advancer_Right" type="button" onClick={() => scrollCarousel(professionalCarouselRef, 1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                                d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z"/>
                    </svg>
                </button>
            </div>


        </div>
        
    </div>

    <div className="row">
        
        <div className="col-md-6 block">
            <h1><span className="icon-title fas fa-code"> </span></h1>
            <h1><span id="topic-name-5">Programação </span></h1>

            <div className="col-md-12 text-achievement">
                C#, Java, Javascript, Typescript, PHP, HTML/CSS, SQL, Android SDK, Unity SDK, React.Js, Node.Js, React
                Native, Monogame(XNA)
            </div>
        </div>
        

        
        <div className="col-md-5 block">
            <h1><span className="icon-title fab fa-connectdevelop"> </span></h1>
            <h1><span id="topic-name-6">Outros conhecimentos </span></h1>

            <div className="col-md-12 text-achievement">
                Software Architecture, GIT, Game Design, Game Development, Agile Dev
            </div>
        </div>
        
    </div>

    <div className="row">
        
        <div className="col-md-11  block-full">
            <h1><span className="icon-title fas fa-graduation-cap"> </span></h1>
            <h1><span id="topic-name-4">Formação acadêmica</span></h1>

            <div className="col-md-12 pn-ProductNav_Wrapper">
                <nav ref={educationCarouselRef} id="pnProductNavB" className="col-md-12 pn-ProductNav"
                     style={{ overflowX: "auto", scrollbarColor: "rgb(255,255,255) rgb(255,255,255)" }}>
                    <div id="pnProductNavContentsB" className=" pn-ProductNav_Contents">

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-unyleya.png" />
                                <div className="title-education">Lato Sensu
                                    Desenvolvimento de jogos digitais
                                </div>
                                <div id="unyleya-time" className="subtitle-education">Concluído em 12/2018</div>
                                <div id="unyleya-role" className="subtitle-education">Faculdade UnYLeYa</div>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-metrocamp.png" />
                                <div className="title-education"> Bacharelado Ciência da Computação</div>
                                <div id="metrocamp-time" className="subtitle-education">Concluído em 12/2015</div>
                                <div id="metrocamp-role" className="subtitle-education">Faculdade Integrada
                                    Metropolitana de Campinas –
                                    Metrocamp - Grupo IBMEC
                                </div>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-centropaulasouza.png" />
                                <div className="title-education">Técnico Manutenção de Microcomputadores</div>
                                <div className="subtitle-education">Concluído em 06/2011</div>
                                <div className="subtitle-education">Escola Técnica Estadual Rosa
                                    Perrone Scavone (Centro Paula
                                    Souza)
                                </div>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-centropaulasouza.png" />
                                <div className="title-education">Técnico Programação</div>
                                <div className="subtitle-education">Concluído em 12/2007</div>
                                <div className="subtitle-education">Escola Técnica Estadual Rosa
                                    Perrone Scavone (Centro Paula
                                    Souza)
                                </div>
                            </div>
                        </div>

                        <span id="pnIndicatorB" className="pn-ProductNav_Indicator"></span>
                    </div>
                </nav>
                <button id="pnAdvancerLeftB" className="pn-Advancer pn-Advancer_Left" type="button" onClick={() => scrollCarousel(educationCarouselRef, -1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                                d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z"/>
                    </svg>
                </button>
                <button id="pnAdvancerRightB" className="pn-Advancer pn-Advancer_Right" type="button" onClick={() => scrollCarousel(educationCarouselRef, 1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                                d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z"/>
                    </svg>
                </button>
            </div>

        </div>
        

        
        <div className="col-md-5 block">
            <h1><span className="icon-title fas fa-language"> </span></h1>
            <h1><span id="topic-name-1">Idiomas</span></h1>
            <p>
                <b id="language-port-1">Português</b> - <span id="language-port-2">Nativo</span>
            </p>
            <p>
                <b id="language-eng-1">Inglês </b> - <span id="language-eng-2">Nativo</span>
            </p>
        </div>
        
    </div>
</div>


<div id="container-contact" className="container-fluid">
    <div className="row">
        <div className="col-md-12 ">
            <p><a className='contact-text' href="https://br.linkedin.com/in/marcelobelkiman" target="_blank">
                <i className="fa-3x fa-fw fab fa-linkedin-in text-inverse"></i>
                Linkedin: Marcelo Belkiman</a></p>

            <p><a className='contact-text' href="https://github.com/mmbelkiman" target="_blank">
                <i className="fa-3x fa-fw fab fa-github-alt  text-inverse"></i>
                GitHub: mmbelkiman</a></p>

            <p><a className='contact-text' href="mailto:marcelobelkiman@gmail.com">
                <i className="fa-3x fa-fw fas fa-at text-inverse"></i>
                E-mail: marcelobelkiman@gmail.com</a></p>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12 ">
            <h1 style={{ color: "#FFF", fontSize: "4em", marginTop: "50px" }}><span id="">Portfólio</span></h1>
        </div>
    </div>

    <div className="container">
        <div className="row">
            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Tiny Tic Tac Toe</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/tictac.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="tictac-1"></p>
                    <p id="tictac-2"></p>
                    <p id="tictac-3"></p>
                    <br/>

                    <div className="col-md-2 portfolio-ts">
                        TS
                    </div>
                    <div className="col-md-3 portfolio-reactnative">
                        React Native
                    </div>

                    <p className="portfolioUrl">
                        Github: <a
                            href="https://github.com/mmbelkiman/tiny_tic_tac_toe_mobile?tab=readme-ov-file"
                            target="_blank">Code</a>
                    </p>

                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Path Crypto</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/pathcrypto.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="pathcrypto-1"></p>
                    <p id="pathcrypto-2"></p>
                    <p id="pathcrypto-3"></p>
                    <br/>

                    <div className="col-md-2 portfolio-ts">
                        TS
                    </div>
                    <div className="col-md-3 portfolio-reactnative">
                        React Native
                    </div>
                    <div className="col-md-3 portfolio-nodejs">
                        NodeJS
                    </div>

                    <p className="portfolioUrl">
                        Website: <a
                            href="https://www.pathcrypto.com/"
                            target="_blank">Path Crypto</a>
                    </p>

                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Pipoclube</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/pipoclube.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="pipoclube-1"></p>
                    <p id="pipoclube-2"></p>
                    <p id="pipoclube-3"></p>
                    <br/>

                    <div className="col-md-2 portfolio-ts">
                        TS
                    </div>
                    <div className="col-md-3 portfolio-reactnative">
                        React Native
                    </div>
                    <div className="col-md-3 portfolio-php">
                        PHP
                    </div>

                    <p className="portfolioUrl">
                        Website: <a href="https://www.pipoclube.com/" target="_blank">Pipoclube</a>
                    </p>

                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Aulapp</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/aulapp.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="aulapp-1"></p>
                    <p id="aulapp-2"></p>
                    <p id="aulapp-3"></p>
                    <br/>

                    <div className="col-md-2 portfolio-js">
                        JS
                    </div>
                    <div className="col-md-3 portfolio-reactnative">
                        React Native
                    </div>

                    <p className="portfolioUrl">
                        Google Play: <a
                            href="https://play.google.com/store/apps/details?id=br.com.ies.aulaapp"
                            target="_blank">AULAPP - Plataforma de Aprendizagem Digital</a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">
                        App Store: <a
                            href="https://apps.apple.com/br/app/aulapp/id1378370353"
                            target="_blank">Aulapp</a>
                    </p>
                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Livroh</h1>

                <div className="row-software row-gif">

                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/livroh.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="livroh-1"></p>
                    <p id="livroh-2"></p>
                    <p id="livroh-3"></p>
                    <br/>

                    <div className="col-md-1 portfolio-java">
                        JAVA
                    </div>

                    <p className="portfolioUrl">
                        Google Play:
                        <a href="https://play.google.com/store/apps/details?id=br.com.verisoft.livroh"
                           target="_blank">Livroh - Livros e Audiolivros digitais</a>
                    </p>
                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Bancah</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/bancah.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="bancah-1"></p>
                    <p id="bancah-2"></p>
                    <p id="bancah-3"></p>
                    <br/>

                    <div className="col-md-1 portfolio-java">
                        JAVA
                    </div>

                    <p className="portfolioUrl">
                        Google Play: <a href="https://play.google.com/store/apps/details?id=br.com.verisoft.bancah"
                                        target="_blank">Bancah – Banca Digital</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-games-father block">
                <h1>Epic Golf 2D</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/epicgolf2d.gif" data-gifffer-width="100%"
                             data-gifffer-height="100%" />
                    </div>

                    <p id="epicgolf2d-1"></p>
                    <p id="epicgolf2d-2"></p>
                    <p id="epicgolf2d-3"></p>

                    <img src="epicgolf2d-trofeu.jpg" style={{ width: "40%" }} />
                    <br/>

                    <div className="col-md-3 portfolio-monogame">
                        Monogame
                    </div>
                    <div className="col-md-1 portfolio-csharp">
                        C#
                    </div>

                    <br/>
                    <p className="portfolioUrl">
                        Google Play: <a href="https://play.google.com/store/apps/details?id=br.com.estudiovacaroxa.eg2d"
                                        target="_blank">Epic Golf 2D</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "600px" }} className="col-md-5 row-games-father block">
                <h1>Venus Particle Editor</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/venusparticleeditor.gif" data-gifffer-width="100%"
                             data-gifffer-height="100%" />
                    </div>

                    <p id="venusparticleeditor-1"></p>
                    <p id="venusparticleeditor-2"></p>
                    <p id="venusparticleeditor-3"></p>
                    <p id="venusparticleeditor-4"></p>

                    <br/>

                    <div className="col-md-3 portfolio-construct">
                        C#
                    </div>
                    <div className="col-md-3 portfolio-construct">
                        Monogame
                    </div>

                    <p className="portfolioUrl">
                        Itch.IO: <a href="https://mmbelkiman.itch.io/venus-particle-editor"
                                    target="_blank">Baixar</a>
                    </p>

                    <p style={{ marginTop: "0px" }} className="portfolioUrl">
                        Github: <a href="https://github.com/mmbelkiman/Venus-Particle-Editor" target="_blank"
                                   className="sourcecode">Código fonte</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "600px" }} className="col-md-5 row-games-father block">
                <h1>Our Adventure Time</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/ouradventuretime.gif" data-gifffer-width="100%"
                             data-gifffer-height="100%" />
                    </div>
                    <p id="ourAdventureTime-1"></p>
                    <p id="ourAdventureTime-2"></p>
                    <p id="ourAdventureTime-3"></p>

                    <br/>

                    <div className="col-md-2 portfolio-unity">
                        Unity
                    </div>
                    <div className="col-md-1 portfolio-csharp">
                        C#
                    </div>

                    <p className="portfolioUrl">
                        Itch.IO: <a href="https://redemptor.itch.io/our-adventure-time" target="_blank"
                                    className="play-online">Jogar online</a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">
                        Github: <a href="https://github.com/redemptor/marriage_jam" target="_blank"
                                   className="sourcecode">Código fonte</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-games-father block">
                <h1>Ultra Retro Virus Attack</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/ultraretrovirusattack.gif" data-gifffer-width="100%"
                             data-gifffer-height="100%" />
                    </div>
                    <p id="ultraretrovirus-1"></p>
                    <p id="ultraretrovirus-2"></p>
                    <p id="ultraretrovirus-3"></p>

                    <br/>

                    <div className="col-md-2 portfolio-unity">
                        Unity
                    </div>
                    <div className="col-md-1 portfolio-csharp">
                        C#
                    </div>

                    <p className="portfolioUrl">
                        Unity Web-Player: <a href="downloads/ultraretrovirusattack/index.html" target="_blank"
                                             className="play-online"></a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">
                        Github: <a href="https://github.com/mmbelkiman/UltraRetroVirusAttack" target="_blank"
                                   className="sourcecode">Código fonte</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Itaucard - Android</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/itaucard.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>
                    <p id="itaucard-1"></p>
                    <p id="itaucard-2"></p>
                    <p id="itaucard-3"></p>

                    <br/>

                    <div className="col-md-1 portfolio-java">
                        JAVA
                    </div>

                    <p className="portfolioUrl">
                        Google Play: <a href="https://play.google.com/store/apps/details?id=com.itaucard.activity"
                                        target="_blank">Itaucard Controle seu cartão</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "800px" }} className="col-md-5 row-games-father block">
                <h1>Rupert</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/rupert.gif" data-gifffer-width="100%" data-gifffer-height="100%" />
                    </div>
                    <p id="rupert-1"></p>
                    <p id="rupert-2"></p>
                    <p id="rupert-3"></p>

                    <br/>

                    <div className="col-md-1 portfolio-java">
                        JAVA
                    </div>

                    <p className="portfolioUrl">
                        Google Play: <a
                            href="https://play.google.com/store/apps/details?id=com.calangostudio.rupertthefish"
                            target="_blank">Rupert</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "800px" }} className="col-md-5 row-software-father block">
                <h1>Tribanco - Mobile Bank</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/tribanco.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>
                    <p id="tri-1"></p>
                    <p id="tri-2"></p>
                    <p id="tri-3"></p>

                    <br/>

                    <div className="col-md-1 portfolio-js">
                        JS
                    </div>

                    <p className="portfolioUrl">
                        Google Play: <a
                            href="https://play.google.com/store/apps/details?id=br.com.tribanco.mb&hl=pt_BR"
                            target="_blank">Tribanco</a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">
                        App Store: <a
                            href="https://itunes.apple.com/us/app/tribanco-o-banco-do-varejo/id1095421258?mt=8"
                            target="_blank">Tribanco - O Banco do Varejo</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-games-father block">
                <h1>OMG! My House!</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/omgmyhouse.gif" data-gifffer-width="100%"
                             data-gifffer-height="100%" />
                    </div>

                    <p id="omg-1"></p>
                    <p id="omg-2"></p>
                    <p id="omg-3"></p>
                    <p id="omg-4"></p>

                    <br/>

                    <div className="col-md-3 portfolio-construct">
                        Construct 2
                    </div>

                    <p className="portfolioUrl">
                        Construct Web-Player: <a href="downloads/omg/index.html" target="_blank">Jogar online</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>Monografia Gamificação</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/monografia.gif" data-gifffer-width="100%"
                             data-gifffer-height="100%" />
                    </div>

                    <p id="gamification-1"></p>
                    <p id="gamification-2"></p>
                    <p id="gamification-3"></p>
                    <p id="gamification-4"></p>
                    <br/>

                    <div className="col-md-3 portfolio-html-css">
                        HTML/CSS
                    </div>
                    <div className="col-md-1 portfolio-js">
                        JS
                    </div>

                    <p className="portfolioUrl">
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">
                        Documento: <a
                            href="https://raw.githubusercontent.com/mmbelkiman/mmbelkiman.github.io/master/downloads/gamification-MarceloBelkiman.pdf"
                            target="_blank">Gamificação:
                        Aplicando ao treino de atividades lógicas</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "500px" }} className="col-md-5 row-games-father block">
                <h1>Space Jay</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/spacejay.gif" data-gifffer-width="100%" data-gifffer-height="100%" />
                    </div>

                    <p id="space-1"></p>
                    <p id="space-2"></p>
                    <p id="space-3"></p>
                    <p id="space-4"></p>
                    <br/>

                    <div className="col-md-1 portfolio-java"> JAVA</div>

                    <p className="portfolioUrl">
                        Google Play: <a
                            href="https://play.google.com/store/apps/details?id=com.calangostudio.spacejayfreermk"
                            target="_blank"> Space Jay </a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "500px" }} className="col-md-5 row-software-father block">
                <h1>Clickideia: Ferramenta exercicios educativos </h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/clickideia.gif" data-gifffer-width="100%"
                             data-gifffer-height="100%" />
                    </div>

                    <p id="click-1"></p>
                    <p id="click-2"></p>
                    <p id="click-3"></p>

                    <br/>

                    <div className="col-md-1 portfolio-js">
                        JS
                    </div>
                    <div className="col-md-1 portfolio-sql">
                        SQL
                    </div>
                    <div className="col-md-1 portfolio-php">
                        PHP
                    </div>

                    <p className="portfolioUrl">
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">
                        URL: <a href="http://www.clickideia.com.br" target="_blank">www.clickideia.com.br</a>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</div>

<footer id="container-contact-final">
</footer>



    </>
  )
}

export default App
