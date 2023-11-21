import { Address, Card, Customer } from '@/domain/customer/entity'
import { getCustomerDelayed2 } from '@/domain/customer/test-customer'
import { useState } from 'react'

interface UseCustomer {
  customer: Customer | null
  updateCustomer: (customer: Customer) => void
  addAddress: (address: Address) => void
  addCard: (card: Card) => void
  editAddress: (address: Address) => void
  editCard: (card: Card) => void
  removeCard: (card: Card) => void
  removeAddress: (address: Address) => void
}

export function useCustomer(): UseCustomer {
  const [customer, setCustomer] = useState<Customer | null>(
    getCustomerDelayed2(),
  )

  function addAddress(address: Address) {
    if (!customer) return
    address.country = 'Brasil'
    setCustomer({
      ...customer,
      address: [...customer.address, address],
    })
  }

  function addCard(card: Card) {
    if (!customer) return
    setCustomer({
      ...customer,
      cards: [...customer.cards, card],
    })
  }

  function updateCustomer(customer: Customer) {
    setCustomer(customer)
  }

  function editAddress(address: Address) {
    if (!customer) return
    setCustomer({
      ...customer,
      address: customer.address.map((a) =>
        a.zipCode === address.zipCode ? address : a,
      ),
    })
  }

  function editCard(card: Card) {
    if (!customer) return
    setCustomer({
      ...customer,
      cards: customer.cards.map((c) => (c.number === card.number ? card : c)),
    })
  }

  function removeCard(card: Card) {
    if (!customer) return
    setCustomer({
      ...customer,
      cards: customer.cards.filter((c) => c.number !== card.number),
    })
  }

  function removeAddress(address: Address) {
    if (!customer) return
    setCustomer({
      ...customer,
      address: customer.address.filter((a) => a.zipCode !== address.zipCode),
    })
  }

  return {
    customer,
    updateCustomer,
    addAddress,
    addCard,
    editAddress,
    editCard,
    removeCard,
    removeAddress,
  }
}
