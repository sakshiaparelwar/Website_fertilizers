import {  Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { AboutUs } from './components/AboutUs';
import  FertilizerRecommendationApp  from './components/FertilizerRecommendationApp';
import  Login  from './components/Login';
import Signup  from './components/Signup';
import { Home } from './components/Home';
import Footer from './components/Footer';
import { News } from './components/News';
import { ToastContainer } from 'react-bootstrap';
import { UserDashboard } from './components/UserDashboard';
import { useContext, useEffect } from 'react';
import { ApplicationContext } from './context/context';
import {jwtDecode} from "jwt-decode";



function App() {
  const {setCurrentUser} = useContext(ApplicationContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const _id = localStorage.getItem("_id"); 
  const navigate = useNavigate();


  const handleLogout = () => {
    setCurrentUser({
      name: null,
      email: null,
      token: null,
      _id: null,
      isLoggedIn: false,
    });
    localStorage.setItem("name","");
    localStorage.setItem("email", "");
    localStorage.setItem("_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", false);
    navigate('/login')
  }

  useEffect(()=>{
    try{
    if (!token) {
      handleLogout();
      return;
    } else {
      let decode = jwtDecode(token);
      if (decode.exp * 1000 < Date.now()) {
        handleLogout();
        return;
      }
    
    }

    if (isLoggedIn != "true") {
      handleLogout();
      return;
    }

    setCurrentUser({
      name: name,
      email: email,
      token: token,
      _id: _id,
      isLoggedIn: true,
    });
  } catch (err) {
    console.log("error", err);
  }
}, []);


  return (
    <div>
      <ToastContainer />
    
      <Routes>
        <Route path="/" element={<NavigationBar/>}>
        <Route path="/Home" element={<Home/>}></Route>
        <Route index element={<Home/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path="/Fertilizer-recommendation" element={<FertilizerRecommendationApp/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path='/UserdashBoard' element={<UserDashboard/>}></Route>
        </Route>
      </Routes>
    <br></br>

    <Footer></Footer>
    </div>
  );
}

export default App;

