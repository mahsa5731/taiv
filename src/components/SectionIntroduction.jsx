import Button from './ui/Button';
import ArrowUpRight from './icon/ArrowUpRight'
import ArrowDown from './icon/ArrowDown'
import { Link } from 'react-router-dom';
import WorkItem from './ui/WorkItem';

export default function SectionIntroduction() {
    const imageCompanies = [
        '/images/c1.png', '/images/c2.png', '/images/c3.png',
        '/images/c4.png', '/images/c5.png', '/images/c6.png',
        '/images/c7.png', '/images/c8.png', '/images/c9.png',
        '/images/c10.png'
    ];

    const renderImage = (src, index, extraClasses = '') => (
        <img
            key={index}
            src={src}
            alt={`Company ${index + 1}`}
            className={`w-full p-2 h-auto  object-contain ${extraClasses}`}
        />
    );
    return (
        <div className='relative flex items-center justify-center h-full'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                {/* <source src="/videos/background.mp4" type="video/mp4" /> */}
                <source src="/videos/background.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative bg-gradient-to-t from-[#2D2162]/100 via-[#2D2162]/95  to-black/60  w-full h-full z-10 text-white flex  items-center flex-col">
                <h1 className="text-5xl lg:text-7xl line-clamp-2 text-balance text-center font-bold mt-24 lg:mt-28 bg-gradient-to-r from-[#f2dd74] via-[#e1adb6] to-[#bdcbbe] bg-clip-text text-transparent" >
                    Give your TVs<br /> Superpowers
                </h1>
                <p className="text-xl lg:text-2xl  text-balance text-center mt-4">
                    <span className="block">Taiv enhances live TV in restaurants</span>
                    <span className="block">to increase revenue and save time.</span>
                </p>
                <p className="lg:hidden visible text-xl lg:text-2xl text-balance text-center mt-10">
                    Our average partner makes $2k / location / year. <span className="text-[#D2C6FF]">No cost, cancel any time, 99% renewal rate.</span>
                </p>
                <p className=" hidden lg:flex text-xl lg:text-2xl text-balance text-center mt-10">
                    Our average partner makes $2k / location / year.<br />No cost, cancel any time, 99% renewal rate.
                </p>


                <div className='hidden lg:flex gap-4 justify-center items-center mt-14 w-full'>

                    <Button text={'Get Started'} btnClass={``}>
                        <ArrowUpRight className={`h-3 w-3 mt-1 text-white`} />
                    </Button>
                    <span className='text-text-color'>OR</span>
                    <Link className='' >
                        <div className={`flex h-11 px-2   justify-center text-[#7049F3] rounded-md  bg-white items-center hover:rounded-xl transition-all group `}>
                            <span >Learn More</span>
                            <div className="group-hover:scale-110 transition-transform ml-1">
                                <ArrowDown className={`h-3 w-3 mt-1 text-[#7049F3]`} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex lg:hidden gap-2 justify-center flex-col items-center mt-8 w-full'>

                    <Button text={'Get Started'} btnClass={`h-14`} linkClass={`w-full px-2`}>
                        <ArrowUpRight className={`h-3 w-3 mt-1 text-white`} />
                    </Button>
                    <span className='text-text-color'>OR</span>
                    <Link className='w-full px-2' >
                        <div className={`flex h-14 px-2   justify-center text-[#7049F3] rounded-md  bg-white items-center hover:rounded-xl transition-all group `}>
                            <span >Learn More</span>
                            <div className="group-hover:scale-110 transition-transform ml-1">
                                <ArrowDown className={`h-3 w-3 mt-1 text-[#7049F3]`} />
                            </div>
                        </div>
                    </Link>
                </div>

                <p className='text-text-color mt-9 mb-9 text-sm'>TRUSTED BY THE BEST</p>




                <div>
                    {/* Large screens */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 xl:px-24 gap-2 justify-center items-center">
                        {imageCompanies.map((src, index) => renderImage(src, index))}
                    </div>
                    {/* Mobile screens */}
                    {/* <div className="grid lg:hidden  grid-cols-4 gap-4 justify-center items-center">
                        {imageCompanies.map((src, index) => {
                            let extraClasses = '';
                            if (index === 8) extraClasses = 'col-start-2';
                            if (index === 9) extraClasses = 'col-start-3';
                            return renderImage(src, index, extraClasses);
                        })}
                    </div> */}


                    <div className="flex flex-col container">
                        <h2 className="text-4xl md:text-3xl text-white font-bold">Works with your existing TVs.</h2>
                        <p className='text-lg text-white mt-4'>Taiv is a small box that connects to your existing cable box and works with every satellite and cable provider.</p>
                    </div>


                    <div className="h-[1042px] md:h-[530px] lg:h-[336px] flex bg-gradient-to-tl from-[#6F3FEE] to-[#FA9478] p-2 mx-4 lg:mx-[104px] mt-8 rounded-lg mb-10 ">

                        <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 w-full h-80 gap-0 rounded-lg">

                            <WorkItem src={'/images/w1.webp'} title={'More Sales'} desc={'Promote your drink specials and events on your existing TVs to increase revenue per guest.'} />
                            <WorkItem src={'/images/w2.webp'} title={'More Control'} desc={'Control what TV commercials play in your venue to block competitors and distasteful ads.'} />
                            <WorkItem src={'/images/w3.webp'} title={'Less Work'} desc={'Automate your TVs & digital signage. Remotely schedule everything.'} />
                            <WorkItem src={'/images/w4.webp'} title={'Monetize your Screens'} desc={'Taiv is 100% free to use. You’ll even earn revenue every commercial break.'} />
                        </div>

                    </div>


                </div>








            </div>


        </div>
    );
}
