import React from 'react'

export default function TestimonialsComment({ srcImg, srcIcon, comment, name, job }) {

    return (
        <>
            <img
                src={srcImg}
                alt="Step"
                className={`w-full h-[150px] lg:h-[450px] col-span-5 rounded-lg overflow-hidden object-cover `}
            />
            <div className=' flex-col lg:ml-8 col-span-7  flex justify-center lg:justify-start  lg:items-start items-center'>
                <img
                    src={srcIcon}
                    alt="Step"
                    className={`h-24 my-4 lg:my-0 lg:h-36 lg:py-6 overflow-hidden object-contain`}
                />
                <p className='text-white font-normal text-base text-center lg:text-left lg:text-3xl text-balance '>
                    {comment}
                </p>
                <p className='text-white font-semibold mt-8 text-2xl text-balance '>{name}</p>
                <p className='text-text-color font-semibold mt-4 mb-8 text-base text-balance '>{job}</p>
            </div>
        </>
    )
}
