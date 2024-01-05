import React from 'react'

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-neutral rounded-box w-full h-full p-4">
            {children}
        </div>
    )
}

export default Card
