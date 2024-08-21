import React from 'react'

export default function DivDesc({ scrollProgress }) {
    return (
        <div className={`${scrollProgress >= 90 ? "h-[0vh]" : " h-[200vh]"} bg-red-500`}></div>
    )
}
