'use client'

import Button from '@/components/button'
import AlignedInputs from '@/components/aligned-inputs'
import Input from '@/components/input'
import InputContainer from '@/components/input-container'
import InfoCard from '@/components/info-card'
import Modal from '@/components/modal'
import AddressForm from '@/components/customer/address-form'
import CardForm from '@/components/customer/card-form'
import Form from '@/components/form'

import { useModal } from '@/hooks/useModal'
import { useCustomer } from '@/hooks/useCustomer'
import { useValidator } from '@/hooks/useValidator'

import { CustomerZodValidation } from '@/validation/customer-zod-validation'

import { CustomerCreate } from '@/domain/customer/entity'
import { getCustomerDelayed2 } from '@/domain/customer/test-customer'

import { handleInputData } from '@/utils/handle-input-data'
import {
  normalizeCPF,
  normalizeDate,
  normalizePhoneNumber,
} from '@/utils/normalizers'

import { Star, X } from 'phosphor-react'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface MainFormProps {
  id?: string | null
  close: () => void
}

export default function MainForm({ id = null, close }: MainFormProps) {
  const {
    customer,
    setCustomer,
    addAddress,
    addCard,
    removeCard,
    removeAddress,
    markCardAsMain,
  } = useCustomer()

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

  const [renderErrors, setRenderErrors] = useState<any>({})
  const { validate, errors, addError } = useValidator(CustomerZodValidation)
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [cpf, setCpf] = useState('')

  function handleSubmit(e: any) {
    e.preventDefault()
    const formLength = e.target.form.length

    const formData: Partial<CustomerCreate> = {}

    for (let i = 0; i < formLength; i++) {
      handleInputData(formData, e.target.form[i])
    }

    const success = validate({
      ...formData,
      cards: customer?.cards,
      address: customer?.address,
    })

    if (formData.passwordConfirm !== formData.password) {
      addError('passwordConfirm', 'As senhas não coincidem')
    }

    if (success) {
      close()
      console.log('Sucesso')
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setRenderErrors(errors)
    }
  }, [errors])

  return (
    <Form>
      <InputContainer>
        <label htmlFor="name">Nome *</label>
        {renderErrors.name && (
          <span className="text-sm text-red-500">{renderErrors.name}</span>
        )}
        <Input type="text" name="name" id="name" />
      </InputContainer>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="cpf">CPF *</label>
          {renderErrors.cpf && (
            <span className="text-sm text-red-500">{renderErrors.cpf}</span>
          )}
          <Input
            type="cpf"
            name="cpf"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(normalizeCPF(e.target.value))}
          />
        </InputContainer>
        <AlignedInputs.Two>
          <InputContainer>
            <label htmlFor="ddd">DDD *</label>
            {renderErrors.ddd && (
              <span className="text-sm text-red-500">{renderErrors.ddd}</span>
            )}
            <Input type="text" name="ddd" id="ddd" maxLength={2} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phone">Telefone *</label>
            {renderErrors.phone && (
              <span className="text-sm text-red-500">{renderErrors.phone}</span>
            )}
            <Input
              type="text"
              name="phone"
              id="phone"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(normalizePhoneNumber(e.target.value))}
            />
          </InputContainer>
        </AlignedInputs.Two>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="email">E-mail *</label>
          {renderErrors.email && (
            <span className="text-sm text-red-500">{renderErrors.email}</span>
          )}
          <Input type="email" name="email" id="email" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="birthdate">Data de Nascimento *</label>
          {renderErrors.birthdate && (
            <span className="text-sm text-red-500">
              {renderErrors.birthdate}
            </span>
          )}
          <Input
            type="text"
            name="birthdate"
            id="birthdate"
            value={date}
            onChange={(e) => setDate(normalizeDate(e.target.value))}
          />
        </InputContainer>
      </AlignedInputs.Two>

      <div>
        <h2 className="text-lg">Endereço(s) *</h2>
        {renderErrors.address && (
          <span className="text-sm text-red-500">{renderErrors.address}</span>
        )}
        <div className="py-3 font-semibold">
          É necessário ter um endreço de cobrança e de entrega
        </div>
        <div className="grid grid-cols-aligned-itens-2 gap-1 py-2">
          {customer !== undefined &&
            customer.address.map((address, index) => (
              <InfoCard key={index}>
                <div className="flex justify-between">
                  <div className="font-bold">{address.alias}</div>
                  <X
                    className="h-6 w-6 cursor-pointer text-red-400 hover:text-red-500"
                    onClick={() => removeAddress(address)}
                  />
                </div>
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
        {renderErrors.cards && (
          <span className="text-sm text-red-500">{renderErrors.cards}</span>
        )}
        <div className="grid grid-cols-aligned-itens-3 gap-1 py-2">
          {customer !== undefined &&
            customer.cards.map((card, index) => (
              <InfoCard key={index}>
                <div className="flex justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <Star
                      onClick={() => markCardAsMain(card)}
                      className={classNames({
                        'text-yellow-400': card.main === true,
                        'text-gray-500': card.main === false,
                        'h-6 w-6 cursor-pointer': true,
                      })}
                    ></Star>
                    {card.flag}
                  </div>
                  <X
                    className="h-6 w-6 cursor-pointer text-red-400 hover:text-red-500"
                    onClick={() => removeCard(card)}
                  />
                </div>
                <div>{card.number}</div>
                <div>Titular: {card.name?.toLocaleUpperCase()}</div>
              </InfoCard>
            ))}
        </div>
        <Button.Blue onClick={openCardModal}>Adicionar Cartão</Button.Blue>
      </div>

      <div className="mt-4 flex justify-end">
        <Button.Green onClick={(e) => handleSubmit(e)}>Salvar</Button.Green>
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
