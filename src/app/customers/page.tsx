'use client'

import Breadcrumb from '@/app/components/breadcrumb'
import Title from '@/app/components/title'
import Table from '@/app/components/table'
import Modal from '@/app/components/modal'
import TableRow from '@/app/components/table/table-row'
import MainForm from '@/app/customers/components/main-form'
import Button from '@/app/components/button'

import { useModal } from '@/app/hooks/useModal'

import { getCustomerDelayed } from '@/domain/customer/test-customer'

import { PlusCircle } from 'phosphor-react'

export default function Page() {
  const { showModal, closeModal, openModal } = useModal()

  const customers = getCustomerDelayed()

  return (
    <div className="p-2">
      <Breadcrumb title="Clientes" />
      <div className="mb-2 h-1 border-b-2 border-b-gray-500" />
      <div className="flex items-center gap-6 py-3">
        <Title>Clientes</Title>
        <Button.Blue onClick={openModal}>
          <PlusCircle size={32} />
          <span className="upper font-semibold">Novo cliente</span>
        </Button.Blue>
      </div>
      <Table headers={['Nome', 'E-mail', 'Telefone']}>
        {customers.map((customer, index) => {
          const formattedPhone = `(${customer.phone.ddd}) ${customer.phone.number}`
          return (
            <TableRow
              data={[customer.name, customer.email, formattedPhone]}
              key={index}
            />
          )
        })}
      </Table>

      {showModal && (
        <Modal title="Cadastrar cliente" onHide={closeModal}>
          <MainForm />
        </Modal>
      )}
    </div>
  )
}
