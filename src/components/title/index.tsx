import { ReactNode } from 'react'

export default function Title({ children }: { children: ReactNode }) {
  return <h1 className="py-5 text-4xl font-bold">{children}</h1>
}
