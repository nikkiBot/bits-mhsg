import "./event.css"


import React from 'react'

export default function Event() {
  return (
    <div className="event">
        <img
        className="eventImg"
        src={require('../carousel_images/silent-struggle-1.jpg')}
        alt="img not rendered" />

        <div className="eventInfo">
            <div className="eventHeading">
                <span className="eventTitle">Lorem ipsum dolor sit amet</span>
                <div className="eventDetails">
                    <div className="eventDate">
                      <span className="eventDateTxt">Date: </span>
                      <span className="eventDateVal">12 April 2023</span>
                    </div>

                    <span className="separator">|</span>

                    <div className="eventTime">
                      <span className="eventTimeTxt">Time: </span>
                      <span className="eventTimeVal">4 PM</span>
                    </div>
            
                    <span className="separator">|</span>

                    <div className="eventVenue">
                      <span className="eventVenueTxt">Venue: </span>
                      <span className="eventVenueVal">F-106</span>
                    </div>
                </div>
            </div>
            
            <div className="eventBody">
            <div className="eventBrief">
            Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse officiis quia culpa repellat commodi adipisci ad, ratione dicta corrupti minus iste non pariatur aliquam maiores eos delectus impedit quibusdam, quae nemo eum quos. Debitis minima saepe voluptas dignissimos, corrupti ratione iure culpa mollitia! Temporibus. sit amet consectetur adipisicing elit. Sed vel deleniti, a, adipisci dolorum velit aut asaidfsddf recusandae aliquam officiis beatae laborum? Unde sunt corrupti, facere veniam dolorem, praesentium commodi quia, laborum odio nulla fugiat.
            </div>
            <p className="eventLink">More details: <a href="https://www.facebook.com/groups/BITS.MHSG/permalink/1961189930884848/" className="icon fblink" target="_blank"><i className="SocialLinks fa-brands fa-facebook-square"></i></a><a href="https://www.instagram.com/bits.mhsg/" target="_blank" className="instalink"><i className="SocialLinks fa-brands fa-instagram"></i></a></p>

            </div>
        </div>


    </div>
  )
}
