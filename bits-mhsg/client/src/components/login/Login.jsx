import { GoogleLogin } from 'react-google-login';

const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";

function Login(){

    const onSuccess = (res) => {
        console.log("Login Success, Current User : " , res.profileObj);
    };

    const onFailure = (res) => {
        console.log("Login Failed, res " , res);
    };


    return(
        <div id="signInButton">
            <GoogleLogin
                clientId= {clientId}
                buttonText = "Login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    )
}

export default Login;