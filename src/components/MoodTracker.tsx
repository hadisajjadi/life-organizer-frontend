import Card from './Card'
import CardTitle from './CardTitle'
import Rating from './common/Rating'


function onRatingChanged(newRating: number) {
    console.log(newRating)
}


function MoodTracker() {
    return (
        <Card>
            <div className="flex flex-col w-full h-full">
                <CardTitle text="Mood" />
                
                <Rating indexes={[1, 2, 3, 4, 5]} onRatingChange={onRatingChanged} />
                
            </div>
        </Card>
    )
}

export default MoodTracker
