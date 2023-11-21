import { streetTypes } from '@/domain/customer/address/street-types'

import { z } from 'zod'

export const customerZodValidation = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email().max(255),
  birthdate: z.date().max(new Date()),
  cpf: z
    .string()
    .length(14)
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
  phone: z.object({
    type: z.enum(['Fixo', 'Celular']),
    ddd: z.string().length(2),
    number: z.string().min(8).max(9),
  }),
  cards: z.array(
    z.object({
      type: z.enum(['Crédito', 'Débito']),
      number: z.string().min(16).max(16),
      name: z.string().min(2).max(255),
      securityCode: z.string().min(3).max(4),
      flag: z.enum(['Visa', 'Mastercard', 'Elo']),
      main: z.boolean(),
    }),
  ),
  address: z.array(
    z.object({
      streetPurpose: z.enum(['Delivery', 'Billing']),
      streetType: z.enum(streetTypes),
      street: z.string().min(2).max(255),
      number: z.string().min(1).max(10),
      neighborhood: z.string().min(2).max(255),
      city: z.string().min(2).max(255),
      state: z.string().length(2),
      country: z.string().min(2).max(255),
      zipCode: z.string().min(8).max(9),
      complement: z.string().min(2).max(255).optional(),
    }),
  ),
  password: z.string().min(8).max(255),
  passwordConfirmation: z.string().min(8).max(255),
})

export const CardZodValidation = z.object({
  type: z.enum(['Crédito', 'Débito'], {
    errorMap: () => {
      return { message: 'Selecione Crédito ou Débito' }
    },
  }),
  number: z
    .string()
    .length(19, { message: 'Número do cartão precisa ter 16 caracteres' }),
  name: z
    .string()
    .min(2, { message: 'Nome precisa ter entre 2 e 255 caracteres' })
    .max(255, { message: 'Nome precisa ter entre 2 e 255 caracteres' }),
  code: z
    .string()
    .min(3, {
      message: 'Código de segurança precisa ter entre 3 e 4 caracteres',
    })
    .max(4, {
      message: 'Código de segurança precisa ter entre 3 e 4 caracteres',
    }),
  flag: z.enum(['Visa', 'MasterCard', 'Elo'], {
    errorMap: () => {
      return { message: 'Selecione Visa, Mastercard ou Elo' }
    },
  }),
})

export const AddressZodValidation = z.object({
  streetType: z.enum(streetTypes, {
    errorMap: () => {
      return { message: 'Selecione ao menos um tipo de logradouro' }
    },
  }),
  street: z
    .string()
    .min(2, { message: 'Rua precisa ter entre 2 e 255 caracteres' })
    .max(255, { message: 'Rua precisa ter entre 2 e 255 caracteres' }),
  number: z
    .string()
    .min(1, { message: 'Número precisa ter entre 1 e 10 caracteres' })
    .max(10, { message: 'Número precisa ter entre 1 e 10 caracteres' }),
  neighborhood: z
    .string()
    .min(2, { message: 'Bairro precisa ter entre 2 e 255 caracteres' })
    .max(255, { message: 'Bairro precisa ter entre 2 e 255 caracteres' }),
  city: z
    .string()
    .min(2, { message: 'Cidade precisa ter entre 2 e 255 caracteres' })
    .max(255, { message: 'Cidade precisa ter entre 2 e 255 caracteres' }),
  state: z
    .string()
    .min(2, { message: 'Estado precisa ter entre 2 e 255 caracteres' })
    .max(255, { message: 'Estado precisa ter entre 2 e 255 caracteres' }),
  country: z.optional(
    z
      .string()
      .min(2, { message: 'País precisa ter entre 2 e 255 caracteres' })
      .max(255, { message: 'País precisa ter entre 2 e 255 caracteres' }),
  ),
  zipCode: z
    .string()
    .min(8, { message: 'CEP precisa ter entre 8 e 9 caracteres' })
    .max(9, { message: 'CEP precisa ter entre 8 e 9 caracteres' }),
  complement: z.optional(
    z.string().max(255, {
      message: 'Complemento precisa ter no máximo 255 caracteres',
    }),
  ),
  streetPurpose: z.array(z.string()).min(1, {
    message: 'Selecione ao menos um tipo de endereço',
  }),
})

export type CustomerFormParams = z.infer<typeof customerZodValidation>
export type CardFormParams = z.infer<typeof CardZodValidation>
export type AddressFormParams = z.infer<typeof AddressZodValidation>
