import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

interface Props{
title:string
description:string
link:string
linkTitle:string
}

const NoResult = ({title,description,link,linkTitle}:Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center gap-6'>

        <Image src='/assets/images/light-illustration.png' width={270} height={200} alt='no result illustration' 
        className=' object-contain dark:flex' />

        <h2 className='h2-bold text-dark200_light900'>{title}</h2> 

        <p className='body-regular text-dark500_light700 my-3.5 max-w-md'>{description}</p>

        <Link href={link}>
        <Button className='paragraph-medium  primary-gradient hover:bg-primary-500 dark:bg-primary-500 mt-5 min-h-[46px] rounded-lg px-4 py-3 text-light-900  dark:text-light-900'>
           {linkTitle}
        </Button>
        </Link>

    </div>
  )
}

export default NoResult