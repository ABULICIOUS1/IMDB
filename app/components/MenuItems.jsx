import Link from 'next/link'
import React from 'react'

function MenuItems({title, address, Icon}) {
  return (
    <div>
        <Link href={address}  className='hover:text-amber-600'>
           <Icon className="sm:hidden text-2xl mx-4"/>
           <p className='hidden sm:inline'>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItems