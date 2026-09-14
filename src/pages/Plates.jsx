import { useState } from 'react'
import { plates } from '../data/plates'
import PlateModal from '../components/PlateModal.jsx'

export default function Plates() {
  const [selected, setSelected] = useState(null)

  return (
    <section>
      <h1>Plates</h1>
      <div className="grid plates-grid">
        {plates.map((plate) => (
          <button
            key={plate.name}
            className="plate-thumb"
            onClick={() => setSelected(plate)}
          >
            <img src={plate.image} alt={plate.name} />
            <span>{plate.name}</span>
          </button>
        ))}
      </div>
      {selected && <PlateModal plate={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
