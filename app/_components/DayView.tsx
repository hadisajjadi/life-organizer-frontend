import React from 'react'
import CardTitle from './CardTitle'
import Card from './Card'

function DayView() {
    return (
        <Card>
            <div className="w-full h-full flex flex-col">
                <CardTitle text="Day View" />
                <div className="pt-4 flex-1 overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
                    <div className="h-full">
                        {
                            [...Array(24)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-12 border-t border-neutral-content border-opacity-10 border-dashed relative"
                                >
                                    <span className="text-content text-opacity-40 text-sm absolute top-0 left-0 -translate-y-1/2">
                                        {`${i + 1}:00`}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </Card>
    )
}

export default DayView

