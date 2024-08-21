import React from 'react'
import Title from './ui/Title'
import WorkItem from './ui/WorkItem'
import FeatureItem from './ui/FeatureItem'
import FeatureItemMobileA from './ui/FeatureItemMobileA'
import FeatureItemMobileB from './ui/FeatureItemMobileB'

export default function Features() {
    return (
        <>
            {/* Mobile */}
            <div className="container mx-2 w-auto rounded-lg flex lg:hidden gap-2 justify-center flex-col h-auto bg-[#190F42] p-2">
                <div className='flex flex-col w-full h-full items-start justify-center p-4'>
                    <Title text={'FEATURES'} className={``} />
                    <p className="text-3xl lg:text-4xl text-white font-semibold lg:ml-4 text-center mt-4">
                        <span className="block">More perks</span>
                        <span className="block">you'll love</span>
                    </p>
                </div>
                <FeatureItemMobileA src={'/images/f1.webp'} title={'Easily update your content'} desc={'Update your digital signage from any phone or computer in seconds.'} />
                <FeatureItemMobileA src={'/images/f2.webp'} title={'Streamline Operations'} desc={'Schedule your TVs to turn on/off, switch inputs, and change volume to save work.'} />

                <FeatureItemMobileB src={'/images/f3.webp'} title={'$1-3k'} desc={'Average annual earnings'} />
                <FeatureItemMobileA src={'/images/f4.webp'} title={'Great for multi-unit chains'} desc={'Manage the TVs at multiple locations from a single head-office to standardize brand cohesion and save work.'} />
                <FeatureItemMobileB src={'/images/f5.webp'} title={'99%'} desc={'Renewal rate'} />
            </div>

            {/* Desktop */}
            <div className="container mx-[104px] w-auto rounded-lg hidden lg:flex justify-center flex-col h-auto bg-[#190F42] p-4">
                {/* First row: 3 columns */}
                <div className='grid grid-cols-3 gap-4 mb-4'>
                    <div className="col-span-1 ">
                        <div className='flex flex-col w-full h-full items-start justify-center p-4'>
                            <Title text={'FEATURES'} className={`ml-4`} />
                            <p className="text-xl lg:text-4xl text-white font-semibold lg:ml-4 text-center mt-4">
                                <span className="block">More perks</span>
                                <span className="block">you'll love</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <WorkItem src={'/images/f1.webp'} title={'Easily update your content'} desc={'Update your digital signage from any phone or computer in seconds.'} />
                    </div>
                    <div className="col-span-1">
                        <WorkItem src={'/images/f2.webp'} title={'Streamline Operations'} desc={'Schedule your TVs to turn on/off, switch inputs, and change volume to save work.'} />
                    </div>
                </div>


                {/* Second row: 4 columns */}
                <div className="col-span-4 grid w-auto grid-cols-4 gap-4">
                    <div className="">
                        <FeatureItem src={'/images/f3.webp'} title={'$1-3k'} desc={'Average annual earnings'} />
                    </div>
                    <div className=" col-span-2">
                        <WorkItem src={'/images/f4.webp'} title={'Great for multi-unit chains'} desc={'Manage the TVs at multiple locations from a single head-office to standardize brand cohesion and save work.'} />

                    </div>
                    <div className="">
                        <FeatureItem src={'/images/f5.webp'} title={'99%'} desc={'Renewal rate'} />

                    </div>
                </div>
            </div>

        </>

    )
}
