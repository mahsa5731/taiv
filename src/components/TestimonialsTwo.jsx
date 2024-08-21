import React, { useState, useEffect, useRef } from 'react';
import Title from './ui/Title';
import TestimonialsCommentTwo from './ui/TestimonialsCommentTwo';

export default function Testimonials() {

    const data = [
        {
            job: "General Manager,\n Stout House",
            name: "Trish",
            comment: `"Taiv is great! They’ve made it possible for us to easily promote our specials and events. Their team is very helpful and communicative any time we have questions or need support.”`
        },
        {
            job: "Owner,\nMickey Burns Irish Pub",
            name: "Marc",
            comment: `“Would I recommend this? Of course! Just the ability to make money with no outlay or work and the facility to advertise in house easily makes it a no-brainer.”`
        },
        {
            job: "Owner, Papa’s Raw Bar",
            name: "Troy",
            comment: `"We are very happy with our service from Taiv. Our customers love seeing local businesses on ads via commercials. Some local businesses have even reached out to purchase ad space."`
        },
        {
            job: "I Don’t Care Bar",
            name: "James",
            comment: `“Taiv has been a game-changer for our team. It is very effective and user-friendly. I recommend Taiv to anyone looking for a better TV solution for their business.”`
        }
    ];


    return (
        <div className='relative h-auto w-full flex mt-16 pb-20 bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: "url('/images/bgt.webp')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-bg/100 via-bg/70 to-bg/100 backdrop-blur-lg"></div>
            <div className="container h-auto w-full  items-center mt-10 flex flex-col relative">
                <Title text={'TESTIMONIALS'} />
                <p className="text-2xl text-white lg:text-5xl text-balance text-center font-semibold mt-4 ">
                    <span className="block">Don't take our word for it</span>
                </p>

                <div className='grid mt-10 grid-cols-1 lg:grid-cols-3 gap-4'>
                    <TestimonialsCommentTwo {...data[0]} />
                    <TestimonialsCommentTwo {...data[1]} />
                    <TestimonialsCommentTwo {...data[2]} />
                </div>
            </div>
        </div>
    );
}
