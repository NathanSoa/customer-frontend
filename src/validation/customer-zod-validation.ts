import { streetTypes } from '@/domain/customer/address/street-types'

import { z } from 'zod'

export const CustomerZodValidation = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Nome precisa ter entre 2 e 255 caracteres',
    })
    .max(255, {
      message: 'Nome precisa ter entre 2 e 255 caracteres',
    }),
  email: z
    .string()
    .email({
      message: 'E-mail inválido',
    })
    .max(255, {
      message: 'E-mail precisa ter no máximo 255 caracteres',
    }),
  birthdate: z.string().regex(/\d{1,2}\/\d{1,2}\/\d{2,4}/, {
    message: 'Data de nascimento inválida',
  }),
  cpf: z
    .string()
    .length(14, {
      message: 'CPF precisa ter 11 caracteres',
    })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: 'CPF inválido',
    }),
  ddd: z.string().length(2, {
    message: 'DDD precisa ter 2 caracteres',
  }),
  phone: z
    .string()
    .min(9, {
      message: 'Número precisa ter entre 8 e 9 caracteres',
    })
    .max(10, {
      message: 'Número precisa ter entre 8 e 9 caracteres',
    }),
  cards: z
    .array(
      z.object({
        type: z.enum(['Crédito', 'Débito'], {
          errorMap: () => {
            return { message: 'Selecione Crédito ou Débito' }
          },
        }),
        number: z.string().length(19, {
          message: 'Número do cartão precisa ter 16 caracteres',
        }),
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
        main: z.boolean(),
      }),
    )
    .min(1, { message: 'É necessário ao menos um cartão' }),
  address: z
    .array(
      z.object({
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
      }),
    )
    .min(1, { message: 'É necessário ao menos um endereço' }),
  password: z
    .string()
    .min(8, {
      message: 'Senha precisa ter entre 8 e 255 caracteres',
    })
    .max(255, {
      message: 'Senha precisa ter entre 8 e 255 caracteres',
    }),
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

export type CustomerFormParams = z.infer<typeof CustomerZodValidation>
export type CardFormParams = z.infer<typeof CardZodValidation>
export type AddressFormParams = z.infer<typeof AddressZodValidation>
