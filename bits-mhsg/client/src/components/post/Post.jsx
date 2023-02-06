import "./post.css"
import { Link } from "react-router-dom"

/**
 * @brief Single post component. Any changes you make here are seen on the individual post card on articles/home page
 * @returns single post component.
 */
export const Post = ({post}) => {
  return (
    <div className="post">
      {/* console.log(post._id);
      console.log(post.postID); */}
      {/* {post.postCover && the next image component - to be added later} */}
        <img
        className="postImg"
        src={require('../carousel_images/silent-struggle-1.jpg')}
        alt="img not rendered"/>
        <div className="postInfo">
          <Link to={`Posts/${post._id}`} className="link">
            {/**
             * it has to be `posts/${post._id}` because the frontend part to reach a single post was written that way
             * Do not confuse with the localhost:5000/api/posts/_id url
             */}
            <span className="postTitle">{post.title}</span>
          </Link>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postBrief">
          {post.postDescription} 
        </p>
    </div>
  )
}
