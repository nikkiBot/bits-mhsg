import NavBar from "./NavBar/NavBar";
import Home from "./pages/home/Home";
//import Logout from "./components/login/Logout";
//import Login from "./components/login/Login";
import {useEffect} from 'react';
import { gapi } from 'gapi-script';

const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId ,
        scope : ""
      })
    };


      gapi.load('client:auth2',start) ;
  });
  
  //var accessToken = gapi.auth.getToken().access_token ;

  return (
    <>
      <NavBar/>
      <Home/>
    </>
    
  );
}

export default App;
