import { useState } from 'react'
import Logo from '../assets/header_logo.svg';
import { Link } from 'react-router-dom';
import Arrow from './icon/Arrow'
import Menu from './icon/Menu'
import ArrowUpRight from './icon/ArrowUpRight'
import Button from './ui/Button';


export default function Header() {
  const [isShowMobileSidebar, setIsShowMobileSidebar] = useState(false);
  const toggleMenu = () => {
    setIsShowMobileSidebar((prev) => {
      return !prev;
    })
  }
  return (
    <div className='bg-bg/15 z-40 backdrop-blur-md h-16 lg:h-auto   py-2 items-center flex flex-col fixed right-0 left-0 top-0'>
      {/* Mobile */}
      <div className='relative container z-50 w-full flex lg:hidden items-center justify-between'>
        <div className='flex w-full items-center justify-between '>
          <img src={Logo} alt="Logo" className="h-6" />
          <button onClick={toggleMenu} className={`w-14 h-14 ${isShowMobileSidebar ? 'bg-[#6D3EF0]' : ''}  rounded-lg flex justify-center items-center`}>
            <Menu className={`h-6 w-6 text-white`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden container mt-14 w-full relative z-0 space-y-4 p-4 shadow-lg rounded-lg -top-14 left-0 right-0 headerContainer bg-[#0A0420] mx-auto 
         transition-all duration-300 ease-out origin-top transform ${isShowMobileSidebar ? 'scale-y-100' : 'scale-y-0'
          } origin-top`}>

        <div className='flex flex-col gap-2  items-center justify-between'>

          <Link to={'/'} className='bg-[#f03ec6]/15 rounded-lg w-full '>
            <div className='flex flex-col p-4 gap-2 items-center '>
              <div>
                <span className='text-[#ffb7a2] block'> For Venues</span>
              </div>
              <div className='flex justify-center items-center'>
                <span className='text-[#A99DAC] hover:text-white'> Channels</span>
                <Arrow className="h-3 w-3  mt-1 text-text-color" />
              </div>
            </div>
          </Link>

          <Link to={'/'} className='bg-[#6d3ef0]/15 rounded-lg w-full'>
            <div className='flex flex-col p-4 gap-2 items-center '>
              <span className='text-text-color hover:text-white'> For Advertiser</span>
              <span className='text-text-color hover:text-white'> Case Studies</span>
            </div>
          </Link>
          <Link to={'/'} className=''>
            <div className='flex p-4  items-center '>
              <span className='text-text-color hover:text-white'> About us</span>
            </div>
          </Link>

          <Link to={'/'} className=''>
            <div className='flex p-4  items-center '>
              <span className='text-text-color hover:text-white'>1-866-824-8101</span>
            </div>
          </Link>
          <Link to={'/'} className=''>
            <div className='flex p-4items-center '>
              <span className='text-text-color hover:text-white'>Login</span>
            </div>
          </Link>
          <Button text={'Get Started'} linkClass={`w-full`}>
            <ArrowUpRight className={`h-3 w-3 mt-1 text-white`} />
          </Button>
        </div>

      </div>




      {/* Desktop */}
      <div className=' hidden container lg:flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          <img src={Logo} alt="Logo" className="h-6 mr-10" />

          <Link to={'/'} className='bg-[#f03ec6]/15 rounded-lg mr-5'>
            <div className='flex p-4 gap-2 items-center '>
              <span className='text-[#ffb7a2] '> For Venues</span>
              <span className='text-[#A99DAC] hover:text-white'> Channels</span>
              <Arrow className="h-3 w-3  mt-1 text-text-color" />
            </div>
          </Link>

          <Link to={'/'} className='bg-[#6d3ef0]/15 rounded-lg'>
            <div className='flex p-4 gap-2 items-center '>
              <span className='text-text-color hover:text-white'> For Advertiser</span>
              <span className='text-text-color hover:text-white'> Case Studies</span>
            </div>
          </Link>
          <Link to={'/'} className=''>
            <div className='flex p-4 gap-2 items-center '>
              <span className='text-text-color hover:text-white'> About us</span>
            </div>
          </Link>
        </div>
        <div className='flex items-center'>
          <Link to={'/'} className=''>
            <div className='flex p-4 gap-2 items-center '>
              <span className='text-text-color hover:text-white'>1-866-824-8101</span>
            </div>
          </Link>
          <Link to={'/'} className=''>
            <div className='flex p-4 gap-2 items-center '>
              <span className='text-text-color hover:text-white'>Login</span>
            </div>
          </Link>
          <Button text={'Get Started'}>
            <ArrowUpRight className={`h-3 w-3 mt-1 text-white`} />
          </Button>
        </div>

      </div>
    </div>

  );
}
