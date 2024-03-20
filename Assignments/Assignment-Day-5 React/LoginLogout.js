import React, {useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import axios from 'axios'

function Login() {   

    const [uid, setUserId]  = useState("admin");
    const [pwd, setPassword]  = useState("admin123");
    const [result, setResult]  = useState(""); 
    const SERVER_URL="http://localhost:3500/users";

    let navigate = useNavigate(); // for navigation using code
    let location = useLocation(); // for reading query string params

    function loginButton_click()
    { 
      const queryString = location.search; // returns the query string from the current url      
      let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');

      if(strReturnUrl == null)
      {
        strReturnUrl = "/";
      }
        
        if(uid == "admin" && pwd == "admin123")
        {   
          // In real-time apps, we will get the token from the server
          // JWT token is the popular token generation library          
           let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
           sessionStorage.setItem('user-token', token);
          // navigate("/Depts");
          navigate(strReturnUrl);
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }

  
    function logoutButton_click() {
      // sessionStorage.removeItem('user-token');
      sessionStorage.clear();
      navigate("/");
    }


  return (
    <>   
      <fieldset>
                <legend>User Login</legend>

                <label>User Id  : </label>
                <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
                <br/><br/>

                <label>Password  : </label>
                <input type="password"  value={pwd}  onChange={(args) => setPassword(args.target.value)} />
                <br/><br/>

                <input type="button"  onClick={loginButton_click}  value="Login"    />
                <p  style={{color : "red"}}>{result}</p>   
                <input type="button" onClick={logoutButton_click} value="Logout" />
    
                
       </fieldset>  
    </>
  );

}

export default Login;
