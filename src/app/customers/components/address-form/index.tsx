'use client'

import Button from '@/app/components/button'
import Input from '@/app/components/input'
import InputContainer from '@/app/components/input-container'
import AlignedInputs from '@/app/components/aligned-inputs'
import Form from '@/app/components/form'
import SelectInput from '@/app/components/select-input'
import CheckBoxContainer from '@/app/components/checkbox-container'

import { useValidator } from '@/app/hooks/useValidator'

import { normalizeCep } from '@/utils/normalizers'
import { handleInputData } from '@/utils/handle-input-data'

import { Address } from '@/domain/customer/entity'
import { streetTypes } from '@/domain/customer/address/street-types'
import { states } from '@/domain/customer/address/states'

import { AddressZodValidation } from '@/validation/customer-zod-validation'

import { useEffect, useState } from 'react'

interface AddressFormProps {
  addAddress: (address: Address) => void
  close: () => void
}

export default function AddressForm({ addAddress, close }: AddressFormProps) {
  const [cep, setCep] = useState('')
  const [renderErrors, setRenderErrors] = useState<any>({})
  const { validate, errors } = useValidator(AddressZodValidation)

  function handleSubmit(e: any) {
    e.preventDefault()
    const formLength = e.target.form.length

    const data: Address = {}

    for (let i = 0; i < formLength; i++) {
      handleInputData(data, e.target.form[i])
    }

    const success = validate(data)

    if (success) {
      addAddress(data)
      close()
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setRenderErrors(errors)
    }
  }, [errors])

  return (
    <Form>
      <AlignedInputs.Three>
        <InputContainer>
          <label htmlFor="streetType">Tipo de Logradouro *</label>
          {renderErrors.streetType && (
            <span className="text-sm text-red-500">
              {renderErrors.streetType}
            </span>
          )}
          <SelectInput
            options={streetTypes as readonly string[]}
            id="streetType"
            name="streetType"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="street">Logradouro *</label>
          {renderErrors.street && (
            <span className="text-sm text-red-500">{renderErrors.street}</span>
          )}
          <Input type="text" name="street" id="street" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="number">Número *</label>
          {renderErrors.number && (
            <span className="text-sm text-red-500">{renderErrors.number}</span>
          )}
          <Input type="text" name="number" id="number" />
        </InputContainer>
      </AlignedInputs.Three>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="neighborhood">Bairro *</label>
          {renderErrors.neighborhood && (
            <span className="text-sm text-red-500">
              {renderErrors.neighborhood}
            </span>
          )}
          <Input type="text" name="neighborhood" id="neighborhood" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="zipCode">Código Postal *</label>
          {renderErrors.zipCode && (
            <span className="text-sm text-red-500">{renderErrors.zipCode}</span>
          )}
          <Input
            type="text"
            name="zipCode"
            id="zipCode"
            value={cep}
            onChange={(e) => {
              setCep(normalizeCep(e.target.value))
            }}
          />
        </InputContainer>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="city">Cidade *</label>
          {renderErrors.city && (
            <span className="text-sm text-red-500">{renderErrors.city}</span>
          )}
          <Input type="text" name="city" id="city" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="state">Estado *</label>
          {renderErrors.state && (
            <span className="text-sm text-red-500">{renderErrors.state}</span>
          )}
          <SelectInput
            options={states as readonly string[]}
            id="state"
            name="state"
          />
        </InputContainer>
      </AlignedInputs.Two>

      <InputContainer>
        <label htmlFor="complement">Complemento</label>
        <Input type="text" name="complement" id="complement" />
      </InputContainer>

      <div className="flex flex-col gap-1">
        <label htmlFor="streetPurpose" className="block">
          Tipo de Endereço *
        </label>
        {renderErrors.streetPurpose && (
          <span className="text-sm text-red-500">
            {renderErrors.streetPurpose}
          </span>
        )}
        <div className="flex items-center gap-5 pt-3">
          <CheckBoxContainer>
            <label htmlFor="delivery" className="pr-1">
              Entrega
            </label>
            <Input
              type="checkbox"
              name="streetPurpose"
              id="delivery"
              value={'Entrega'}
            />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <label htmlFor="billing" className="pr-1">
              Cobrança
            </label>
            <Input
              type="checkbox"
              name="streetPurpose"
              id="billing"
              value={'Cobrança'}
            />
          </CheckBoxContainer>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button.Green type="submit" onClick={(e) => handleSubmit(e)}>
          Salvar
        </Button.Green>
      </div>
    </Form>
  )
}
