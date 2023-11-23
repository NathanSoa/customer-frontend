import { streetTypes } from '@/domain/customer/address/street-types'

import { z } from 'zod'

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
  alias: z
    .string()
    .min(2, { message: 'Apelido precisa ter entre 2 e 255 caracteres' })
    .max(255, { message: 'Apelido precisa ter entre 2 e 255 caracteres' }),
  complement: z.optional(
    z.string().max(255, {
      message: 'Complemento precisa ter no máximo 255 caracteres',
    }),
  ),
  streetPurpose: z.array(z.string()).min(1, {
    message: 'Selecione ao menos um tipo de endereço',
  }),
})
