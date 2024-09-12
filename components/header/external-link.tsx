import { ReactNode } from 'react'
import Link from 'next/link'

interface ExternalLinkProps {
  href: string
  icon: ReactNode
}

const ExternalLink = ({ href, icon }: ExternalLinkProps) => {
  return (
    <Link href={href} target='_blank' className='header-item'>
      {icon}
    </Link>
  )
}

export default ExternalLink
