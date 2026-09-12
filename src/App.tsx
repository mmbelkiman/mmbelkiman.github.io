import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PortfolioCard } from './components/PortfolioCard';
import { portfolioItems } from './data/portfolio';
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
                                <p id="aulapp-1">{t("portfolio.aulapp.description.first")}</p>
                                <p id="aulapp-2">{t("portfolio.aulapp.description.second")}</p>
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
            <h1 style={{ color: "#FFF", fontSize: "4em", marginTop: "50px" }}><span id="">{t("portfolio.heading")}</span></h1>
        </div>
    </div>

<div className="container">
        <div className="row">
            {portfolioItems.map((item) => (
                <PortfolioCard key={item.titleKey} {...item} />
            ))}
        </div>
    </div>

</div>

<footer id="container-contact-final">
</footer>



    </>);

}

export default App;
