import React from 'react'
import Card from './Card'
import CardTitle from './CardTitle'

function MoodTracker() {
    return (
        <Card>
            <div className="flex flex-col w-full h-full">
                <CardTitle text="Mood" />
                <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4">
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">😎</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">😍</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">😁</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">🤨</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">🥱</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">😐</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">🥲</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">😣</button>
                    <button className="btn btn-outline btn-primary w-full h-full text-4xl">😫</button>
                </div>
            </div>
        </Card>
    )
}

export default MoodTracker
