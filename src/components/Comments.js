import React from "react"
import Comment from "./Comment"

const Comments = ({comments, hidden}) => {
    const theComments = comments.map(comment => {
        if (hidden) return
        return <Comment key={comment.id} comment={comment}/>
    })
    return (
        <div>
            <h2>{`${comments.length} Comments`}</h2>
            {theComments}
        </div>
    )
}

export default Comments