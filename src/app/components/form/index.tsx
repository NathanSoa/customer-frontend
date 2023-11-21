import { FormEvent, ReactNode } from 'react'

interface FormProps {
  children: ReactNode
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="font-semibold uppercase">
        Campos marcados com * são obrigatórios
      </div>
      {children}
    </form>
  )
}
