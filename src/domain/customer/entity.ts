import { BaseEntity } from '@/domain/common/base-entity'

export interface Address {
  streetPurpose: string[]
  streetType: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  country: string
  zipCode: string
  alias: string
  complement: string
}

export interface Card {
  type: string
  name: string
  number: string
  securityCode: string
  flag: string
  main: boolean
}

export interface Customer extends BaseEntity {
  name: string
  cpf: string
  birthdate: string
  email: string
  password: string
  phone: string
  address: Address[]
  cards: Card[]
}

export interface CustomerCreate {
  name: string
  cpf: string
  birthdate: string
  email: string
  password: string
  passwordConfirm: string
  phone: string
  ddd: string
  address: Address[]
  cards: Card[]
}

export const EmptyCustomer: Customer = {
  id: '',
  name: '',
  cpf: '',
  birthdate: '',
  email: '',
  password: '',
  phone: '',
  address: [],
  cards: [],
  active: true,
}
