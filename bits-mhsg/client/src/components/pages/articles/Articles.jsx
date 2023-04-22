import React from 'react'
import "./articles.css"
import { Post } from "../../post/Post"
import Header from "../../header/Header"

export default function articles() {
  return (
    <>
      <div className="postcontainer">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      
    </>
  )
}


