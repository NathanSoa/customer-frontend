'use client'

import { Pencil, Trash } from 'phosphor-react'

export default function ActionSection() {
  return (
    <td className="p-tableCell">
      <div className="justify-left flex items-center gap-1">
        <Pencil
          size={24}
          alt="Editar"
          className="cursor-pointer hover:text-green-400"
        />
        <Trash
          size={24}
          alt="Apagar"
          className="cursor-pointer hover:text-red-500"
        />
      </div>
    </td>
  )
}
