import React from 'react'
import Image from 'next/image'
import logo from '../public/icons/logo.png'
import Link from 'next/link'
const NavBar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className='logo'>
                <Image src={logo} alt="Logo" width={24} height={24} />
                <p> DevEvent </p>
            </Link>
            
            <Link href="/" className='nav-link'>Home</Link>
            <Link href="/events" className='nav-link'>Events</Link>
            <Link href="/about" className='nav-link'>Create Events</Link>
           
        </nav>
    </header>
  )
}

export default NavBar