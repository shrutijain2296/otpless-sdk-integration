import { useEffect } from "react";

function Signup() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://otpless.com/auth.js";
    script.cid = "0ZX9N7GD18UJH5QTU3G9KJ4BB7KFO8JZ";
    script.async = true;

    document.body.appendChild(script);
    window.otpless = (otplessUser) => {
      console.log(JSON.stringify(otplessUser));  
    };
  }, []);

  return <div id="otpless-login-page" />

}

export default Signup;