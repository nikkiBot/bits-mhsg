import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/home/Home"
// import { Single } from "./components/pages/single/Single";
// import Events from "./components/pages/events/Events";
// import Whatsnext from "./components/pages/whatsnext/Whatsnext";
import {Route,Routes} from 'react-router-dom';

// const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";


function App() {

  //const user = false ;  //this is a dummy variable to check if user is logged in or not
  return (
    <Routes>
      <Route path = "/" element={ 
        <>
          <NavBar/> 
          <Home/> 
        </>
      } />
      
    </Routes>
  );
}

export default App;
