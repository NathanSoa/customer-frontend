import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: (e?: any) => void
  type?: 'button' | 'submit'
}

function GreenButton({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      className="base-button bg-green-500 hover:bg-green-400"
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
      className="base-button bg-blue-500 hover:bg-blue-400"
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
      className="base-button bg-red-500 hover:bg-red-400"
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
