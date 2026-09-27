import { useModalDismiss } from '../hooks/useModalDismiss'

export default function ItemModal({ item, onClose }) {
  const { overlayRef, handleOverlayClick } = useModalDismiss(onClose)

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
