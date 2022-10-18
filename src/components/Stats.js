import React,{useState} from "react"

const Stats = ({views, date, likes, dislikes, setHidden, hidden}) => {
    const [likeCount, setLikes] = useState(likes)
    const [dislikeCount, setDislikes] = useState(dislikes)
    
    const handleLikeClick = (event) => {
        setLikes(likeCount+1)
    }
    const handleDislikeClick = (event) => {
        setDislikes(dislikeCount+1)
    }

    return (
    <div>
        <p>{`${views} Views | Uploaded ${date}`}</p>
        <button onClick={handleLikeClick}>{likeCount+"👍"}</button>
        <button onClick={handleDislikeClick}>{dislikeCount+"👎"}</button>
        <div>
            <button onClick={() => setHidden(!hidden)}>Hide Comments</button>
        </div>
    </div>
    
    )
}

export default Stats