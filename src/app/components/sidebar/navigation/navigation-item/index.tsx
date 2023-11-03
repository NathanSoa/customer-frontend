'use client'

import { ElementType, ReactNode } from 'react'

interface NavigationItemProps {
  href: string
  title: string
  Icon: ElementType
}

export default function NavigationItem({
  href,
  title,
  Icon,
}: NavigationItemProps): ReactNode {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 text-lg p-2 hover:bg-sky-500"
    >
      <Icon size={24} />
      {title}
    </a>
  )
}
