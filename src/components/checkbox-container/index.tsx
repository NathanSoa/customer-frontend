import { ReactNode } from 'react'

export default function CheckBoxContainer({
  children,
}: {
  children: ReactNode
}) {
  return <div className="flex gap-1">{children}</div>
}
