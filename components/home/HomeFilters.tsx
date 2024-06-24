import { HomePageFilters } from '@/constants/filters'
import React from 'react'
import { Button } from '../ui/button'


const HomeFilters = () => {
const Active ='newest'

  return (
    <div className='mt-5 hidden flex-wrap gap-3 md:flex'>
  {
    HomePageFilters.map((item)=>(
        <Button key={item.value}
        className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${Active ===item.value ? "bg-primary-100 text-red-500":"text-light-500 bg-light-800 text-light-500 hover:bg-dark-300"}`}
        >
            {item.name}
        </Button>
    ))
  }
    </div>
  )
}

export default HomeFilters