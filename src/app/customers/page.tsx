'use client'

import Breadcrumb from '@/components/breadcrumb'
import Title from '@/components/title'
import Modal from '@/components/modal'
import { MainTable } from '@/components/customer/main-table'
import MainForm from '@/components/customer/main-form'
import Button from '@/components/button'

import { useModal } from '@/hooks/useModal'
import { PlusCircle } from 'phosphor-react'

export default function Page() {
  const {
    showModal: showCreateModal,
    closeModal: closeCreateModal,
    openModal: openCreateModal,
  } = useModal()

  return (
    <div className="p-2">
      <Breadcrumb title="Clientes" />
      <div className="mb-2 h-1 border-b-2 border-b-gray-500" />
      <div className="flex items-center gap-6 py-3">
        <Title>Clientes</Title>
        <Button.Blue onClick={openCreateModal}>
          <PlusCircle size={32} />
          <span className="upper font-semibold">Novo cliente</span>
        </Button.Blue>
      </div>
      <MainTable />
      {showCreateModal && (
        <Modal title="Cadastrar cliente" onHide={closeCreateModal}>
          <MainForm close={closeCreateModal} />
        </Modal>
      )}
    </div>
  )
}
