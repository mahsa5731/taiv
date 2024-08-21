import React from 'react'

export default function TestimonialsComment({ comment, name, job }) {

    return (
        <>
            <div className=' flex-col p-5 rounded-lg bg-white/10 flex  justify-start  items-start '>
                <p className='text-white font-normal text-base  lg:text-left lg:text-lg text-balance '>
                    {comment}
                </p>
                <p className='text-text-color font-semibold mt-8 text-base text-balance '>{name}</p>
                <p className='text-text-color font-semibold mt-1  text-base text-balance '>{job}</p>
            </div>
        </>
    )
}
