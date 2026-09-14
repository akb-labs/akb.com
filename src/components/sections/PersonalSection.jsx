import { useState } from 'react'
import { personalPieces } from '../../data/personal'
import ItemModal from '../ItemModal.jsx'

// Layout for the scattered wall — one entry per item in personalPieces, in order.
const layout = [
  { left: 30, top: 20, width: 150, height: 150, radius: '50%' },
  { left: 140, top: 130, width: 90, height: 90, radius: '50%' },
  { left: 420, top: 0, width: 230, height: 230, radius: '50%' },
  { left: 640, top: 40, width: 170, height: 170, radius: '24px' },
  { left: 980, top: 20, width: 130, height: 170, radius: '12px' },
  { left: 560, top: 230, width: 120, height: 120, radius: '50%' },
  { left: 60, top: 280, width: 210, height: 230, radius: '50%' },
  { left: 300, top: 340, width: 110, height: 110, radius: '50%' },
  { left: 780, top: 260, width: 100, height: 100, radius: '50%' },
  { left: 900, top: 340, width: 150, height: 150, radius: '50%' },
]

export default function PersonalSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="personal" className="section personal-section">
      <svg className="personal-bg" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="meadowGrad" cx="30%" cy="20%" r="90%">
            <stop offset="0%" stopColor="#ff9a3c" />
            <stop offset="55%" stopColor="#e8611f" />
            <stop offset="100%" stopColor="#7a2b0a" />
          </radialGradient>
          <filter id="meadowGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
            <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
          </filter>
        </defs>
        <rect width="1440" height="700" fill="url(#meadowGrad)" />
        <rect width="1440" height="700" filter="url(#meadowGrain)" />
      </svg>

      <div className="personal-heading">
        <h2 className="section-heading section-heading-light">serve your purpose</h2>
        <p className="eyebrow eyebrow-light">Just a few of my favorite personal pieces</p>
      </div>

      <div className="personal-scatter">
        {personalPieces.map((item, index) => {
          const pos = layout[index] ?? { left: 0, top: 0, width: 140, height: 140, radius: '50%' }
          return (
            <button
              key={item.name}
              className="personal-item"
              style={{ left: pos.left, top: pos.top, width: pos.width, height: pos.height, borderRadius: pos.radius }}
              onClick={() => setSelected(item)}
            >
              <img src={item.image} alt={item.name} />
            </button>
          )
        })}
      </div>

      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
