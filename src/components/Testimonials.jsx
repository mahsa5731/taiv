import React, { useState, useEffect, useRef } from 'react';
import Title from './ui/Title';
import TestimonialsComment from './ui/TestimonialsComment';

export default function Testimonials({ scrollProgress }) {
    const [clickedIndex, setClickedIndex] = useState(0);
    const sectionRef = useRef(null);
    const handleClick = (index) => {
        setClickedIndex(index);
    };
    // useEffect(() => {
    //     // console.log('Scroll Progress:', scrollProgress);
    // }, [scrollProgress]);
    // const handleScroll = (e) => {
    //     if (scrollProgress < 90) {
    //         e.preventDefault(); // Prevent default scrolling behavior
    //         e.stopPropagation(); // Stop the scroll event from bubbling up
    //     }
    // };

    // useEffect(() => {
    //     const section = sectionRef.current;
    //     if (section) {
    //         section.addEventListener('wheel', handleScroll, { passive: false });
    //         section.addEventListener('touchmove', handleScroll, { passive: false });
    //     }
    //     return () => {
    //         if (section) {
    //             section.removeEventListener('wheel', handleScroll);
    //             section.removeEventListener('touchmove', handleScroll);
    //         }
    //     };
    // }, [scrollProgress]);

    const data = [
        {
            job: "General Manager,\n Stout House",
            srcImg: "/images/t5.webp",
            name: "Trish",
            comment: `"Taiv is great! They’ve made it possible for us to easily promote our specials and events. Their team is very helpful and communicative any time we have questions or need support.”`
        },
        {
            job: "Owner,\nMickey Burns Irish Pub",
            srcImg: "/images/t6.webp",
            name: "Marc",
            comment: `“Would I recommend this? Of course! Just the ability to make money with no outlay or work and the facility to advertise in house easily makes it a no-brainer.”`
        },
        {
            job: "Owner, Papa’s Raw Bar",
            srcImg: "/images/t7.webp",
            name: "Troy",
            comment: `"We are very happy with our service from Taiv. Our customers love seeing local businesses on ads via commercials. Some local businesses have even reached out to purchase ad space."`
        },
        {
            job: "I Don’t Care Bar",
            srcImg: "/images/t8.webp",
            name: "James",
            comment: `“Taiv has been a game-changer for our team. It is very effective and user-friendly. I recommend Taiv to anyone looking for a better TV solution for their business.”`
        }
    ];

    const images = ["/images/t1.png", "/images/t2.png", "/images/t3.png", "/images/t4.webp"];

    return (
        // ${scrollProgress >= 100 ? "pt-20 mt-10" : "mt-[100vh]"}  
        <div ref={sectionRef} className={`container h-auto w-full items-center pt-10 mt-10 mb-20 flex flex-col`}>
            <Title text={'TESTIMONIALS'} />
            <p className="text-2xl text-white lg:text-5xl text-balance text-center font-semibold mt-4">
                <span className="block">Our customers</span>
                <span className="block">really love us</span>
            </p>
            <p className='text-text-color text-center text-xl mt-4 mb-12'>
                99% monthly renewal rate - yup, you read that right.
            </p>
            <div className='bg-[#190F42] w-full h-auto flex flex-col'>
                <div className='grid grid-cols-2 lg:grid-cols-4 items-center justify-center'>
                    {images.map((src, i) => (
                        <img
                            src={src}
                            key={i}
                            alt="Step"
                            className={`w-full h-24 py-1 px-8 object-contain bg-[#1E163D] cursor-pointer 
                                   ${clickedIndex === i ? 'opacity-100 grayscale-0' : 'opacity-80 grayscale'} 
                                   hover:opacity-100 hover:grayscale-0 transition-all duration-300 ease-in-out`}
                            onClick={() => handleClick(i)}
                        />
                    ))}
                </div>

                <div className='bg-[#0A0420] rounded-lg lg:p-4 p-2 lg:m-8 m-1 grid grid-cols-1 lg:grid-cols-12'>
                    <TestimonialsComment
                        srcImg={data[clickedIndex].srcImg}
                        srcIcon={images[clickedIndex]}
                        name={data[clickedIndex].name}
                        job={data[clickedIndex].job}
                        comment={data[clickedIndex].comment}
                    />
                </div>
            </div>
        </div>
    );
}
