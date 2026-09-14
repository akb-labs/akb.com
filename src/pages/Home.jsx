import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import CommunitySection from '../components/sections/CommunitySection.jsx'
import PersonalSection from '../components/sections/PersonalSection.jsx'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <Hero />
      <ProjectsSection />
      <CommunitySection />
      <PersonalSection />
    </>
  )
}
