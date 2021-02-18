import {capitalizeName} from "../../util/capitalizeName"

export const TypingCard = ({name}) => {
    return (
        <div className="typing-card">
            {capitalizeName(name) + ' is typing...'}
        </div>
    )
}
