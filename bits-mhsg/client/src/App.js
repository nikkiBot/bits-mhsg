import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Home from "./components/pages/home/Home"
import { Single } from "./components/pages/single/Single";
import Events from "./components/pages/events/Events";
import Whatsnext from "./components/pages/whatsnext/Whatsnext";
import Resources from "./components/pages/resources/Resources";
import Articles from "./components/pages/articles/articles";
import Team from "./components/pages/team/Team";
import {Route,Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";


function App() {
  //O-auth:
  const [user, setUser] = useState({});
  user && console.log("User is logged in"); //change this later to a proper condition


  /* global google */ //to remove the error of google not being defined, Remove this comment and see how annoying the error squibbles are :")
  function handleCallbackResponse(response) {
    console.log("Encoded JWT : " + response.credential);
    var decoded_jwt = jwt_decode(response.credential);
    console.log(decoded_jwt);
    setUser(decoded_jwt);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signin_div"),
      { theme: "outline", size : "large", type: "standard"}
    )
  }, []); //empty array since we need useEffect running only once

  

  //Navigation:
  return (
    <Routes>
      <Route path = "/" element={ //Homepage
        <>
          <div id="signin_div"> </div>
          <NavBar/> 
          <Home/> 
          <Footer/>
        </>
      } />
      <Route path = "/Events" element={ //Events Page
        <>
          <NavBar/> 
          <Events/>
          <Footer/> 
        </>
      } />
      <Route path = "/Resources" element={ //Whatsnext Page
        <>
          <NavBar/>
          <Resources/>
          <Footer/>
        </>
      } />
      <Route path = "/Articles" element={ //Articles Page
        <>
          <NavBar/>
          <Articles/>
          <Footer/>
        </>
      } />
      <Route path = "/Posts/:id" element={ //Single post Page
        <>
          <NavBar/>
          <Single/>
          <Footer/>
        </>
      } />
      <Route path = "/Team" element={ //Single post Page
        <>
          <NavBar/>
          <Team/>
          <Footer/>
        </>
      } />
    </Routes>
  );
}

export default App;
