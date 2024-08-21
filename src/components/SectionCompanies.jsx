import WorkItem from "./ui/WorkItem";
export default function SectionCompanies() {
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
        <div className="container ">
            {/* Large screens */}
            <div className="hidden lg:grid lg:grid-cols-5 xl:px-20 gap-2 justify-center items-center">
                {imageCompanies.map((src, index) => renderImage(src, index))}
            </div>
            {/* Mobile screens */}
            <div className="grid lg:hidden  grid-cols-4 gap-4 justify-center items-center">
                {imageCompanies.map((src, index) => {
                    let extraClasses = '';
                    if (index === 8) extraClasses = 'col-start-2';
                    if (index === 9) extraClasses = 'col-start-3';
                    return renderImage(src, index, extraClasses);
                })}
            </div>


            <div className="flex flex-col">
                <h2 className="text-4xl md:text-3xl text-white font-bold">Works with your existing TVs.</h2>
                <p className='text-lg text-white mt-4'>Taiv is a small box that connects to your existing cable box and works with every satellite and cable provider.</p>
            </div>


            <div className="bg-gradient-to-tl from-[#6F3FEE] to-[#FA9478] p-2 mt-8 rounded-lg ">

                <div className="grid lg:grid-cols-4 w-full h-80 grid-cols-2 gap-0 rounded-lg">

                    <WorkItem src={'/images/w1.webp'} title={'More Sales'} desc={'Promote your drink specials and events on your existing TVs to increase revenue per guest.'} />
                    <WorkItem src={'/images/w2.webp'} title={'More Control'} desc={'Control what TV commercials play in your venue to block competitors and distasteful ads.'} />
                    <WorkItem src={'/images/w3.webp'} title={'Less Work'} desc={'Automate your TVs & digital signage. Remotely schedule everything.'} />
                    <WorkItem src={'/images/w4.webp'} title={'Monetize your Screens'} desc={'Taiv is 100% free to use. You’ll even earn revenue every commercial break.'} />
                </div>

            </div>

        </div>
    );
}
