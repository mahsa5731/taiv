import React, { useEffect, useRef, useState } from 'react';

const StickyScrollSection = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const stickyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCurrentStep(1);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(stickyRef.current);

        return () => observer.disconnect();
    }, []);

    const handleScroll = () => {
        const stepHeight = stickyRef.current.clientHeight / 4;
        const scrollPosition = window.scrollY - stickyRef.current.offsetTop;

        if (scrollPosition < stepHeight) {
            setCurrentStep(1);
        } else if (scrollPosition < 2 * stepHeight) {
            setCurrentStep(2);
        } else if (scrollPosition < 3 * stepHeight) {
            setCurrentStep(3);
        } else {
            setCurrentStep(4);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='bg-green-500 h-screen'>

            </div>
            <div>
                {/* Sticky Section */}
                <div
                    className={`sticky bg-red-500 text-white  top-0 ${currentStep === 4 ? 'relative' : ''}`}
                    ref={stickyRef}
                >
                    <div className={`${currentStep === 1 ? 'block' : 'hidden'}`}>
                        {/* Content for Part 1 */}
                        <h2 className='text-white'>Part 1: Introduction</h2>
                    </div>
                    <div className={` text-white ${currentStep === 2 ? 'block' : 'hidden'}`}>
                        {/* Content for Part 2 */}
                        <h2>Part 2: Features</h2>
                    </div >
                    <div className={`text-white ${currentStep === 3 ? 'block' : 'hidden'}`}>
                        {/* Content for Part 3 */}
                        <h2> Part 3: Usage</h2 >
                    </div >
                    <div className={`text-white ${currentStep === 4 ? 'block' : 'hidden'}`}>
                        {/* Content for Part 4 */}
                        <h2>Part 4: Final Thoughts</h2>
                    </div>
                </div >

            </div >
            {/* Next Section */}
            <div className="mt-10 h-screen bg-sky-500" >
                <h2>Next Section Content</h2>
                <p>Continue scrolling for more content...</p>
            </div>

        </>
    );
};

export default StickyScrollSection;