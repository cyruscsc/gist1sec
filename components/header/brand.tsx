import { routes } from '@/config/routes'
import Link from 'next/link'

const Brand = () => {
  return (
    <Link
      href={routes.home.href}
      className='flex items-center gap-1 font-medium'
    >
      <div className='text-tree-400 text-xl'>Gist</div>
      <div className='w-14 h-7 rounded-lg bg-tree-400 text-white text-lg text-center'>
        1 Sec
      </div>
    </Link>
  )
}

export default Brand
