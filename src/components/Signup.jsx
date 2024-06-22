import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../utils/authAction";
import { ApplicationContext } from "../context/context";
import { toast } from "react-toastify";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBSelect
}
from 'mdb-react-ui-kit';

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { currentUser, setCurrentUser } = useContext(ApplicationContext);
  console.log("current user", currentUser);

  const handleOnSignUp = async () => {
    try {
      setError("");
      const { name, email, password } = userData;
      if (!name) {
        setError("Enter a valid name");
        return;
      }
      if (!email || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        setError("Enter a valid email");
        return;
      }
      if (
        !password ||
        !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
      ) {
        setError("Enter a valid password");
        return;
      }

      let response = await signUp(userData);
      console.log("repsonse", response);
      if (response.status) {
        console.log('came here11',currentUser)
        setCurrentUser({
          name: response?.data?.name,
          email: response?.data?.email,
          token: response?.data?.token,
          _id: response?.data?._id,
          isLoggedIn: true,
        });

        console.log('came here 2',response.data)

        localStorage.setItem("name", response?.data?.name);
        localStorage.setItem("email", response?.data?.email);
        localStorage.setItem("_id", response?.data?._id);
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        localStorage.setItem("isLoggedIn", true);


        toast.success("User registration successful");
        navigate("/Home");
      } else {
        toast.error(
          "Something went wrong while registering the user.Please try again later."
        );
      }

      console.log('came hhere 44')
    } catch (err) {
      console.log("error", err);
      toast.error(err?.response?.data?.message || "Something went wrong");
      return;
    }
  };

  console.log('current User0',currentUser)

  const handleUserInfoChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onKeyDown = (e) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      e.preventDefault();
      handleOnSignUp();
    }
  };

  return (
    <>
      {/* <div className="signUpDiv">
        <div className="container-signup">
          <h1 className="signup-heading">Register</h1>
          <p className="signup-heading">
            Please fill in this form to create an account.
          </p>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            onChange={handleUserInfoChange}
            onKeyDown={onKeyDown}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            onChange={handleUserInfoChange}
            onKeyDown={onKeyDown}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            onChange={handleUserInfoChange}
            onKeyDown={onKeyDown}
          />
          {error && error === "Enter a valid password" ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              <p>Password must be : </p>
              <li>at least 8 character long</li>
              <li>at least 1 symbol</li>
              <li>at least 1 lower case</li>
              <li>at least 1 upper case</li>
            </div>
          ) : null}

          <button
            type="submit"
            className="registerbtn"
            onClick={handleOnSignUp}
          >
            Register
          </button>

          <div>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="button-link">
                Sign in
              </Link>
              .
            </p>
            {error ? (
              <h4 style={{ color: "red", marginTop: "20px" }}>{error}</h4>
            ) : null}
          </div>
        </div>
      </div> */}



      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center'>
          <MDBCol lg='8'>
          <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/>

              <MDBCardBody className='px-5'>
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
              
              <MDBInput wrapperClass='mb-4' label='Name' type='text' name="name"
            id="name"
            onChange={handleUserInfoChange}
            onKeyDown={onKeyDown}/>

<MDBInput wrapperClass='mb-4' label='Email' type="email"
            
            name="email"
            id="email"
            onChange={handleUserInfoChange}
            onKeyDown={onKeyDown} />

<MDBInput wrapperClass='mb-4' label='Password' type="password"
            
            name="password"
            id="psw"
            onChange={handleUserInfoChange}
            onKeyDown={onKeyDown}/>
            {error && error === "Enter a valid password" ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              <p>Password must be : </p>
              <li>at least 8 character long</li>
              <li>at least 1 symbol</li>
              <li>at least 1 lower case</li>
              <li>at least 1 upper case</li>
            </div>
          ) : null}


<MDBBtn color='success' className='mb-4' size='lg'  type="submit" onClick={handleOnSignUp}>Register</MDBBtn>
<p>
              Already have an account?{" "}
              <Link to="/login" className="button-link">
                Sign in
              </Link>
              .
            </p>

              </MDBCardBody>
          </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Signup;
