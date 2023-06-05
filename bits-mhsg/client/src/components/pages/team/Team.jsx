import "./team.css";
import Profile from "../../profile/Profile"
import React from 'react'
import ImageList from "../../../profileImg/ImageList";

export default function Team() {
  
  const det=[
    {
      id:1,
      name:"Umang Lal",
      pos:"President",
    },
    {
      id:2,
      name:"Nishith Kumar",
      pos:"Website Dev Lead", 
    },
    {
      id:3,
      name:"Abhinav Srivastava",
      pos:"Treasurer", 
    }
  ]
  return (
    <>
    
    <div className="team">
      <div className="headerBox">
          <h1 className="teamHeader">The Team</h1>
      </div>
      <div className="underline"></div>
      <div className="profileCards">
      <Profile name={det[0].name} pos={det[0].pos} img={ImageList.umangimg} />
      <Profile name={det[1].name} pos={det[1].pos} img={ImageList.nishithimg} />
      <Profile name={det[2].name} pos={det[2].pos} img={ImageList.abhinavimg}/>
      <Profile />
      <Profile />
      <Profile />
      <Profile/>
      <Profile/>

      
      </div>
    </div>
    </>
  )
}
