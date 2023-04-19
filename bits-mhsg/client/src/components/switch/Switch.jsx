import React from 'react'
import "./switch.css"


export default function Switch() {
  
  function lclickHandler(){
    document.querySelector('.rightButton') .style.background = "rgb(213, 213, 213)";
    document.querySelector('.rightButton') .style.color = "rgb(50, 50, 50)";
    document.querySelector('.leftButton') .style.color = "rgb(213, 213, 213)";
    document.querySelector('.leftButton') .style.background = "rgb(50, 50, 50)";
    
    
  }
  function rclickHandler(){
    document.querySelector('.leftButton') .style.background = "rgb(213, 213, 213)";
    document.querySelector('.rightButton') .style.background = "rgb(50, 50, 50)";
    document.querySelector('.leftButton') .style.color = "rgb(50, 50, 50)";
    document.querySelector('.rightButton') .style.color = "rgb(213, 213, 213)";
   
  }


  return (
    <div className="switchButton">
        <span className="leftButton" onClick={lclickHandler}>Upcoming</span>
        <span className="rightButton" onClick={rclickHandler}>Past</span>
    </div>
  )
}
// onClick={lclickHandler()}
// onClick={rclickHandler()}