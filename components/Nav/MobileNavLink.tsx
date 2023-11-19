'use client'
import Link from 'next/link'
import { Popover } from '@headlessui/react'

export function MobileNavLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}
