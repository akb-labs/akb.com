import { bio } from '../data/bio'

export default function Home() {
  return (
    <section className="home">
      <img src={bio.photo} alt={bio.name} className="home-photo" />
      <div className="home-text">
        <h1>{bio.name}</h1>
        <p className="home-tagline">{bio.tagline}</p>
        {bio.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
