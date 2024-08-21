import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterMenu({ title, menu }) {
    return (
        <div className=' flex flex-col lg:items-end items-center gap-2'>
            <p className='text-[#9974ff] text-base mb-4'>
                {title}
            </p>
            {
                menu.map((item, index) =>
                    <Link key={index} className={`${item == 'For Venues' ? 'text-[#ffb7a2] hover:text-[#ffb7a2] ' : 'text-[#858290] hover:text-[#c5b0ff] '} text-base `} to={'/'}>
                        {item}
                    </Link>
                )
            }
        </div>
    )
}
