import React from 'react'

export default function FeatureItem({ src, title, desc }) {

    return (
        <div className='relative flex w-full min-h-48 h-full '>
            <img src={src} className='absolute inset-0 w-full h-full object-cover z-0' />
            <div className='flex flex-col justify-center items-center p-4 w-full h-full bg-black/60 absolute z-20'>
                <h3 className='font-bold bg-gradient-to-r from-[#EF8D82]  to-[#9974ff] bg-clip-text text-transparent text-7xl'>{title}</h3>
                <p className='text-base text-text-color'>{desc}</p>
            </div>
        </div>
    )
}
