import React from 'react'

export default function WorkItem({ src, title, desc, className }) {

    return (
        <div className={`relative flex w-full min-h-64 h-full ${className}`}>
            <img src={src} className='absolute inset-0 w-full h-full object-cover z-0' />
            <div className='flex flex-col justify-end p-4 w-full h-full bg-black/60 absolute z-20'>
                <h3 className='font-semibold text-white text-lg md:text-xl'>{title}</h3>
                <p className='text-base text-text-color'>{desc}</p>
            </div>
        </div>
    )
}
