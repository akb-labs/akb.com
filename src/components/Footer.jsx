import { Link } from 'react-router-dom'
import { social } from '../data/social'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/contact" className="footer-link">
        Contact form
      </Link>
      <span className="footer-divider">|</span>
      <a href={social.linkedin} target="_blank" rel="noreferrer" className="footer-link">
        LinkedIn
      </a>
      <span className="footer-divider">|</span>
      <a href={social.github} target="_blank" rel="noreferrer" className="footer-link">
        GitHub
      </a>
    </footer>
  )
}
