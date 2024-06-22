import { useContext, useState } from "react"
import { ApplicationContext } from "../context/context";
import { loginHandle } from "../utils/authAction";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap";




const Login= ()=> {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        email: "",
        password: "",
    });
    const {setCurrentUser} =  useContext(ApplicationContext);

    const [error, setError] = useState("");

    const handleUserInfoChange = (e) =>{
        setUserData({...userData,[e.target.name]:e.target.value});
    };

    const handleOnLogin = async () => {
        try {
            setError("");
            const {email,password}= userData;
            if(!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setError("Enter a valid email");
                return;
            }

            if(!password){
                setError("Enter a valid password");
                return;
            }

            let response = await loginHandle(userData);
            if(response.status){
                setCurrentUser({
                    name:response?.data?.name,
                    email:response?.data?.email,
                    token:response?.data?.token,
                    _id:response?.data?._id,
                    isLoggedIn: true,
                    
                });

                localStorage.setItem("name",response?.data?.name);
                localStorage.setItem("email",response?.data?.email);
                localStorage.setItem("_id",response?.data?._id);
                localStorage.setItem("token",JSON.stringify(response?.data?.token));
                localStorage.setItem("isLoggedIn",true);

                toast.success("User login successful");
                navigate("/home");
            }
        }catch(err){
            console.log(err);
            setError(err?.response?.data?.message|| "something went wrong");
        }
    };

    const onKeyDown = (e) => {
        const code  = e.keyCode?e.keyCode:e.which;
        if(code == 13){
            e.preventDefault();
            handleOnLogin();
        }
    };

    return(
        <>
        {/* <Container>
            <div >
                <div >
                    <h1 >Login</h1>
                    <p >Please fill in this form to login to your account</p>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" value={userData.email} id="email" onChange={handleUserInfoChange} onKeyDown={onKeyDown}/>

                    <div style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                        <span>
                            <label htmlFor="psw-repeat">
                                <b>Password</b>
                            </label>
                        </span>
                    </div>

                    <input type="password"
                            placeholder="Enter Password"
                            name="password"
                            id="psw-repeat"
                            value={userData.password}
                            onChange={handleUserInfoChange}
                            onKeyDown={onKeyDown}/>
                            {error && error === "Enter a valid password"?(
                                <div style={{color:"red",fontSize:"14px"}}>
                                    <p>Password must be :</p>
                                    <li>at least 8 character long</li>
                                    <li>at least 1 symbol</li>
                                    <li>at least 1 lower case</li>
                                    <li>at least 1 upper case</li>
                                    </div>
                            ):null}

                            <button type="submit" className="registerbtn" onClick={handleOnLogin}>
                                Login
                            </button>

                            <div className="">
                                <p>
                                    Do not have an account?
                                    <Link to="/signup" className="button-link">Register</Link>
                                    .
                                </p>
                                {error?(
                                    <h4 style={{color:"red", marginTop:"20px"}}>{error}</h4>
                                ):null}
                            </div>
                </div>
            </div>
            </Container> */}


            <MDBContainer className="my-5 gradient-form">
                <MDBRow>
                    <MDBCol col='6' className="mb-5">
                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{width: '185px'}} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">We are Soil Sage</h4>
                        </div>

                        <p>Please login to your account</p>

                        <MDBInput wrapperClass='mb-4' label='Email address' type='email' placeholder="Enter Email" name="email" value={userData.email} id="email" onChange={handleUserInfoChange} onKeyDown={onKeyDown}/>


            <MDBInput wrapperClass='mb-4' label='Password'  type='password'  placeholder="Enter Password"
                            name="password"
                            id="psw-repeat"
                            value={userData.password}
                            onChange={handleUserInfoChange}
                            onKeyDown={onKeyDown}/>
                            {error && error === "Enter a valid password"?(
                                <div style={{color:"red",fontSize:"14px"}}>
                                    <p>Password must be :</p>
                                    <li>at least 8 character long</li>
                                    <li>at least 1 symbol</li>
                                    <li>at least 1 lower case</li>
                                    <li>at least 1 upper case</li>
                                    </div>
                            ):null}

<div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" type="submit"  onClick={handleOnLogin}>Sign in</MDBBtn>
            </div>


            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?<Link to="/signup" className="button-link">Register</Link></p>
              {error?(
                                    <h4 style={{color:"red", marginTop:"20px"}}>{error}</h4>
                                ):null}
              
            </div>
            </MDBCol>



                    <MDBCol col='6' className="ripe-malinka-gradient mb-5">
          <div className="d-flex flex-column justify-content-center h-100 mb-4 gradiant" >

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">


Welcome to Soil Sage, your one-stop destination for personalized fertilizer recommendations! We understand that the key to a thriving garden is the right balance of nutrients, and we're here to simplify the process for you.<br></br><br></br>

At Soil Sage, we offer a user-friendly platform that analyzes your specific soil conditions, plant types, and gardening goals to provide tailor-made fertilizer suggestions. Whether you're a seasoned gardener or just starting, our intelligent recommendation system ensures that your plants get the nutrients they need for healthy growth and vibrant blooms.<br></br><br></br>

Explore our comprehensive database of fertilizers, each handpicked for its effectiveness and suitability for various plant species. With our easy-to-use interface, you can input your garden details and receive precise suggestions that cater to the unique needs of your plants.<br></br><br></br>

– Fertilizing Your Garden's Success!


              </p>
            </div>

          </div>

        </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default Login;