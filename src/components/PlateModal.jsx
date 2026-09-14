import { useEffect, useRef } from 'react'

export default function PlateModal({ plate, onClose }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  function handleOverlayClick(event) {
    if (event.target === overlayRef.current) onClose()
  }

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={plate.name}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <img src={plate.image} alt={plate.name} className="modal-image" />
        <div className="modal-text">
          <h3>{plate.name}</h3>
          <p>{plate.blurb}</p>
        </div>
      </div>
    </div>
  )
}
