import { useState } from 'react'
import { z } from 'zod'

export function useValidator(zodValidator: z.ZodObject<any>) {
  const [errors, setErrors] = useState<any>({})
  const [validator, setValidator] = useState(zodValidator)

  function validate(data: any) {
    const result = validator.safeParse(data)
    if (!result.success) {
      const error: any = {}
      result.error.issues.forEach((issue) => {
        error[issue.path[0] as string] = issue.message
      })
      setErrors(error)
      return false
    } else {
      return true
    }
  }

  function addError(key: string, message: string) {
    setErrors((prev: any) => ({ ...prev, [key]: message }))
  }

  return {
    errors,
    addError,
    validate,
    setValidator,
  }
}
