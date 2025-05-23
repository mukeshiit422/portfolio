import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
       <Link href="/">
         <h1 className='tetx-4xl font-semibold'>
            Mukesh <span className='text-accent'></span>
         </h1>
       </Link>
       <div className='hidden xl:flex items-center gap-8'>
          <Nav/>
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
       </div>

       <div className='xl:hidden'>
          <MobileNav/>
       </div>
      
      </div>
    </header>
  )
}
