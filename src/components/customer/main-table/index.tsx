'use client'

import Table from '@/components/table'
import TableRow from '@/components/table/table-row'

import { env } from '@/config/environment'

import { Customer } from '@/domain/customer/entity'

import { http } from '@/infra/http-fetch'

import { useEffect, useState } from 'react'

const getCustomer = async (): Promise<Customer[]> => {
  return await http({
    url: `${env.API_URL}/customers`,
    method: 'GET',
  })
}

export function MainTable() {
  const [customers, setCustomer] = useState<Customer[]>([])

  useEffect(() => {
    getCustomer()
      .then((customers) => {
        setCustomer(customers)
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }, [])

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
            handleDelete={(id: string) => {
              http({
                url: `${env.API_URL}/customers/${id}`,
                method: 'DELETE',
              })
                .then(() => {
                  setCustomer(
                    customers.filter((customer) => customer.id !== id),
                  )
                })
                .catch((err) => {
                  console.log('erro', err)
                })
            }}
          />
        )
      })}
    </Table>
  )
}
