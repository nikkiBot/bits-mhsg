import { useEffect } from "react";
const url = "https://accounts.google.com/gsi/client" ;
const clientId = "579947568650-hjhri6ud5hd514fhgp9c6hq27qtim4kv.apps.googleusercontent.com";


const Auth = () => {
    /* global google */
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCallbackResponse,
            context: "use",
            prompt_parent_id: "signin_div"
            signin_url : url ;
        });
        google.accounts.id.renderButton(
            document.getElementById("signin_div"),
            { theme: "outline", size : "large", type: "standard"}
        )
    }, []); //empty array since we need useEffect running only once

    function handleCallbackResponse(response) {
        console.log("Encoded JWT : " + response.credential);
        console.log("\n");
        // const userObject = jwtDecode(response.credential);
        // console.log("Decoded JWT : " + userObject);
        // setUser(userObject);
    }

    return (
        <div>
            <div id="signin_div"></div>
        </div>
    );
}

export default Auth;