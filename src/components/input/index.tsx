import { ChangeEvent } from 'react'

interface InputProps {
  id: string
  type: string
  name: string
  value?: any
  maxLength?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  id,
  type,
  name,
  value,
  maxLength,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className="h-7 w-full rounded-lg border border-gray-400 p-2"
    />
  )
}
