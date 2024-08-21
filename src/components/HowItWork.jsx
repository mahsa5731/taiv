import React, { useEffect, useState, useRef } from 'react';
import Title from './ui/Title';
import Progress from './ui/Progress';
import HowItWorkMobileItem from './ui/HowItWorkMobileItem';

export default function HowItWork({ scrollProgress, setScrollProgress }) {
    // const [scrollProgress, setScrollProgress] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const images = [
        '/images/h1.jpg',
        '/images/h2.jpg',
        '/images/h3.jpg',
        '/images/h4.jpg',
    ];
    const sectionRef = useRef(null);
    const flag = useRef(false);
    const startPosition = useRef(0);

    const handleScroll = () => {
        const section = sectionRef.current;
        if (!section) return;

        const scrollPos = window.scrollY;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop === 0 && !flag.current) {
            startPosition.current = scrollPos;
            flag.current = true;
        } else if (sectionTop >= 100) {
            flag.current = false;
        }

        if (sectionTop === 0) {
            const scrollAmount = Math.abs(scrollPos - startPosition.current) / (section.offsetHeight / 2);
            setScrollProgress(Math.min(scrollAmount * 100, 100));
        }

    };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    useEffect(() => {
        const index = Math.min(Math.floor((scrollProgress / 100) * images.length), images.length - 1);
        if (index !== currentImageIndex) {
            setFade(true);
            setTimeout(() => {
                setCurrentImageIndex(index);
                setFade(false);
            }, 500); // duration of fade-out before changing the image
        }
    }, [scrollProgress, currentImageIndex, images.length]);

    return (
        <>
            {/* Mobile */}
            <div className='flex lg:hidden flex-col container mb-24'>
                <div className='mt-14'></div>
                <Title text={'H O W  I T  W O R K S'} className={'mt-4'} />
                <p className="mt-2 text-3xl text-white font-semibold mb-4">No new work. We'll get you live within 30 days.</p>

                <HowItWorkMobileItem number={1} title={'Meet with our team'} desc={'We’ll answer any questions and qualify your location to understand how we can help.'} src={images[0]} />
                <HowItWorkMobileItem number={2} title={'Installation'} desc={'We take care of it! We’ll send a certified technician out to meet with you and install your new equipment.'} src={images[1]} />
                <HowItWorkMobileItem number={3} title={'Schedule'} desc={'Your dedicated account manager will set everything up exactly how you want it to work.'} src={images[2]} />
                <HowItWorkMobileItem number={4} title={'Get paid'} desc={'Every month, we’ll send you a payment for any ads that played in your location.'} src={images[3]} />

            </div>

            {/*  Desktop  lg:flex */}
            {/* Left Half */}
            {/* Right Half */}
            {/* <div ref={sectionRef}
                className={`hidden lg:flex  h-[200vh] max-h-[100vh] overflow-hidden justify-start top-0  ${scrollProgress >= 100 ? '' : 'sticky'}`}>
                <div className="w-full container flex h-[400vh] max-h-[100vh] flex-col justify-start pt-16 ">
                    <div className="mt-4 flex flex-col">
                        <Title text={'H O W  I T  W O R K S'} />
                        <p className="mt-2 text-4xl text-white font-semibold mb-4">No new work. We'll get you live within 30 days.</p>

                        <Progress number={1} progress={scrollProgress} title={'Meet with our team'} desc={'We’ll answer any questions and qualify your location to understand how we can help.'} />
                        <Progress number={2} progress={scrollProgress} title={'Installation'} desc={'We take care of it! We’ll send a certified technician out to meet with you and install your new equipment.'} />
                        <Progress number={3} progress={scrollProgress} title={'Schedule'} desc={'Your dedicated account manager will set everything up exactly how you want it to work.'} />
                        <Progress number={4} isLast={true} progress={scrollProgress} title={'Get paid'} desc={'Every month, we’ll send you a payment for any ads that played in your location.'} />
                    </div>
                </div>

                <div className="w-9/12 h-[200vh] max-h-[100vh] container flex  bg-[#130A35]  items-center justify-center relative">
                    <img
                        src={images[currentImageIndex]}
                        alt="Step"
                        className={`w-full  h-auto overflow-hidden object-cover transition-transform duration-500 
                        ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
                    />
                </div>
            </div> */}
        </>
    );
}
