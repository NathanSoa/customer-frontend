import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: (e?: any) => void
  type?: 'button' | 'submit'
}

function GreenButton({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      className="base-button border-green-500 text-green-500 hover:bg-green-500"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function BlueButton({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      className="base-button border-blue-500 text-blue-500 hover:bg-blue-500"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function RedButton({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      className="base-button border-red-500 text-red-500 hover:bg-red-500"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const Button = {
  Green: GreenButton,
  Red: RedButton,
  Blue: BlueButton,
}

export default Button
