import Header from '../components/Header'
import SectionIntroduction from '../components/SectionIntroduction'
import HowItWork from '../components/HowItWork'
import Testimonials from '../components/Testimonials'
import Features from '../components/Features'
import TestimonialsTwo from '../components/TestimonialsTwo'
import Footer from '../components/Footer'
import { useState } from 'react';
// import DivDesc from '../components/ui/DivDesc'
export default function Home() {

    const [scrollProgress, setScrollProgress] = useState(0);
    return (
        <div >
            <Header />
            <SectionIntroduction />
            <HowItWork scrollProgress={scrollProgress} setScrollProgress={setScrollProgress} />
            {/* <DivDesc scrollProgress={scrollProgress} /> */}
            <Testimonials scrollProgress={scrollProgress} />
            <Features />
            <TestimonialsTwo />
            <Footer />

        </div>
    )
}
