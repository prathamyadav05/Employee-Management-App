import React from "react";
import { useNavigate } from "react-router";

const Home=(props)=>{

    const navigate=useNavigate();

    const login=()=>{
        navigate("/login")
    }

    const signup=()=>{
        navigate("/signup")
    }
    const logout=()=>{
        navigate("/logout")
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Name:Pratham Yadav</li>
                        <li>Mobile:8074018058</li>
                        <li>Mail:prathamyadav05@gmail.com</li>
                    </ul>
                </div>
                <img src="C:\Users\prath\Downloads\Clothing-fashion-ecommerce-website-25aa410f.jpg"></img>

                <div className="col-6">

                <form className="form-group" >
                    <h6>.</h6>EMPLOYEE MANAGEMENT APP
                    {props.isLoggedIn?
                    <button className="btn btn-success" onClick={logout}>Logout</button>
                    :
                    <>
                    <button className="btn btn-primary" type="button" onClick={login}>Login</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" type="button" onClick={signup}>Signup</button>
                    </>
                    }
                </form>
                </div>
            </div>   
        </div>
    )
}
export default Home