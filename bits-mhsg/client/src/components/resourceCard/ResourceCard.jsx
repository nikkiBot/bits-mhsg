import "./resourceCard.css";

import React from 'react'

export default function ResourceCard() {
  return (
    <div className="resourceCard">
        <div className="cardImgBox">
            <img
            className="cardImg"
            src={require('../carousel_images/silent-struggle-1.jpg')}
            alt="img not rendered"/>
        </div>
        <div className="cardContent">
            <h2 className="cardTitle">World Health Organization</h2>
            <div className="cardBody">Lorem ipsumg elit. Nisi aperiam, distinctio harum exercitationem repellat, voluptates amet quia. Fuga, eius culpa. A ipsam eaque iure eligendi eos debitis, nihit. Tempora illum eaque, similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus laboriosam. </div>
          <div className="cardLink">
            <div className="linkBox">
              <span className="linkTxt">Link: </span> 
              <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response" className="ahref" target="_blank">🌐</a>
            </div>
            <div className="contactBox">
              <span>Contact No: </span>
              <span>9876543210 </span>
            </div>
          </div>
        </div>
    </div>
  )
}
