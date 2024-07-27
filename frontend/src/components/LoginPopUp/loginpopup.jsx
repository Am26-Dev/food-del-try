import { useContext, useEffect, useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"

export const LoginPopUp = ({setShowLogin})=>{
    
    const {url, setToken} = useContext(StoreContext);

    const [ currState, setCurrState ] = useState("Sign-up");
    const [ data, setData ] = useState({
        name:"",
        email:"",
        password:"",
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
        
    }

    const onLogin = async (event)=> {
        event.preventDefault();
        let newUrl = url;
        if(currState === "Login") {
            newUrl += "api/user/login"
        }else {
            newUrl += "api/user/registered"
        }

        const response = await axios.post(newUrl, data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }

    }


    return(
        <div className="login-popup">

{/* LOGIN POPUP CONTAINER */}

            <form onSubmit={onLogin} className="login-popup-container">

{/* LOGIN TITLE */} 
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <i onClick={()=> setShowLogin(false)} className="fa-solid fa-xmark"></i>
                </div>

{/* LOGIN POPUP INPUT */}
                <div className="login-popup-inputs">

                    {
                        currState==="Login" ? <></> :  <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
                    }

                    <input name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="Your Email" required />

                    <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="password" required />

                    <button type="submit">{currState==="Sign-up"?"Create-account" : "Login"}</button>

{/* LOGIN PUPUP CONDITION */}

                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>By conitnuing, I agree to the terms of use & privacy policy</p>
                    </div>

                        {
                            currState==="Login" ? <p>Create a new account?<span onClick={()=>setCurrState("Sign-up")}>Click here</span></p>
                            :  
                            <p>Already have an account.<span onClick={()=>setCurrState("Login")}>Login here</span></p>
                        }
                    
                </div>
            </form>
        </div>
    )
}