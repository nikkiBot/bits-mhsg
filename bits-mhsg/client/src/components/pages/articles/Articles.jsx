import React from 'react'
import { useEffect , useState } from "react"
import "./articles.css"
import { Post } from "../../post/Post"
import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import axios from "axios"

export default function articles() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  })
  return (
    <>
      <div className="postcontainer">
        <Posts posts={posts}/>
      </div>
      
    </>
  )
}


