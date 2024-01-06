import Card from "./Card"
import CardTitle from "./CardTitle"

import { useState } from "react";

function Note() {
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
            <CardTitle text="Notes" />
            <div className="flex-1 transition-all">
                <textarea
                    className={textareaClassName}
                    placeholder="write your notes here"
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

export default Note;
