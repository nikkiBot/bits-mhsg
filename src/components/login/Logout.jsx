import { GoogleLogout } from 'react-google-login';

const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";

function Logout(){

    const onSuccess = (res) => {
        console.log("Logout Success");
    };


    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId= {clientId}
                buttonText = {"Login"}
                onLogoutSuccess = {onSuccess}
            />
        </div>
    )
}

export default Logout ;