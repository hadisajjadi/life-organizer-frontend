import React from 'react'
import Card from './Card'
import CardTitle from './CardTitle'
import Rating from './common/Rating'

function MoodTracker() {
    return (
        <Card>
            <div className="flex flex-col w-full h-full">
                <CardTitle text="Mood" />
                
                <Rating />
                
            </div>
        </Card>
    )
}

export default MoodTracker
