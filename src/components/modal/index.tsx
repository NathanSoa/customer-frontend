'use client'

import { X } from 'phosphor-react'
import { ReactNode } from 'react'

interface ModalProps {
  title: string
  children: ReactNode
  onHide: () => void
}

export default function Modal({ children, title, onHide }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="z-50 m-4 max-h-full w-full max-w-5xl overflow-auto rounded-lg bg-slate-100 p-6 text-gray-700">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button className="text-red-500 hover:text-red-400" onClick={onHide}>
            <span className="sr-only">Fechar</span>
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
