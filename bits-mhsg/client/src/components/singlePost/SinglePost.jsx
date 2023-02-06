import "./singlePost.css"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const SinglePost = () => {
  const location = useLocation();
  var path = location.pathname.split('/')[2];
  console.log(path);

  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = axios.get("posts/" + path);
      console.log(res);
    };
    getPost();
  }, [path]); //path here means

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
        src = {require("../carousel_images/silent-struggle.jpg")}
        alt = ""
        className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet.
      </h1>
      <div className="singlePostReact">
        <i className="singlePostIcon fa-solid fa-heart"></i>
        <i className="singlePostIcon fa-solid fa-comment"></i>
      </div>
      <div className="singlePostInfo">
        <span className="singlePostWriter">Written by: <b>John</b></span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officia temporibus esse tempora expedita numquam error delectus voluptates neque earum recusandae, nihil soluta voluptate exercitationem quidem accusamus cum tempore ex?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officia temporibus esse tempora expedita numquam error delectus voluptates neque earum recusandae, nihil soluta voluptate exercitationem quidem accusamus cum tempore ex?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officia temporibus tempora expedita numquam error delectus voluptates neque earum recusandae, nihil soluta voluptate exercitationem quidem accusamus cum tempore ex?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officia temporibus tempora expedita numquam error delectus voluptates neque earum recusandae, nihil soluta voluptate exercitationem quidem accusamus cum tempore ex?
      </p>
    </div>
  )
}
