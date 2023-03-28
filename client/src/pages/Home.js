import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> ExoClick's kitcken </h1>
          <p> Bake your own pizza</p>
          <Link to="/menu">
            <button> START NOW </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
