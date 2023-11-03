'use client'

import { ReactNode } from 'react'

import Logo from './logo'
import Navigation from './navigation'

export default function Sidebar(): ReactNode {
  return (
    <aside className="bg-menu text-zinc-200">
      <Logo />
      <Navigation />
    </aside>
  )
}
