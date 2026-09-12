import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

declare global {
  interface Window {
    Gifffer?: (options: Record<string, unknown>) => void;
  }
}

function App() {
  const { i18n, t } = useTranslation();
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const professionalCarouselRef = useRef<HTMLElement>(null);
  const educationCarouselRef = useRef<HTMLElement>(null);
  const heroOffset = 20 - scrollPosition / 4;

  useEffect(() => {
    document.body.className = 'body-home';
    return () => {
      document.body.className = '';
    };
  }, []);


  useEffect(() => {
    const updateScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsHeaderShrunk(position >= 300);
      if (position > 0) setShowScrollHint(false);
    };
    const revealScrollHint = () => {
      if (window.scrollY < 400) setShowScrollHint(true);
    };
    updateScroll();
    const interval = window.setInterval(revealScrollHint, 5000);
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => {
      window.clearInterval(interval);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  useEffect(() => {
    window.Gifffer?.({
      playButtonStyles: { width: '60px', height: '60px', 'border-radius': '30px', background: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: '50%', left: '50%', margin: '-30px 0 0 -30px' },
      playButtonIconStyles: { width: '0', height: '0', 'border-top': '14px solid transparent', 'border-bottom': '14px solid transparent', 'border-left': '14px solid rgba(255, 255, 255, 0.9)', position: 'absolute', left: '26px', top: '16px' }
    });
  }, []);

  const toggleLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === 'en' ? 'pt-BR' : 'en';
    localStorage.setItem('site-language', nextLanguage);
    void i18n.changeLanguage(nextLanguage);
  };

  const scrollCarousel = (carouselRef: React.RefObject<HTMLElement | null>, direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 150, behavior: 'smooth' });
  };

  return (
    <>



<div id="page-top" className={isHeaderShrunk ? "container-fluid shrink" : "container-fluid"}>
    <div className="row">
        
        <div className={isHeaderShrunk ? "title col-md-6 col-lg-6 col-sm-6 hidden-xs shrink" : "title col-md-6 col-lg-6 col-sm-6 hidden-xs"}>
            <span className="menu-title">{t("static.text001")}</span>
            <br />
            <span id="menu-subtitle">{t("menu.menu-subtitle")}</span>
        </div>
        <div className="col-md-8 col-lg-8 col-sm-8 hidden-xs links">
            <ul>
                <li className="menu-language" onClick={toggleLanguage}>
                    <a style={{ fontSize: "1.2em" }}>
                        <i className="fas fa-globe-americas"> </i>
                        <span className="menu-language-text">{t("menu.switchLanguage")}</span></a>
                </li>
            </ul>
        </div>

        
        <div className={isHeaderShrunk ? "title hidden-md hidden-lg hidden-sm col-xs-1 shrink" : "title hidden-md hidden-lg hidden-sm col-xs-1"}>
            <span className="menu-title">{t("static.text002")}</span>
            <br />
            <span id="menu-subtitle" style={{ marginLeft: "0px" }}>{t("menu.menu-subtitle")}</span>
        </div>
        <div className=" hidden-md hidden-lg hidden-sm col-xs-10 links">
            <ul>
                <li className="menu-language" onClick={toggleLanguage}>
                    <a style={{ fontSize: "1.0em" }}>
                        <i className="fa fa-globe-americas"> </i>
                        <span className="menu-language-text">{t("menu.switchLanguage")}</span></a>
                </li>
            </ul>
        </div>
    </div>
</div>



<div className="slide container-fluid cover-image" style={{ backgroundImage: "url('/img-home.jpg')", backgroundPosition: `50% ${heroOffset}px` }}>

    <div className="row welcome">
        <div id="content-allign">
            <div id="content-name-allign">{t("home.content-name-allign")}</div>
            <div id="welcome-1">{t("home.welcome-1")}</div>
            <div id="welcome-2">{t("home.welcome-2")}</div>

            <div>
                <span id="welcome-3">{t("home.welcome-3")}</span><span id="blink_char" style={{ fontWeight: "bold", color: "white" }}>_</span>
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
            <h1><span id="topic-name-3">{t("home.topic-name-3")}</span></h1>

            <div className="col-md-12 pn-ProductNav_Wrapper">
                <nav ref={professionalCarouselRef} id="pnProductNav" className="col-md-12 pn-ProductNav"
              style={{ overflow: "auto", scrollbarColor: "rgb(255,255,255) rgb(255,255,255)" }}>
                    <div id="pnProductNavContents" className=" pn-ProductNav_Contents">

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-trio.png" />
                                <div className="title-education">{t("static.text003")}</div>
                                <div id="trio-b-time" className="subtitle-education">{t("home.trio-b-time")}</div>
                                <div id="trio-b-role" className="subtitle-education">{t("home.trio-b-role")}</div>
                                <p id="trio-b-1"></p>
                                <p id="trio-b-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-aulapp.jpg" />
                                <div className="title-education">{t("static.text004")}</div>
                                <div id="aulapp-time" className="subtitle-education">{t("home.aulapp-time")}</div>
                                <div id="aulapp-role" className="subtitle-education">{t("home.aulapp-role")}</div>
                                <p id="aulapp-1">{t("portfolio.aulapp-1")}</p>
                                <p id="aulapp-2">{t("portfolio.aulapp-2")}</p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-cyberIsight.png" />
                                <div className="title-education">{t("static.text005")}</div>
                                <div id="cyberIsight-time" className="subtitle-education">{t("home.cyberIsight-time")}</div>
                                <div id="cyberIsight-role" className="subtitle-education">{t("home.cyberIsight-role")}</div>
                                <p id="cyberIsight-1"></p>
                                <p id="cyberIsight-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-trio.png" />
                                <div className="title-education">{t("static.text006")}</div>
                                <div id="trio-a-time" className="subtitle-education">{t("home.trio-a-time")}</div>
                                <div id="trio-a-role" className="subtitle-education">{t("home.trio-a-role")}</div>
                                <p id="trio-a-1"></p>
                                <p id="trio-a-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-ilia.png" />
                                <div className="title-education">{t("static.text007")}</div>
                                <div id="ilia-time" className="subtitle-education">{t("home.ilia-time")}</div>
                                <div id="ilia-role" className="subtitle-education">{t("home.ilia-role")}</div>
                                <p id="ilia-1"></p>
                                <p id="ilia-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-onebrain.png" />
                                <div className="title-education">{t("static.text008")}</div>
                                <div id="onebrain-time" className="subtitle-education">{t("home.onebrain-time")}</div>
                                <div id="onebrain-role" className="subtitle-education">{t("home.onebrain-role")}</div>
                                <p id="onebrain-1"></p>
                                <p id="onebrain-2"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-ies2.png" />
                                <div className="title-education">{t("static.text009")}</div>
                                <div id="ies2-time" className="subtitle-education">{t("home.ies2-time")}</div>
                                <div id="ies2-role" className="subtitle-education">{t("home.ies2-role")}</div>
                                <p id="ies2-1">{t("home.ies2-1")}</p>
                                <p id="ies2-2">{t("home.ies2-2")}</p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-verisoft.png" />
                                <div className="title-education">{t("static.text010")}</div>
                                <div id="verisoft-time" className="subtitle-education">{t("home.verisoft-time")}</div>
                                <div id="verisoft-role" className="subtitle-education">{t("home.verisoft-role")}</div>
                                <p id="verisoft-1">{t("home.verisoft-1")}</p>
                                <p id="verisoft-2">{t("home.verisoft-2")}</p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-ciet.png" />
                                <div className="title-education">{t("static.text011")}</div>
                                <div id="cit-time" className="subtitle-education">{t("home.cit-time")}</div>
                                <div id="cit-role" className="subtitle-education">{t("home.cit-role")}</div>
                                <p id="cit-1">{t("home.cit-1")}</p>
                                <p id="cit-2">{t("home.cit-2")}</p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-clickideia.png" />
                                <div className="title-education">{t("static.text012")}</div>
                                <div id="click-time" className="subtitle-education">{t("home.click-time")}</div>
                                <div id="click-role" className="subtitle-education">{t("home.click-role")}</div>
                                <p id="click-company-1"></p>
                                <p id="click-company-2"></p>
                                <p id="click-company-3"></p>
                                <p id="click-company-4"></p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-artivinco.png" />
                                <div className="title-education">{t("static.text013")}</div>
                                <div id="art-time" className="subtitle-education">{t("home.art-time")}</div>
                                <div id="art-role" className="subtitle-education">{t("home.art-role")}</div>
                                <p id="art-1">{t("home.art-1")}</p>
                                <p id="art-2">{t("home.art-2")}</p>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-brsimulations.png" />
                                <div className="title-education">{t("static.text014")}</div>
                                <div id="brSim-time" className="subtitle-education">{t("home.brSim-time")}</div>
                                <div id="brSim-role" className="subtitle-education">{t("home.brSim-role")}</div>
                                <p id="brSim-1">{t("home.brSim-1")}</p>
                                <p id="brSim-2">{t("home.brSim-2")}</p>
                            </div>
                        </div>

                        <span id="pnIndicator" className="pn-ProductNav_Indicator"></span>
                    </div>
                </nav>
                <button id="pnAdvancerLeft" className="pn-Advancer pn-Advancer_Left" type="button" onClick={() => scrollCarousel(professionalCarouselRef, -1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                    d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z" />
                    </svg>
                </button>
                <button id="pnAdvancerRight" className="pn-Advancer pn-Advancer_Right" type="button" onClick={() => scrollCarousel(professionalCarouselRef, 1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                    d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z" />
                    </svg>
                </button>
            </div>


        </div>
        
    </div>

    <div className="row">
        
        <div className="col-md-6 block">
            <h1><span className="icon-title fas fa-code"> </span></h1>
            <h1><span id="topic-name-5">{t("home.topic-name-5")}</span></h1>

            <div className="col-md-12 text-achievement">{t("static.text015")}


            </div>
        </div>
        

        
        <div className="col-md-5 block">
            <h1><span className="icon-title fab fa-connectdevelop"> </span></h1>
            <h1><span id="topic-name-6">{t("home.topic-name-6")}</span></h1>

            <div className="col-md-12 text-achievement">{t("static.text016")}

            </div>
        </div>
        
    </div>

    <div className="row">
        
        <div className="col-md-11  block-full">
            <h1><span className="icon-title fas fa-graduation-cap"> </span></h1>
            <h1><span id="topic-name-4">{t("home.topic-name-4")}</span></h1>

            <div className="col-md-12 pn-ProductNav_Wrapper">
                <nav ref={educationCarouselRef} id="pnProductNavB" className="col-md-12 pn-ProductNav"
              style={{ overflowX: "auto", scrollbarColor: "rgb(255,255,255) rgb(255,255,255)" }}>
                    <div id="pnProductNavContentsB" className=" pn-ProductNav_Contents">

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-unyleya.png" />
                                <div className="title-education">{t("static.text017")}

                      </div>
                                <div id="unyleya-time" className="subtitle-education">{t("static.text018")}</div>
                                <div id="unyleya-role" className="subtitle-education">{t("static.text019")}</div>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-metrocamp.png" />
                                <div className="title-education">{t("static.text020")}</div>
                                <div id="metrocamp-time" className="subtitle-education">{t("static.text021")}</div>
                                <div id="metrocamp-role" className="subtitle-education">{t("static.text022")}


                      </div>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-centropaulasouza.png" />
                                <div className="title-education">{t("static.text023")}</div>
                                <div className="subtitle-education">{t("static.text024")}</div>
                                <div className="subtitle-education">{t("static.text025")}


                      </div>
                            </div>
                        </div>

                        <div className="pn-ProductNav_Link card-info">
                            <div>
                                <img className="img-education" src="img-centropaulasouza.png" />
                                <div className="title-education">{t("static.text026")}</div>
                                <div className="subtitle-education">{t("static.text027")}</div>
                                <div className="subtitle-education">{t("static.text028")}


                      </div>
                            </div>
                        </div>

                        <span id="pnIndicatorB" className="pn-ProductNav_Indicator"></span>
                    </div>
                </nav>
                <button id="pnAdvancerLeftB" className="pn-Advancer pn-Advancer_Left" type="button" onClick={() => scrollCarousel(educationCarouselRef, -1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                    d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z" />
                    </svg>
                </button>
                <button id="pnAdvancerRightB" className="pn-Advancer pn-Advancer_Right" type="button" onClick={() => scrollCarousel(educationCarouselRef, 1)}>
                    <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024">
                        <path
                    d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z" />
                    </svg>
                </button>
            </div>

        </div>
        

        
        <div className="col-md-5 block">
            <h1><span className="icon-title fas fa-language"> </span></h1>
            <h1><span id="topic-name-1">{t("home.topic-name-1")}</span></h1>
            <p>
                <b id="language-port-1">{t("home.language-port-1")}</b>{t("static.text029")}<span id="language-port-2">{t("home.language-port-2")}</span>
            </p>
            <p>
                <b id="language-eng-1">{t("home.language-eng-1")}</b>{t("static.text030")}<span id="language-eng-2">{t("home.language-eng-2")}</span>
            </p>
        </div>
        
    </div>
</div>


<div id="container-contact" className="container-fluid">
    <div className="row">
        <div className="col-md-12 ">
            <p><a className='contact-text' href="https://br.linkedin.com/in/marcelobelkiman" target="_blank">
                <i className="fa-3x fa-fw fab fa-linkedin-in text-inverse"></i>{t("static.text031")}
              </a></p>

            <p><a className='contact-text' href="https://github.com/mmbelkiman" target="_blank">
                <i className="fa-3x fa-fw fab fa-github-alt  text-inverse"></i>{t("static.text032")}
              </a></p>

            <p><a className='contact-text' href="mailto:marcelobelkiman@gmail.com">
                <i className="fa-3x fa-fw fas fa-at text-inverse"></i>{t("static.text033")}
              </a></p>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12 ">
            <h1 style={{ color: "#FFF", fontSize: "4em", marginTop: "50px" }}><span id="">{t("static.text034")}</span></h1>
        </div>
    </div>

    <div className="container">
        <div className="row">
            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text035")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/tictac.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="tictac-1">{t("portfolio.tictac-1")}</p>
                    <p id="tictac-2">{t("portfolio.tictac-2")}</p>
                    <p id="tictac-3">{t("portfolio.tictac-3")}</p>
                    <br />

                    <div className="col-md-2 portfolio-ts">{t("static.text036")}

                </div>
                    <div className="col-md-3 portfolio-reactnative">{t("static.text037")}

                </div>

                    <p className="portfolioUrl">{t("static.text038")}
                  <a
                    href="https://github.com/mmbelkiman/tiny_tic_tac_toe_mobile?tab=readme-ov-file"
                    target="_blank">{t("static.text039")}</a>
                    </p>

                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text040")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/pathcrypto.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="pathcrypto-1">{t("portfolio.pathcrypto-1")}</p>
                    <p id="pathcrypto-2">{t("portfolio.pathcrypto-2")}</p>
                    <p id="pathcrypto-3">{t("portfolio.pathcrypto-3")}</p>
                    <br />

                    <div className="col-md-2 portfolio-ts">{t("static.text041")}

                </div>
                    <div className="col-md-3 portfolio-reactnative">{t("static.text042")}

                </div>
                    <div className="col-md-3 portfolio-nodejs">{t("static.text043")}

                </div>

                    <p className="portfolioUrl">{t("static.text044")}
                  <a
                    href="https://www.pathcrypto.com/"
                    target="_blank">{t("static.text045")}</a>
                    </p>

                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text046")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/pipoclube.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="pipoclube-1">{t("portfolio.pipoclube-1")}</p>
                    <p id="pipoclube-2">{t("portfolio.pipoclube-2")}</p>
                    <p id="pipoclube-3">{t("portfolio.pipoclube-3")}</p>
                    <br />

                    <div className="col-md-2 portfolio-ts">{t("static.text047")}

                </div>
                    <div className="col-md-3 portfolio-reactnative">{t("static.text048")}

                </div>
                    <div className="col-md-3 portfolio-php">{t("static.text049")}

                </div>

                    <p className="portfolioUrl">{t("static.text050")}
                  <a href="https://www.pipoclube.com/" target="_blank">{t("static.text051")}</a>
                    </p>

                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text052")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/aulapp.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="aulapp-1">{t("portfolio.aulapp-1")}</p>
                    <p id="aulapp-2">{t("portfolio.aulapp-2")}</p>
                    <p id="aulapp-3">{t("portfolio.aulapp-3")}</p>
                    <br />

                    <div className="col-md-2 portfolio-js">{t("static.text053")}

                </div>
                    <div className="col-md-3 portfolio-reactnative">{t("static.text054")}

                </div>

                    <p className="portfolioUrl">{t("static.text055")}
                  <a
                    href="https://play.google.com/store/apps/details?id=br.com.ies.aulaapp"
                    target="_blank">{t("static.text056")}</a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">{t("static.text057")}
                  <a
                    href="https://apps.apple.com/br/app/aulapp/id1378370353"
                    target="_blank">{t("static.text058")}</a>
                    </p>
                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text059")}</h1>

                <div className="row-software row-gif">

                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/livroh.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="livroh-1">{t("portfolio.livroh-1")}</p>
                    <p id="livroh-2">{t("portfolio.livroh-2")}</p>
                    <p id="livroh-3">{t("portfolio.livroh-3")}</p>
                    <br />

                    <div className="col-md-1 portfolio-java">{t("static.text060")}

                </div>

                    <p className="portfolioUrl">{t("static.text061")}

                  <a href="https://play.google.com/store/apps/details?id=br.com.verisoft.livroh"
                  target="_blank">{t("static.text062")}</a>
                    </p>
                </div>
                
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text063")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/bancah.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>

                    <p id="bancah-1">{t("portfolio.bancah-1")}</p>
                    <p id="bancah-2">{t("portfolio.bancah-2")}</p>
                    <p id="bancah-3">{t("portfolio.bancah-3")}</p>
                    <br />

                    <div className="col-md-1 portfolio-java">{t("static.text064")}

                </div>

                    <p className="portfolioUrl">{t("static.text065")}
                  <a href="https://play.google.com/store/apps/details?id=br.com.verisoft.bancah"
                  target="_blank">{t("static.text066")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-games-father block">
                <h1>{t("static.text067")}</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/epicgolf2d.gif" data-gifffer-width="100%"
                  data-gifffer-height="100%" />
                    </div>

                    <p id="epicgolf2d-1">{t("portfolio.epicgolf2d-1")}</p>
                    <p id="epicgolf2d-2">{t("portfolio.epicgolf2d-2")}</p>
                    <p id="epicgolf2d-3">{t("portfolio.epicgolf2d-3")}</p>

                    <img src="epicgolf2d-trofeu.jpg" style={{ width: "40%" }} />
                    <br />

                    <div className="col-md-3 portfolio-monogame">{t("static.text068")}

                </div>
                    <div className="col-md-1 portfolio-csharp">{t("static.text069")}

                </div>

                    <br />
                    <p className="portfolioUrl">{t("static.text070")}
                  <a href="https://play.google.com/store/apps/details?id=br.com.estudiovacaroxa.eg2d"
                  target="_blank">{t("static.text071")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "600px" }} className="col-md-5 row-games-father block">
                <h1>{t("static.text072")}</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/venusparticleeditor.gif" data-gifffer-width="100%"
                  data-gifffer-height="100%" />
                    </div>

                    <p id="venusparticleeditor-1">{t("portfolio.venusparticleeditor-1")}</p>
                    <p id="venusparticleeditor-2">{t("portfolio.venusparticleeditor-2")}</p>
                    <p id="venusparticleeditor-3">{t("portfolio.venusparticleeditor-3")}</p>
                    <p id="venusparticleeditor-4"></p>

                    <br />

                    <div className="col-md-3 portfolio-construct">{t("static.text073")}

                </div>
                    <div className="col-md-3 portfolio-construct">{t("static.text074")}

                </div>

                    <p className="portfolioUrl">{t("static.text075")}
                  <a href="https://mmbelkiman.itch.io/venus-particle-editor"
                  target="_blank">{t("static.text076")}</a>
                    </p>

                    <p style={{ marginTop: "0px" }} className="portfolioUrl">{t("static.text077")}
                  <a href="https://github.com/mmbelkiman/Venus-Particle-Editor" target="_blank"
                  className="sourcecode">{t("portfolio.sourcecode")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "600px" }} className="col-md-5 row-games-father block">
                <h1>{t("static.text078")}</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/ouradventuretime.gif" data-gifffer-width="100%"
                  data-gifffer-height="100%" />
                    </div>
                    <p id="ourAdventureTime-1">{t("portfolio.ourAdventureTime-1")}</p>
                    <p id="ourAdventureTime-2">{t("portfolio.ourAdventureTime-2")}</p>
                    <p id="ourAdventureTime-3">{t("portfolio.ourAdventureTime-3")}</p>

                    <br />

                    <div className="col-md-2 portfolio-unity">{t("static.text079")}

                </div>
                    <div className="col-md-1 portfolio-csharp">{t("static.text080")}

                </div>

                    <p className="portfolioUrl">{t("static.text081")}
                  <a href="https://redemptor.itch.io/our-adventure-time" target="_blank"
                  className="play-online">{t("portfolio.play-online")}</a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">{t("static.text082")}
                  <a href="https://github.com/redemptor/marriage_jam" target="_blank"
                  className="sourcecode">{t("portfolio.sourcecode")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-games-father block">
                <h1>{t("static.text083")}</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/ultraretrovirusattack.gif" data-gifffer-width="100%"
                  data-gifffer-height="100%" />
                    </div>
                    <p id="ultraretrovirus-1">{t("portfolio.ultraretrovirus-1")}</p>
                    <p id="ultraretrovirus-2">{t("portfolio.ultraretrovirus-2")}</p>
                    <p id="ultraretrovirus-3">{t("portfolio.ultraretrovirus-3")}</p>

                    <br />

                    <div className="col-md-2 portfolio-unity">{t("static.text084")}

                </div>
                    <div className="col-md-1 portfolio-csharp">{t("static.text085")}

                </div>

                    <p className="portfolioUrl">{t("static.text086")}
                  <a href="downloads/ultraretrovirusattack/index.html" target="_blank"
                  className="play-online">{t("portfolio.play-online")}</a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">{t("static.text087")}
                  <a href="https://github.com/mmbelkiman/UltraRetroVirusAttack" target="_blank"
                  className="sourcecode">{t("portfolio.sourcecode")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text088")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/itaucard.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>
                    <p id="itaucard-1">{t("portfolio.itaucard-1")}</p>
                    <p id="itaucard-2">{t("portfolio.itaucard-2")}</p>
                    <p id="itaucard-3">{t("portfolio.itaucard-3")}</p>

                    <br />

                    <div className="col-md-1 portfolio-java">{t("static.text089")}

                </div>

                    <p className="portfolioUrl">{t("static.text090")}
                  <a href="https://play.google.com/store/apps/details?id=com.itaucard.activity"
                  target="_blank">{t("static.text091")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "800px" }} className="col-md-5 row-games-father block">
                <h1>{t("static.text092")}</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/rupert.gif" data-gifffer-width="100%" data-gifffer-height="100%" />
                    </div>
                    <p id="rupert-1">{t("portfolio.rupert-1")}</p>
                    <p id="rupert-2">{t("portfolio.rupert-2")}</p>
                    <p id="rupert-3">{t("portfolio.rupert-3")}</p>

                    <br />

                    <div className="col-md-1 portfolio-java">{t("static.text093")}

                </div>

                    <p className="portfolioUrl">{t("static.text094")}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.calangostudio.rupertthefish"
                    target="_blank">{t("static.text095")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "800px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text096")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/tribanco.gif" data-gifffer-width="50%" data-gifffer-height="50%" />
                    </div>
                    <p id="tri-1">{t("portfolio.tri-1")}</p>
                    <p id="tri-2">{t("portfolio.tri-2")}</p>
                    <p id="tri-3">{t("portfolio.tri-3")}</p>

                    <br />

                    <div className="col-md-1 portfolio-js">{t("static.text097")}

                </div>

                    <p className="portfolioUrl">{t("static.text098")}
                  <a
                    href="https://play.google.com/store/apps/details?id=br.com.tribanco.mb&hl=pt_BR"
                    target="_blank">{t("static.text099")}</a>
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">{t("static.text100")}
                  <a
                    href="https://itunes.apple.com/us/app/tribanco-o-banco-do-varejo/id1095421258?mt=8"
                    target="_blank">{t("static.text101")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-games-father block">
                <h1>{t("static.text102")}</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/omgmyhouse.gif" data-gifffer-width="100%"
                  data-gifffer-height="100%" />
                    </div>

                    <p id="omg-1">{t("portfolio.omg-1")}</p>
                    <p id="omg-2">{t("portfolio.omg-2")}</p>
                    <p id="omg-3">{t("portfolio.omg-3")}</p>
                    <p id="omg-4">{t("portfolio.omg-4")}</p>

                    <br />

                    <div className="col-md-3 portfolio-construct">{t("static.text103")}

                </div>

                    <p className="portfolioUrl">{t("static.text104")}
                  <a href="downloads/omg/index.html" target="_blank">{t("static.text105")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "700px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text106")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/monografia.gif" data-gifffer-width="100%"
                  data-gifffer-height="100%" />
                    </div>

                    <p id="gamification-1">{t("portfolio.gamification-1")}</p>
                    <p id="gamification-2">{t("portfolio.gamification-2")}</p>
                    <p id="gamification-3">{t("portfolio.gamification-3")}</p>
                    <p id="gamification-4">{t("portfolio.gamification-4")}</p>
                    <br />

                    <div className="col-md-3 portfolio-html-css">{t("static.text107")}

                </div>
                    <div className="col-md-1 portfolio-js">{t("static.text108")}

                </div>

                    <p className="portfolioUrl">
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">{t("static.text109")}
                  <a
                    href="https://raw.githubusercontent.com/mmbelkiman/mmbelkiman.github.io/master/downloads/gamification-MarceloBelkiman.pdf"
                    target="_blank">{t("static.text110")}
                  </a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "500px" }} className="col-md-5 row-games-father block">
                <h1>{t("static.text111")}</h1>

                <div className="row-games row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/spacejay.gif" data-gifffer-width="100%" data-gifffer-height="100%" />
                    </div>

                    <p id="space-1">{t("portfolio.space-1")}</p>
                    <p id="space-2">{t("portfolio.space-2")}</p>
                    <p id="space-3">{t("portfolio.space-3")}</p>
                    <p id="space-4">{t("portfolio.space-4")}</p>
                    <br />

                    <div className="col-md-1 portfolio-java">{t("static.text112")}</div>

                    <p className="portfolioUrl">{t("static.text113")}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.calangostudio.spacejayfreermk"
                    target="_blank">{t("static.text114")}</a>
                    </p>
                </div>
            </div>
            

            
            <div style={{ height: "500px" }} className="col-md-5 row-software-father block">
                <h1>{t("static.text115")}</h1>

                <div className="row-software row-gif">
                    <div className="col-md-12 col-gif">
                        <img data-gifffer="gifs/clickideia.gif" data-gifffer-width="100%"
                  data-gifffer-height="100%" />
                    </div>

                    <p id="click-1">{t("portfolio.click-1")}</p>
                    <p id="click-2">{t("portfolio.click-2")}</p>
                    <p id="click-3">{t("portfolio.click-3")}</p>

                    <br />

                    <div className="col-md-1 portfolio-js">{t("static.text116")}

                </div>
                    <div className="col-md-1 portfolio-sql">{t("static.text117")}

                </div>
                    <div className="col-md-1 portfolio-php">{t("static.text118")}

                </div>

                    <p className="portfolioUrl">
                    </p>
                    <p style={{ marginTop: "0px" }} className="portfolioUrl">{t("static.text119")}
                  <a href="http://www.clickideia.com.br" target="_blank">{t("static.text120")}</a>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</div>

<footer id="container-contact-final">
</footer>



    </>);

}

export default App;
