import Card from "./Card"
import CardTitle from "./CardTitle"

import { useState } from "react";

function MealTracker() {
    const [content, setContent] = useState("");
    const [previousContent, setPreviousContent] = useState("");

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleButtonClick = () => {
        setPreviousContent(content);
    };

    const textareaClassName = content !== previousContent ? "w-full h-full textarea flex-1 shifted" : "w-full h-full textarea flex-1";

    return (
        <Card>
            <CardTitle text="Meals" />
            <div className="flex-1 transition-all">
                <textarea
                    className={textareaClassName}
                    placeholder="What did you eat today?"
                    value={content}
                    onChange={handleContentChange}
                />
            </div>
            <div className={content !== previousContent ? "pt-4" : "hidden"}>
                <button onClick={handleButtonClick} className="btn btn-primary w-full">Save Changes</button>
            </div>
        </Card>
    );
}

export default MealTracker;
