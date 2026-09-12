import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AcademicEducationSection } from './components/sections/AcademicEducationSection'
import { ContactSection } from './components/sections/ContactSection'
import { LanguagesSection } from './components/sections/LanguagesSection'
import { OtherKnowledgeSection } from './components/sections/OtherKnowledgeSection'
import { PageTop } from './components/sections/PageTop'
import { PortfolioSection } from './components/sections/PortfolioSection'
import { ProfessionalExperienceSection } from './components/sections/ProfessionalExperienceSection'
import { ProgrammingSection } from './components/sections/ProgrammingSection'
import './App.css'

function App() {
  const { i18n } = useTranslation()
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const professionalCarouselRef = useRef<HTMLElement>(null)
  const educationCarouselRef = useRef<HTMLElement>(null)
  const heroOffset = 20 - scrollPosition / 4

  useEffect(() => {
    document.body.className = 'body-home'
    return () => {
      document.body.className = ''
    }
  }, [])

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

  const toggleLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === 'en' ? 'pt-BR' : 'en'
    localStorage.setItem('site-language', nextLanguage)
    void i18n.changeLanguage(nextLanguage)
  }

  const scrollCarousel = (carouselRef: React.RefObject<HTMLElement | null>, direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 150, behavior: 'smooth' })
  }

  return (
    <>
      <PageTop
        isHeaderShrunk={isHeaderShrunk}
        heroOffset={heroOffset}
        showScrollHint={showScrollHint}
        onToggleLanguage={toggleLanguage}
      />

      <div id="container-content" className="container">
        <ProfessionalExperienceSection
          carouselRef={professionalCarouselRef}
          onScrollCarousel={(direction) => scrollCarousel(professionalCarouselRef, direction)}
        />

        <div className="row">
          <ProgrammingSection />
          <OtherKnowledgeSection />
        </div>

        <div className="row">
          <AcademicEducationSection
            carouselRef={educationCarouselRef}
            onScrollCarousel={(direction) => scrollCarousel(educationCarouselRef, direction)}
          />
          <LanguagesSection />
        </div>
      </div>

      <div id="container-contact" className="container-fluid">
        <ContactSection />
        <PortfolioSection />
      </div>
    </>
  )
}

export default App
