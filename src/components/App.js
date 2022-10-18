import video from "../data/video.js"
import React, {useState} from "react"
import Title from "./title"
import Stats from "./Stats"
import Comments from "./Comments"

function App() {

  const [hidden, setHidden] = useState(false)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title title={video.title} />
      <Stats 
        views={video.views} 
        likes={video.upvotes} 
        dislikes={video.downvotes} 
        date={video.createdAt} 
        setHidden={setHidden}
        hidden={hidden}
      />
      <Comments
        comments={video.comments}
        hidden={hidden}
      />
    </div>
  )
}

export default App
