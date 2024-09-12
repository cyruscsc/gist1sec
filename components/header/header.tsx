import { Github } from 'lucide-react'
import { NavMenu } from './nav-menu'
import { externals } from '@/config/external-links'
import Brand from './brand'
import ExternalLink from './external-link'

const Header = () => {
  return (
    <header className='flex items-center justify-between gap-4 h-12 px-6'>
      <div className='flex justify-start flex-1'>
        <Brand />
      </div>
      <div className='flex justify-center flex-1'>
        {/* <NavMenu /> */} {/* Not needed for now */}
      </div>
      <div className='flex justify-end flex-1'>
        <ExternalLink href={externals.github.href} icon={<Github />} />
      </div>
    </header>
  )
}

export default Header
