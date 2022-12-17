import React from "react";
import Featurd from "../../components/featurd/Featurd";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <Header />
      <Featurd />
      <Footer />
    </div>
  );
};

export default Home;
