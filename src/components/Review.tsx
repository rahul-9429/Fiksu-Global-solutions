import React from 'react'
import Link from 'next/link'
import ReviewComp from './ReviewComp'
import { Reviews } from '@/lib/Reviews'
const Review = () => {
  return (
    <div className='flex flex-col items-center' id='testimonials'>
       
            <span className='font-bold capitalize text-4xl text-center py-1 pb-14'>
            read what others 
            <br/>
            have to say
            </span>
            <div className='flex sm:flex-row gap-10 flex-col'>
            {Reviews.slice(0,3).map((item) => (<ReviewComp key={item.id} name={item.name} review={item.review} />))}
            </div>


            <Link 
            className='pt-6 font-bold text-xl hover:text-white text-gray-100/60 cursor-pointer transition-all transition-color'
            href='/reviews'>
            <span>See more...</span></Link>
    </div>
  )
}

export default Review