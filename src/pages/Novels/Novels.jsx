import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFeachF";
import { Link } from "react-router-dom";
import "./novels.css";

function Novels() {
  const { data, loading } = useFetch("https://novelhub.adaptable.app//novel");
  useEffect(() => {
    console.log(data);
  },[data]);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="novals">
        <div className="novalsContainer">
          <div className="novelsCitmes">
       {  loading?"loading": 
         data.map((data,index)=>(
          <Link to={`/novel/${data._id}`} >
                <div className="novalBox" key={index}>
                <div className="Novelinfo">
                    <span>{data.title}</span>
                  </div>
                  <img
                    srcSet={data.image}
                    alt=""
                    className="img"
                  />
                
                </div>
                 </Link>
                 ))}
          </div>
          {/*  */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Novels;
