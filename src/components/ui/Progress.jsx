import React, { useRef, useEffect } from 'react'

export default function Progress({ number, progress, title, desc, isLast = false }) {
    const heightInPx = useRef(0);
    const calculateHeight = (progress) => {
        const temp = progress - (number - 1) * 25;

        if (temp > 0) {
            heightInPx.current = (temp / 25) * 56; // Corrected the calculation
        }

        if (heightInPx.current > 56) {
            heightInPx.current = 56; // Ensuring it doesn't exceed 56px
        } else if (heightInPx.current < 5) {
            heightInPx.current = 0; // Ensuring it doesn't go below 0px
        }

    };

    useEffect(() => {
        calculateHeight(progress);
    }, [progress]);
    // console.log('Progress value:', progress, "heightInPx", heightInPx); // Log the progress value for debugging
    return (
        <div className='flex h-24 mt-1'>
            <div className='w-full flex gap-4'>
                <div className='flex flex-col w-9 justify-start items-center  '>
                    <p className={`text-center rounded-full pt-1 w-9 h-9 text-white ${heightInPx.current > 10 ? 'bg-gradient-to-t from-grad-from to-grad-to' : 'border-text-color border-2'} `}>
                        {number}
                    </p>

                    {!isLast && <div className='relative w-[2px]'>
                        <div className="absolute inset-0 bg-text-color rounded-full w-[2px] h-14 my-1" />
                        <div className="absolute inset-0 bg-gradient-to-t from-grad-from to-grad-to rounded-full w-[2px] my-1 " style={{ height: `${heightInPx.current}px` }} />
                    </div>

                    }
                </div>

                <div className='flex flex-col '>
                    <h3 className='text-lg  font-semibold text-white'>{title}</h3>
                    <p className='text-base text-text-color'>{desc}</p>
                </div>
            </div>
        </div >
    )
}
