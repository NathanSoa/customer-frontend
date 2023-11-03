const testCustomer = {
  id: 'test-id',
  name: 'Customer de Souza',
  birthdate: '1990-01-01',
  CPF: '123.456.789-10',
  cellphone: {
    type: 'mobile',
    DDD: '11',
    number: '91234-5678',
  },
  email: 'customer@gmail.com',
  password: 'any_password',
  cards: [
    {
      number: '1234 5678 9012 3456',
      name: 'Customer de Souza',
      securityCode: '123',
      flag: {
        id: 'visa',
        name: 'Visa',
      },
      main: true,
    },
  ],
  address: [
    {
      type: ['cobranca', 'entrega'],
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

export async function getCustomerDelayed(): Promise<typeof testCustomer> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testCustomer)
    }, 1000)
  })
}
