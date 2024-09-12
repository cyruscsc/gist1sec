import { routes } from '@/config/routes'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import NavMenuLink from './nav-menu-link'

const NavMenu = () => {
  return (
    <NavigationMenu.Root className='flex justify-center'>
      <NavigationMenu.List className='flex gap-4 list-none'>
        <NavigationMenu.Item>
          <NavMenuLink href={routes.note.href} name={routes.note.name} />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavMenuLink href={routes.quiz.href} name={routes.quiz.name} />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default NavMenu
