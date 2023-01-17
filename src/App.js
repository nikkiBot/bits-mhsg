import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/home/Home"
import { Single } from "./components/pages/single/Single";
import Events from "./components/pages/events/Events";
import Whatsnext from "./components/pages/whatsnext/Whatsnext";
import {Route,Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";


function App() {
  //O-auth:
  const [user, setUser] = useState({});
  user && console.log("User is logged in"); //change this later to a proper condition


  /* global google */ //to remove the error of google not being defined, Remove this comment and see how annoying the error squibbles are :")
  function handleCallbackResponse(response) {
    console.log("Encoded JWT : " + response.credential);
    console.log("\n");
    const userObject = jwtDecode(response.credential);
    console.log("Decoded JWT : " + userObject);
    setUser(userObject);
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
          <NavBar/> 
          <Home/> 
        </>
      } />
      <Route path = "/Events" element={ //Events Page
        <>
          <NavBar/> 
          <Events/> 
        </>
      } />
      <Route path = "/Whatsnext" element={ //Whatsnext Page
        <>
          <NavBar/>
          <Whatsnext/>
        </>
      } />
      <Route path = "/Posts/:id" element={ //Single post Page
        <>
          <NavBar/>
          <Single/>
        </>
      } />
    </Routes>
  );
}

export default App;
