import { Link } from 'react-router-dom'
import { bio } from '../../data/bio'

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-text">
        <h1 className="hero-name">{bio.name}</h1>
        <p className="hero-bio">{bio.paragraph}</p>
        <Link to="/contact" className="btn-outline">
          {bio.ctaLabel}
        </Link>
      </div>
      <img src={bio.photo} alt={bio.name} className="hero-photo" />
    </section>
  )
}
