import { getCustomerDelayed } from '@/domain/customer/test-customer'
import Breadcrumb from '@/app/components/breadcrumb'
import Title from '@/app/components/title'
import Table from '@/app/components/table'

export default async function Page() {
  const testCustomer = await getCustomerDelayed()
  const formattedCellphone = `(${testCustomer.cellphone.DDD}) ${testCustomer.cellphone.number}`

  return (
    <div className="p-2">
      <Breadcrumb title="Clientes" />
      <div className="mb-2 h-1 border-b-2 border-b-gray-500" />
      <Title>Clientes</Title>
      <Table
        headers={['Nome', 'E-mail', 'Telefone']}
        data={[testCustomer.name, testCustomer.email, formattedCellphone]}
      />
    </div>
  )
}
