import React from 'react'
import CardTitle from './CardTitle'
import Card from './Card'

type Event = {
    title: string,
    start: number,
    end: number,
}

type Props = {
    events: Event[],
}

function RenderEvents({ events }: Props) {
    return events.map((event, i) => (
        <div
            key={i}
            className="absolute start-0 w-full h-full flex items-center justify-center ps-14 pe-6"
            style={{
                top: `${(event.start - 1) * 48}px`,
                height: `${(event.end - event.start) * 48}px`,
            }}
        >
            <div className="w-full h-full flex items-center justify-center bg-primary rounded-lg">
                <span className="text-primary-content text-opacity-40 text-sm">
                    {event.title}
                </span>
            </div>
        </div>
    ))
}

function DayView() {
    return (
        <Card>
            <div className="w-full h-full flex flex-col">
                <CardTitle text="Day View" />
                <div className="pt-4 flex-1 overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
                    <div className="h-full relative">
                        {
                            [...Array(24)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-12 border-t border-neutral-content border-opacity-10 border-dashed relative"
                                >
                                    <span className="text-content text-opacity-40 text-sm absolute top-0 start-0 -translate-y-1/2">
                                        {`${i + 1}:00`}
                                    </span>
                                </div>
                            ))
                        }
                        <RenderEvents
                            events={[
                                {
                                    title: "Work on project",
                                    start: 7,
                                    end: 9,
                                },
                                {
                                    title: "Be Proud of Yourself",
                                    start: 10.5,
                                    end: 12.5,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>

        </Card>
    )
}

export default DayView

