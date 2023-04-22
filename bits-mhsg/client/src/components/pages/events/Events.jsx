import { Post } from "../../post/Post";
import "./events.css";
import "../../switch/switch.css"

import Event from "../../event/Event"
import Switch from "../../switch/Switch"


export default function Events() {

  const eventDetails=[
    {
      eid: 1,
      Title: "Lorem ipsum dolor sit amet",
      Date: "14-04-2023",
      Time: "5 PM",
      Venue: "F-106",
      Desc:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse officiis quia culpa repellat commodi adipisci ad, ratione dicta corrupti minus iste non pariatur aliquam maiores eos delectus impedit quibusdam, quae nemo eum quos. Debitis minima saepe voluptas dignissimos, corrupti ratione iure culpa mollitia! Temporibus. sit amet consectetur adipisicing elit. Sed vel deleniti, a, adipisci dolorum velit aut asaidfsddf recusandae aliquam officiis beatae laborum? Unde sunt corrupti, facere veniam dolorem, praesentium commodi quia.",
      FbLink: "https://www.facebook.com/groups/BITS.MHSG/permalink/1961189930884848/",
      IgLink: "https://www.instagram.com/bits.mhsg/"
    },
    {
      eid: 2,
      Title: "Lorem ipsum dolor sit amet",
      Date: "13-06-2023",
      Time: "4 PM",
      Venue: "F-105",
      Desc:"Sorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse officiis quia culpa repellat commodi adipisci ad, ratione dicta corrupti minus iste non pariatur aliquam maiores eos delectus impedit quibusdam, quae nemo eum quos. Debitis minima saepe voluptas dignissimos, corrupti ratione iure culpa mollitia! Temporibus. sit amet consectetur adipisicing elit. Sed vel deleniti, a, adipisci dolorum velit aut asaidfsddf recusandae aliquam officiis beatae laborum? Unde sunt corrupti, facere veniam dolorem, praesentium commodi quia.",
      FbLink: "https://www.facebook.com/groups/BITS.MHSG/permalink/1961189930884848/",
      IgLink: "https://www.instagram.com/bits.mhsg/"
    },
  ]

  function clickHandler(){
    console.log("clicked!!!");
  }
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
    <div className="events">
      {/* <Switch/> */}
      <div className="switch">
        <div className="switchButton">
        <span className="leftButton" onClick={lclickHandler}>Upcoming</span>
        <span className="rightButton" onClick={rclickHandler}>Past</span>
        </div>
      </div>

      <div className="events">
        <Event evObj={eventDetails[0]} />
        <Event evObj={eventDetails[1]} />
      </div>


      {/* <div className="newEvents">
        
        <Event/>
        <Event/>
      </div>

      <div className="pastEvents">
        <Event/>
        <Event/>
        <Event/>
        <Event/>
      </div> */}

      
    </div>

  );
}
