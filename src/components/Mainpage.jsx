import React, { useState, useEffect } from "react";
import google from "../utils/download.png";
import img1 from "../utils/random1.png";
import img2 from "../utils/img2.png";
import img3 from "../utils/random3.png";
// import img4 from "../utils/random4.png";
// import img5 from "../utils/random5.png";

const images = [img1, img2, img3];

const Mainpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contents">
      <div className="left">
        <div className="slider">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
        </div>
      </div>
      <div className="right">
        <div className="signin-text">
          <p>Sign In</p>
        </div>
        <div className="mainContent">
          <form action="submit">
            <input type="email" placeholder="Email Address" className="email" />
            <input type="password" placeholder="Password" className="pass" />
            <div className="help">
              <p>Forget Password?</p>
              <p>Help</p>
            </div>
            <button className="sign-in">Sign In</button>
            <p className="terms">
              By signing in, I agree to the <span style={{ color: "#0e72ed" }}>company's privacy statement</span> and <span style={{ color: "#0e72ed" }}>Terms of Service</span>
            </p>
            <div className="stay" style={{ marginTop: "15px", fontSize: "12px", display: "flex" }}>
              <input type="checkbox" />
              <p style={{ marginLeft: "5px" }}>Stay signed In</p>
            </div>
          </form>
          <div className="others" style={{ marginTop: "20px", paddingTop: "10px" }}>
            <hr />
            <div className="social-buttons">
        <div className="google-button">
            <img src={google} alt="Google" />
            <span>Sign in with Google</span>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
