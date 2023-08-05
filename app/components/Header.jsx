"use client"
import React from 'react'
import Link from 'next/link'
import MenuItems from './MenuItems'
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import NavbarItems from './NavbarItems';


function Header() {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex m-4 gap-4'>
          <MenuItems title="Home" address='/' Icon={AiOutlineHome} />
          <MenuItems title="About" address='/about' Icon={FcAbout}/>  
        </div>

        <div className='flex m-4 gap-4'>
          <Link href="/" className='flex'>
              <img className='w-10 h-10' src="/images/logo.png" alt="IMDB Logo" />
              <span>IMDB Clone</span>
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <NavbarItems title="Trending" address='/'/>
        <NavbarItems title="Top Rated" address='/'/>
      </div>
    </div>
  )
}

export default Header