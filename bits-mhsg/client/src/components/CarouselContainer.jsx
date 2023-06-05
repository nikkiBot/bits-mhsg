import React from "react";
import { Carousel } from "react-bootstrap";
import "./carouselcontainer.css"

const CarouselContainer = () =>{
    return (
        <Carousel className="CarouselContainer">
        <Carousel.Item interval={2000} pause = {false}>
          <div className="carouselBox OurHeadliner">
            <img
              className="carouselimg d-block w-100"
              src={require('./carousel_images/Logo_Long.png')}
              alt="logo"
              />
            <div className="captionBox">
              <h3 className="captionHeader">Our Headliner Events</h3>
              <p className="captionTxt">Checkout our events page for more details</p>
            </div>
          </div>          
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <div className="carouselBox GameNight">
            <img
              className="carouselimg d-block w-100"
              src={require('./carousel_images/game-night.jpg')}
              alt="game night"
            />
            <div className="captionBox">
              <h3 className="captionHeader">Game Night</h3>
              <p className="captionTxt">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>        
          </div>

        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className="carouselBox">  
            <img
              className="carouselimg d-block w-100"
              src={require('./carousel_images/game-night-1.jpg')}
              alt="game night 1"
            />
            
              <div className="captionBox">
                <h3 className="captionHeader">Game Night</h3>
                <p className="captionTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>        
          
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className="carouselBox">
            <img
              className="carouselimg d-block w-100"
              src={require('./carousel_images/silent-struggle.jpg')}
              alt="Silent Struggle"
            />
            <div className="captionBox">
              <h3 className="captionHeader">Silent Struggle</h3>
              <p className="captionTxt">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <div className="carouselBox">
            <img
              className="carouselimg d-block w-100"
              src={require('./carousel_images/silent-struggle-1.jpg')}
              alt="Silent Struggle"
              />
            <div className="captionBox">
              <h3 className="captionHeader">Silent Struggle</h3>
              <p className="captionTxt">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>        
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <div className="carouselBox">
            <img
              className="carouselimg d-block w-100"
              src={require('./carousel_images/talk-it-out.jpg')}
              alt="talk-it-out"
            />
            <div className="captionBox">
              <h3 className="captionHeader">Talk it Out</h3>
              <p className="captionTxt">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
          
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <div className="carouselBox">
            <img
              className="carouselimg d-block w-100"
              src={require('./carousel_images/talk-it-out-1.jpg')}
              alt="talk-it-out"
              />
            <div className="captionBox">
              <h3 className="captionHeader">Talk it Out</h3>
              <p className="captionTxt">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
          
        </Carousel.Item>

      </Carousel>
    )
}
export default CarouselContainer ;
