import React from 'react'
import Link from 'next/link'

function NavbarItems({title, address}) {
  return (
    <div>
        <Link href={address}  className='hover:text-amber-600'>
           <p>{title}</p>
        </Link>
    </div>
  )
}

export default NavbarItems