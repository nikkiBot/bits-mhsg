import { Post } from "../../post/Post";
import "./events.css";


import Header from "../../header/Header"
import Event from "../../event/Event"
import Switch from "../../switch/Switch"


export default function Events() {
  function clickHandler(){
    console.log("clicked!!!");
  }
  return (
    <div className="events">
      <Switch/>

      <div className="newEvents">
        {/* <h1 className="newEventsTxt headerTxt">Upcoming Events</h1> */}
        <Event/>
        <Event/>
      </div>

      <div className="pastEvents">
        {/* <h1 className="newEventsTxt headerTxt">Past Events</h1> */}
        <Event/>
        <Event/>
        <Event/>
        <Event/>
      </div>

      
    </div>

  );
}
