import "./singlePost.css"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  console.log(path);

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get( "http://localhost:5000/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]); //path here means

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        { /**post.photo && so and so later */ }
        <img
        src = {require("../carousel_images/silent-struggle.jpg")}
        alt = ""
        className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        {post.title}
      </h1>
      <div className="singlePostReact">
        <i className="singlePostIcon fa-solid fa-heart"></i>
        <i className="singlePostIcon fa-solid fa-comment"></i>
      </div>
      <div className="singlePostInfo">
        <span className="singlePostWriter">Written by: <b>{post.postAuthor}</b></span>
        <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="singlePostDesc">
        {post.postDescription} {/** not working please help github.  */}
      </p>
    </div>
  )
}
