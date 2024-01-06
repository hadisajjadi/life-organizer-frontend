import { useState } from 'react';

interface RatingProps {
    indexes: number[];
    onRatingChange: (newRating: number) => void;
}

function Rating({ indexes, onRatingChange }: RatingProps) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
        onRatingChange(newRating);
    };

    const handleMouseEnter = (star: number) => {
        setHoverRating(star);
    };

    const handleMouseLeave = () => {
        setHoverRating(rating);
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            {indexes.map((star) => (
                <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`max-w-10 max-h-10 ${star <= (hoverRating || rating) ? 'text-yellow-500' : 'text-neutral-content'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => handleRatingChange(star)}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                    cursor="pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2l3.09 6.31L22 9.5l-5 4.88 1.18 6.82L12 18.5l-6.18 3.18L7 14.38 2 9.5l6.91-1.19L12 2z"
                        fill={star <= (hoverRating || rating) ? 'currentColor' : 'none'}
                    />
                </svg>
            ))}
        </div>
    );
};

export default Rating;