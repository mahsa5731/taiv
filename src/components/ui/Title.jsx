import React from 'react'

export default function Title({ text, className }) {
    return (
        <div className=''>
            <span className={`text-base text-balance font-bold  bg-gradient-to-r from-[#f2dd74]  to-[#9974ff] bg-clip-text text-transparent tracking-widest  ${className}`}  >
                {text}
            </span>

        </div >
    )
}
