import "./posts.css"
import { Post } from "../post/Post" //{} used to import a specific component from a file

export default function Posts() {
  return (
    <div className="posts">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
