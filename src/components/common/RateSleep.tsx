import { useState } from 'react';
import { IoMoon as MoonFilled, IoMoonOutline as Moon } from "react-icons/io5";


function RateSleep() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleMouseEnter = (star: number) => {
        setHoverRating(star);
    };

    const handleMouseLeave = () => {
        setHoverRating(rating);
    };

        const GetIcon = (sleepTime : number) => {
        if (sleepTime <= (hoverRating || rating)) {
            return <MoonFilled
                key={sleepTime}
                className={`w-10 h-10 ${sleepTime <= (hoverRating || rating) ? 'text-yellow-500' : 'text-neutral-content'}`}
                onClick={() => handleRatingChange(sleepTime)}
                onMouseEnter={() => handleMouseEnter(sleepTime)}
                onMouseLeave={handleMouseLeave}
            />
        } else {
            return <Moon
                key={sleepTime}
                className={`w-10 h-10 ${sleepTime <= (hoverRating || rating) ? 'text-yellow-500' : 'text-neutral-content'}`}
                onClick={() => handleRatingChange(sleepTime)}
                onMouseEnter={() => handleMouseEnter(sleepTime)}
                onMouseLeave={handleMouseLeave}
            />
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((sleepTime) => (
                
                GetIcon(sleepTime)
            ))}
        </div>
    );


};

export default RateSleep;