import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/home/Home"
// import Logout from "./components/login/Logout";
// import Login from "./components/login/Login";
import { Single } from "./components/pages/single/Single";
import Events from "./components/pages/events/Events";
import Whatsnext from "./components/pages/whatsnext/Whatsnext";
// import {useEffect} from 'react';
// import { gapi } from 'gapi-script';

// const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";


function App() {

  const user = false ;  //this is a dummy variable to check if user is logged in or not
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/post/:postId'>
          <Single/>
        </Route>
        <Route path='/events'>
          <Events/>
        </Route>
        <Route path='/whatsnext'>
          {user? <Home/> : <Whatsnext/>}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
