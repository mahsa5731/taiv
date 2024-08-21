import React from 'react'
import Logo from '../assets/header_logo.svg';
import FooterMenu from './ui/FooterMenu';
import { Link } from 'react-router-dom';

export default function Footer() {

    const menu1 = ['Our Story', 'Team', 'Careers', 'Customers'];
    const menu2 = ['For Venues', 'For Advertisers', 'Get Started', 'Login', 'Guidelines'];
    const menu3 = ['Figure Lending', 'BMW', 'Bacardi', 'Pepsi', ''];
    const menu4 = ['Get in Touch', 'Email Us', 'Call Us', 'Linkedin', 'Instagram'];



    return (
        <div className='h-auto w-full container mt-10 pt-5 mb-10 '>

            <div className='h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                <div className='flex flex-col justify-center items-center lg:items-start gap-4'>
                    <img src={Logo} alt="Logo" className="h-10 " />
                    <p className='text-balance text-center lg:text-left text-[#858290] text-base lg:text-xl '>
                        Taiv enhances live TV in bars & restaurants with better content, commercials, automation, and control.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <FooterMenu title={'Company'} menu={menu1} />
                        <FooterMenu title={'Product'} menu={menu2} />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <FooterMenu title={'Case Studies'} menu={menu3} />
                        <FooterMenu title={'Contact'} menu={menu4} />
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-full bg-[#6d3ef026] my-10'>
            </div>

            <div className='flex  justify-between flex-wrap gap-2 items-center'>
                <p className='text-[#858290] text-balance text-base'>
                    © 2023 Taiv Inc. All rights reserved.
                </p>
                <div className=' flex justify-between gap-4'>
                    <Link to={'/'} className='text-[#858290] hover:text-[#c5b0ff] text-balance text-base'>
                        Advertiser Terms
                    </Link>
                    <Link to={'/'} className='text-[#858290] hover:text-[#c5b0ff] text-balance text-base'>
                        Business Terms
                    </Link>
                    <Link to={'/'} className='text-[#858290] hover:text-[#c5b0ff] text-balance text-base'>
                        SMS
                    </Link>
                    <Link to={'/'} className='text-[#858290] hover:text-[#c5b0ff] text-balance text-base'>
                        Privacy
                    </Link>
                </div>
            </div>
        </div>
    )
}
