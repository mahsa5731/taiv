import { Link } from 'react-router-dom';

export default function Button({ text, children, linkClass, btnClass, textClass }) {
    return (
        <Link className={`${linkClass} `} >
            <div className={`flex h-11 px-2 justify-center text-white rounded-md hover:bg-gradient-to-tl bg-gradient-to-r from-[#7049F3] to-[#736BFC] items-center hover:rounded-xl transition-all group ${btnClass}`}>
                <span className={textClass}>{text}</span>
                <div className="group-hover:scale-110 transition-transform ml-1">
                    {children}
                </div>
            </div>
        </Link>
    )
}
