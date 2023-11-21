import { Customer } from './entity'

const testCustomer = {
  id: 'test-id',
  active: true,
  name: 'Customer de Souza',
  birthdate: new Date('1990-01-01'),
  cpf: '123.456.789-10',
  phone: {
    type: 'mobile',
    ddd: '11',
    number: '91234-5678',
  },
  email: 'customer@gmail.com',
  password: 'any_password',
  cards: [
    {
      type: 'credit',
      number: '1234 5678 9012 3456',
      name: 'Customer de Souza',
      securityCode: '123',
      flag: 'Visa',
      main: true,
    },
  ],
  address: [
    {
      streetPurpose: ['Cobrança', 'Entrega'],
      streetType: 'Avenida',
      street: 'Avenida Paulista',
      number: '1000',
      neighborhood: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
      zipCode: '01310-100',
      complement: '', // optional
    },
  ],
}

export function getCustomerDelayed(): Customer[] {
  return [testCustomer, testCustomer]
}

export function getCustomerDelayed2(): Customer {
  return testCustomer
}
