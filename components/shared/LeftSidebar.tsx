'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { SignedOut } from '@clerk/nextjs'

const LeftSidebar = () => {
    const pathname = usePathname()
  return (
    <div className='background-light900_dark200 light-border sticky left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] '>

<section className='flex flex-1 flex-col '>
{sidebarLinks.map((item)=>{

const isActive = (pathname.includes(item.route)&& item.route.length>1 || pathname ===item.route)

  return(
    <Sheet key={item.label}>
  <SheetClose key={item.label} asChild
  className={`flex items-center justify-start gap-2 bg-transparent p-4 ${isActive ? 'primary-gradient rounded-lg text-light-900':'text-dark-300_light900 '}`}>
    <Link href={item.route}>
   <Image src={item.imgURL} alt={item.label} width={20} height={20} 
   className={`${isActive ? ' ':'invert-colors'}`}
   
   />
   <p className={`${isActive ? 'base-bold':'base-medium'} max-lg:hidden`}>{item.label}</p> 
   </Link>
  </SheetClose>
  </Sheet>
)})}
</section>

<SignedOut>
  <div className='flex flex-col gap-3'>
    
<Link href='/sign-in'>
   <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3  shadow-none'>
    <Image 
      src='/assets/icons/account.svg' width={20} height={20}
      alt='login'
      className='lg:hidden'
      />
    <span className='primary-text-gradient max-lg:hidden'>Login In</span>
   </Button>

</Link>
 


  
<Link href='/sign-up'>
   <Button className='small-medium btn-secondary light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3  shadow-none'>
   <Image 
      src='/assets/icons/sign-up.svg' width={20} height={20}
      alt='signup'
      className='lg:hidden'
      />
    <span className='max-lg:hidden'>Sign Up</span>
   </Button>

</Link>
   


  </div>
</SignedOut>

    </div>
  )
}

export default LeftSidebar





