import { Link } from 'react-router-dom'
import { bio } from '../../data/bio'
import { social } from '../../data/social'
import LinkedInIcon from '../LinkedInIcon.jsx'

export default function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="hero-text">
        <h1 className="hero-name">{bio.name}</h1>
        <p className="hero-bio">{bio.paragraph}</p>
        <div className="hero-cta-row">
          <Link to="/contact" className="btn-outline">
            {bio.ctaLabel}
          </Link>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <img src={bio.photo} alt={bio.name} className="hero-photo" />
    </section>
  )
}
