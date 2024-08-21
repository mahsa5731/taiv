import React, { useRef, useState, useEffect } from 'react';

export default function HowItWorkMobileItem({ number, title, desc, src }) {
    const [isPastMiddle, setIsPastMiddle] = useState(false);
    const itemRef = useRef(null);

    const handleScroll = () => {
        if (itemRef.current) {
            const rect = itemRef.current.getBoundingClientRect();
            const halfScreenHeight = window.innerHeight / 2;

            // Check if the element's top is above the middle of the screen
            if (rect.top < halfScreenHeight) {
                setIsPastMiddle(true);
            } else {
                setIsPastMiddle(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={itemRef}
            className={`flex flex-col transition-opacity duration-500 ${isPastMiddle ? 'opacity-100' : 'opacity-50'}`}
        >
            <p className={`text-center rounded-full pt-1 my-4 w-9 h-9 text-white ${isPastMiddle ? 'bg-gradient-to-t from-grad-from to-grad-to' : 'border-text-color border-2'} `}>
                {number}
            </p>

            <div className='flex flex-col '>
                <h3 className='text-lg font-semibold text-white'>{title}</h3>
                <p className='text-base text-text-color'>{desc}</p>
            </div>

            <img
                src={src}
                alt="Step"
                className={`w-full mt-4 h-auto overflow-hidden object-cover ease-in-out`}
            />
        </div>
    );
}
