import "./profile.css";
import React from 'react'
import ImageList from "../../profileImg/ImageList";


export default function Profile(props) {
  return (
    <div className="profile">
        <img
        className="profileImg"
        src={props.img}
        alt="Other pors were lazy enough not to give their image"/>
        <div className="profileInfo">
            <h3 className="profileName">{props.name}</h3>
            <h4 className="profilePosition">{props.pos}</h4>
            {/* <div className="profileLinks">
                <a href="https://facebook.com/" className="fblink icon"><i className="SocialLinks fa-brands fa-facebook-square"></i></a>
                <a href="https://instagram.com/" className="instalink icon"><i className="SocialLinks fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" className="linkedlink icon"><i className="SocialLinks fa-brands fa-instagram"></i></a>
            </div> */}
        </div>
    </div>
  )
}

Profile.defaultProps={
  name:"Other PORs",
  pos:"por"
  
}