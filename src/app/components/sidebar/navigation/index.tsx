import { ReactNode } from 'react'
import { House, User } from 'phosphor-react'

import NavigationItem from './navigation-item'

export default function Navigation(): ReactNode {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <NavigationItem href="/" title="Home" Icon={House} />
        </li>
        <li>
          <NavigationItem href="/customers" title="Customers" Icon={User} />
        </li>
      </ul>
    </nav>
  )
}
