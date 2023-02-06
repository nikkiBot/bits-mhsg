import "./posts.css"
import { Post } from "../post/Post" //{} used to import a specific component from a file

export default function Posts( {posts}) {
  return (
    <div className="posts">
      {posts.map((p)=>(
        <Post post={p}/>
      ))}
    </div>
  )
}
