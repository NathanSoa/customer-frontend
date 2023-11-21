import { Address, Card, Customer } from '@/domain/customer/entity'
import { getCustomerDelayed2 } from '@/domain/customer/test-customer'
import { useState } from 'react'

export function useCustomer() {
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

  function markCardAsMain(card: Card) {
    if (!customer) return

    const mainCard = customer.cards.find((c) => c.number === card.number)

    if (!mainCard) return

    customer.cards.forEach((c) => {
      c.main = false
      editCard(c)
    })

    if (mainCard.number === card.number) {
      mainCard.main = true
      editCard(mainCard)
    }
  }

  return {
    customer,
    updateCustomer,
    markCardAsMain,
    addAddress,
    addCard,
    editAddress,
    editCard,
    removeCard,
    removeAddress,
  }
}
