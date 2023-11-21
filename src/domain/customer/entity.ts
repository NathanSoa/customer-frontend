import { BaseEntity } from '@/domain/common/base-entity'

export interface Phone {
  type: string
  ddd: string
  number: string
}

export interface Address {
  streetPurpose?: string[]
  streetType?: string
  street?: string
  number?: string
  neighborhood?: string
  city?: string
  state?: string
  country?: string
  zipCode?: string
  complement?: string
}

export interface Card {
  type?: string
  name?: string
  number?: string
  securityCode?: string
  flag?: string
  main?: boolean
}

export interface Customer extends BaseEntity {
  name: string
  cpf: string
  birthdate: Date
  email: string
  password: string
  phone: Phone
  address: Address[]
  cards: Card[]
}
