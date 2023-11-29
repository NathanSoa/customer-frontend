'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import InputContainer from '@/components/input-container'
import AlignedInputs from '@/components/aligned-inputs'
import Form from '@/components/form'
import SelectInput from '@/components/select-input'

import { useValidator } from '@/hooks/useValidator'
import { useCard } from '@/hooks/useCard'

import { Card } from '@/domain/customer/entity'

import { handleInputData } from '@/utils/handle-input-data'
import { normalizeCardNumber } from '@/utils/normalizers'

import { CardZodValidation } from '@/validation/card-zod-validation'

import { useEffect, useState } from 'react'

interface CardFormProps {
  addCard: (card: Card) => void
  close: () => void
}

export default function CardForm({ addCard, close }: CardFormProps) {
  const [renderErrors, setRenderErrors] = useState<any>({})
  const [cardNumber, setCardNumber] = useState('')

  const { flags } = useCard()
  const { validate, errors } = useValidator(CardZodValidation)

  function handleSubmit(e: any) {
    e.preventDefault()
    const formLength = e.target.form.length

    const data: Partial<Card> = {}

    for (let i = 0; i < formLength; i++) {
      handleInputData(data, e.target.form[i])
    }

    const success = validate(data)

    if (success) {
      addCard(data as Card)
      close()
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setRenderErrors(errors)
    }
  }, [errors])

  const stringFlags = flags.map((flag) => flag.name)

  return (
    <Form>
      <InputContainer>
        <label htmlFor="name">Nome do titular *</label>
        {renderErrors.name && (
          <span className="text-sm text-red-500">{renderErrors.name}</span>
        )}
        <Input type="text" name="name" id="name" />
      </InputContainer>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="number">Número *</label>
          {renderErrors.number && (
            <span className="text-sm text-red-500">{renderErrors.number}</span>
          )}
          <Input
            type="text"
            name="number"
            id="number"
            value={cardNumber}
            maxLength={16}
            onChange={(e) => setCardNumber(normalizeCardNumber(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="code">Código de segurança *</label>
          {renderErrors.code && (
            <span className="text-sm text-red-500">{renderErrors.code}</span>
          )}
          <Input type="text" name="code" id="code" maxLength={4} />
        </InputContainer>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="type">Tipo *</label>
          {renderErrors.type && (
            <span className="text-sm text-red-500">{renderErrors.type}</span>
          )}
          <SelectInput options={['Crédito', 'Débito']} name="type" id="type" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="flag">Bandeira *</label>
          {renderErrors.flag && (
            <span className="text-sm text-red-500">{renderErrors.flag}</span>
          )}
          <SelectInput options={stringFlags} name="flag" id="flag" />
        </InputContainer>
      </AlignedInputs.Two>

      <div className="mt-4 flex justify-end">
        <Button.Green type="submit" onClick={(e) => handleSubmit(e)}>
          Salvar
        </Button.Green>
      </div>
    </Form>
  )
}
