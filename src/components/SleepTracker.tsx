import Card from './Card'
import CardTitle from './CardTitle'
import RateSleep from './common/RateSleep'

function SleepTracker() {
    return (
        <Card>
            <div className="flex flex-col w-full h-full">
                <CardTitle text="Sleep" />
                
                <RateSleep />
                
            </div>
        </Card>
    )
}

export default SleepTracker
