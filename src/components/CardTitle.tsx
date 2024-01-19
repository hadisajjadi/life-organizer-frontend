import React from 'react'

function CardTitle({ text }: { text: string }) {
    return (
        <span
            className="text-neutral-content font-semibold text-3xl text-center mb-4 mx-auto block w-fit"
        >
            {text}
        </span>
    )
}

export default CardTitle
