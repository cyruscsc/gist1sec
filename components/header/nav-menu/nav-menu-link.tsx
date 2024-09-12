'use client'

import { usePathname } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

interface NavMenuLinkProps {
  href: string
  name: string
}

const NavMenuLink = ({ href, name }: NavMenuLinkProps) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <NavigationMenu.Link
      className={`header-item ${active && 'text-stone-800'}`}
      href={href}
    >
      {name}
    </NavigationMenu.Link>
  )
}

export default NavMenuLink
