import { z } from 'zod'

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
  securityCode: z
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
