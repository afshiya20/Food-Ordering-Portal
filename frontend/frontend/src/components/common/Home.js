import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import path1 from './img1.jpg'
import './Home.css'

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  localStorage.setItem("useremail","");

  useEffect(() => {
    setName(" ");
  }, []);

  return(
  <div>
   <Navbar />
  <div className="container">
      <img src={path1} className='image' ></img>
  </div>
   
  </div>)
};

export default Home;