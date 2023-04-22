import "./event.css"


import React from 'react'

export default function Event(props) {
  return (
    <div className="event">
        <img
        className="eventImg"
        src={require('../carousel_images/silent-struggle-1.jpg')}
        alt="img not rendered" />

        <div className="eventInfo">
            <div className="eventHeading">
                <span className="eventTitle">{props.evObj.Title}</span>
                <div className="eventDetails">
                    <div className="eventDate">
                      <span className="eventDateTxt">Date: </span>
                      <span className="eventDateVal">{props.evObj.Date}</span>
                    </div>

                    <span className="separator">|</span>

                    <div className="eventTime">
                      <span className="eventTimeTxt">Time: </span>
                      <span className="eventTimeVal">{props.evObj.Time}</span>
                    </div>
            
                    <span className="separator">|</span>

                    <div className="eventVenue">
                      <span className="eventVenueTxt">Venue: </span>
                      <span className="eventVenueVal">{props.evObj.Venue}</span>
                    </div>
                </div>
            </div>
            
            <div className="eventBody">
            <div className="eventBrief">{props.evObj.Desc}
            </div>
            <p className="eventLink">More details: <a href={props.evObj.FbLink} className="icon fblink" target="_blank"><i className="SocialLinks fa-brands fa-facebook-square"></i></a><a href={props.evObj.IgLink} target="_blank" className="instalink"><i className="SocialLinks fa-brands fa-instagram"></i></a></p>

            </div>
        </div>


    </div>
  )
}
