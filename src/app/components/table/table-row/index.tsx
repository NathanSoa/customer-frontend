import DeleteModal from '@/app/components/delete-modal'
import Modal from '@/app/components/modal'
import MainForm from '@/app/customers/components/main-form'

import { useModal } from '@/app/hooks/useModal'

import { getDataToDisplay } from '@/utils/get-data-to-display'

import { Pencil, Trash } from 'phosphor-react'

interface TableBodyProps {
  data: any
}

export default function TableBody({ data }: TableBodyProps) {
  const {
    showModal: showDeleteModal,
    closeModal: closeDeleteModal,
    openModal: openDeletModal,
  } = useModal()

  const {
    showModal: showEditModal,
    closeModal: closeEditModal,
    openModal: openEditModal,
  } = useModal()

  const dataToDisplay = getDataToDisplay(data)

  return (
    <tr className="bg-white">
      {dataToDisplay.map((cell, index) => (
        <td className="p-tableCell" key={index}>
          {cell}
        </td>
      ))}
      <td className="p-tableCell">
        <div className="justify-left flex items-center gap-1">
          <Pencil
            size={24}
            alt="Editar"
            className="cursor-pointer hover:text-green-400"
            onClick={openEditModal}
          />
          <Trash
            size={24}
            alt="Apagar"
            className="cursor-pointer hover:text-red-500"
            onClick={openDeletModal}
          />
        </div>
        {showDeleteModal && (
          <DeleteModal
            handleDelete={(id: string) => {
              console.log(id)
            }}
            onHide={closeDeleteModal}
            title="Apagar Entidade"
            entityId={data.id}
            entityName={data.name}
          />
        )}
        {showEditModal && (
          <Modal title="Editar cliente" onHide={closeEditModal}>
            <MainForm close={closeEditModal} id={data.id} />
          </Modal>
        )}
      </td>
    </tr>
  )
}
