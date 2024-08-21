import React from 'react'

export default function FeatureItem({ src, title, desc }) {

    return (
        <div className={`relative flex w-full min-h-48 rounded-lg overflow-hidden`}>
            <img src={src} className='absolute inset-0 w-full h-full object-cover z-0' />
            <div className='flex flex-col justify-end p-4 w-full h-full bg-gradient-to-t from-black/100 via-black/80 to-black/5  absolute z-20'>
                <h3 className='font-semibold text-white text-lg md:text-xl'>{title}</h3>
                <p className='text-base text-text-color'>{desc}</p>
            </div>
        </div>
    )
}
