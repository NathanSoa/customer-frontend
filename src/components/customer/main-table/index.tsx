import Table from '@/components/table'
import TableRow from '@/components/table/table-row'

import { env } from '@/config/environment'

import { Customer } from '@/domain/customer/entity'
import { use } from 'react'

const getCustomer = async (): Promise<Customer[]> => {
  const response = await fetch(`${env.API_URL}/customers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  })
  return (await response.json()) as Customer[]
}

export function MainTable() {
  const customers = use(getCustomer())
  return (
    <Table headers={['Nome', 'E-mail', 'Telefone']}>
      {customers.map((customer, index) => {
        return (
          <TableRow
            data={{
              id: customer.id,
              name: customer.name,
              email: customer.email,
              phone: customer.phone,
            }}
            key={index}
          />
        )
      })}
    </Table>
  )
}
