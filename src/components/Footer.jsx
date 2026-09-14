import { social } from '../data/social'

export default function Footer() {
  return (
    <footer className="footer">
      <a href={social.github} target="_blank" rel="noreferrer" className="footer-link">
        GitHub
      </a>
    </footer>
  )
}
