import { useEffect, useRef } from 'react'

export function useModalDismiss(onClose) {
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

  return { overlayRef, handleOverlayClick }
}
