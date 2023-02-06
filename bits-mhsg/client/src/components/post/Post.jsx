import "./post.css"

/**
 * @brief Single post component.
 * @returns single post component.
 */
export const Post = () => {
  return (
    <div className="post">
        <img
        className="postImg"
        src={require('../carousel_images/silent-struggle-1.jpg')}
        alt="img not rendered"/>
        <div className="postInfo">
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postBrief">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
    </div>
  )
}
