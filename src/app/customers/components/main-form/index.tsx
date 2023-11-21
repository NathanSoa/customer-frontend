'use client'

import Button from '@/app/components/button'
import AlignedInputs from '@/app/components/aligned-inputs'
import Input from '@/app/components/input'
import InputContainer from '@/app/components/input-container'
import InfoCard from '@/app/components/info-card'
import Modal from '@/app/components/modal'
import AddressForm from '@/app/customers/components/address-form'
import CardForm from '@/app/customers/components/card-form'
import Form from '@/app/components/form'

import { useModal } from '@/app/hooks/useModal'
import { useCustomer } from '@/app/hooks/useCustomer'

export default function MainForm() {
  const { customer, addAddress, addCard } = useCustomer()

  const {
    showModal: showAddressModal,
    closeModal: closeAddressModal,
    openModal: openAddressModal,
  } = useModal()

  const {
    showModal: showCardModal,
    closeModal: closeCardModal,
    openModal: openCardModal,
  } = useModal()

  return (
    <Form onSubmit={(e) => console.log('submitted')}>
      <InputContainer>
        <label htmlFor="name">Nome *</label>
        <Input type="text" name="name" id="name" />
      </InputContainer>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="cpf">CPF *</label>
          <Input type="cpf" name="cpf" id="cpf" />
        </InputContainer>
        <AlignedInputs.Two>
          <InputContainer>
            <label htmlFor="ddd">DDD *</label>
            <Input type="text" name="ddd" id="ddd" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phone">Telefone *</label>
            <Input type="text" name="phone" id="phone" />
          </InputContainer>
        </AlignedInputs.Two>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="email">E-mail *</label>
          <Input type="email" name="email" id="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="birthdate">Data de Nascimento *</label>
          <Input type="text" name="birthdate" id="birthdate" />
        </InputContainer>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="password">Senha *</label>
          <Input type="password" name="password" id="password" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password-confirm">Confirme a senha *</label>
          <Input
            type="password"
            name="password-confirm"
            id="password-confirm"
          />
        </InputContainer>
      </AlignedInputs.Two>

      <div>
        <h2 className="text-lg">Endereço(s) *</h2>
        <div className="py-3 font-semibold">
          É necessário ter um endreço de cobrança e de entrega
        </div>
        <div className="grid grid-cols-aligned-itens-2 gap-1 py-2">
          {customer !== null &&
            customer.address.map((address, index) => (
              <InfoCard key={index}>
                <div>{`${address.street}, nº ${address.number}`}</div>
                <div>{`${address.neighborhood}, ${address.city} - ${address.country}`}</div>
                <div>
                  {address.streetPurpose !== undefined &&
                    address.streetPurpose.join(' - ')}
                </div>
              </InfoCard>
            ))}
        </div>
        <Button.Blue onClick={openAddressModal}>Adicionar Endereço</Button.Blue>
      </div>

      <div>
        <h2 className="text-lg">Cartão(ões) *</h2>
        <div className="grid grid-cols-aligned-itens-3 gap-1 py-2">
          {customer !== null &&
            customer.cards.map((card, index) => (
              <InfoCard key={index}>
                <div>{card.flag}</div>
                <div>{card.number}</div>
                <div>Titular: {card.name?.toLocaleUpperCase()}</div>
              </InfoCard>
            ))}
        </div>
        <Button.Blue onClick={openCardModal}>Adicionar Cartão</Button.Blue>
      </div>

      <div className="mt-4 flex justify-end">
        <Button.Green onClick={() => console.log('Adicionar Cartão')}>
          Salvar
        </Button.Green>
      </div>

      {showAddressModal && (
        <Modal onHide={closeAddressModal} title="Adicionar Endereço">
          <AddressForm addAddress={addAddress} close={closeAddressModal} />
        </Modal>
      )}

      {showCardModal && (
        <Modal onHide={closeCardModal} title="Adicionar Cartão">
          <CardForm addCard={addCard} close={closeCardModal} />
        </Modal>
      )}
    </Form>
  )
}
