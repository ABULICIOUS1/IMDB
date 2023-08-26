import React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'


function NavbarItems({title, address}) {

const click = 'font-bold underline underline-offset-8'
const searchParams = useSearchParams();
const genre = searchParams.get('genre')

  return (
    <div>
        <Link href={`?genre=${address}`}  className={`hover:text-amber-600 ${genre !== address ? null : click}`}>
           <p>{title}</p>
        </Link>
    </div>
  )
}

export default NavbarItems