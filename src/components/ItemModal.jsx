import { useEffect, useRef } from 'react'

export default function ItemModal({ item, onClose }) {
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
      aria-label={item.name}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <img src={item.image} alt={item.name} className="modal-image" />
        <div className="modal-text">
          <h3>{item.name}</h3>
          <p>{item.blurb}</p>
        </div>
      </div>
    </div>
  )
}
