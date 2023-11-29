import { useState } from 'react'

interface UseModal {
  showModal: boolean
  closeModal: () => void
  openModal: () => void
}

export function useModal(): UseModal {
  const [showModal, setShowModal] = useState(false)

  function closeModal() {
    setShowModal(false)
  }

  function openModal() {
    setShowModal(true)
  }

  return { showModal, closeModal, openModal }
}
