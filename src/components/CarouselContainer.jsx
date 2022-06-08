import React from "react";
import { Carousel } from "react-bootstrap";


const CarouselContainer = () =>{
    return (
        <Carousel className="CarouselContainer">
        <Carousel.Item interval={2000} pause = {false}>
          <img
            className="carouselimg d-block w-100"
            src={require('./carousel_images/Logo_Long.png')}
            alt="logo"
          />
          <Carousel.Caption>
            <h3>Our Headliner Events</h3>
            <p>Checkout our events page for more details</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <img
            className="carouselimg d-block w-100"
            src={require('./carousel_images/game-night.jpg')}
            alt="game night"
          />
          <Carousel.Caption>
            <h3>Game Night</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="carouselimg d-block w-100"
            src={require('./carousel_images/game-night-1.jpg')}
            alt="game night 1"
          />
          <Carousel.Caption>
            <h3>Game Night</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="carouselimg d-block w-100"
            src={require('./carousel_images/silent-struggle.jpg')}
            alt="Silent Struggle"
          />
          <Carousel.Caption>
            <h3>Silent Struggle</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <img
            className="carouselimg d-block w-100"
            src={require('./carousel_images/silent-struggle-1.jpg')}
            alt="Silent Struggle"
          />
          <Carousel.Caption>
            <h3>Silent Struggle</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <img
            className="carouselimg d-block w-100"
            src={require('./carousel_images/talk-it-out.jpg')}
            alt="talk-it-out"
          />
          <Carousel.Caption>
            <h3>Talk it Out</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000} pause = {false}>
          <img
            className="carouselimg d-block w-100"
            src={require('./carousel_images/talk-it-out-1.jpg')}
            alt="talk-it-out"
          />
          <Carousel.Caption>
            <h3>Talk it Out</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    )
}
export default CarouselContainer ;
