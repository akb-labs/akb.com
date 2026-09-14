import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { bio } from '../data/bio'

const sectionLinks = [
  { hash: '#about', label: 'About' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#cool-orgs', label: 'Cool Orgs' },
  { hash: '#personal', label: 'Personal' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(event, hash) {
    event.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
      return
    }
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', hash)
  }

  return (
    <header className="nav">
      <div className="nav-bar">
        <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
          {bio.name}
        </Link>

        <div className="nav-right">
          <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
            {sectionLinks.map((link) => (
              <a key={link.hash} href={link.hash} className="nav-link" onClick={(e) => goToSection(e, link.hash)}>
                {link.label}
              </a>
            ))}
            <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
