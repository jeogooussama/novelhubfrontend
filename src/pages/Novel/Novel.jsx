import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import "./novel.css";
import useFetchN from "../../hooks/useFetchN";
import useFetchC from "../../hooks/useFeachC";

function Novel() {
  const { novelId } = useParams();
  const {tags, data } = useFetchN(`https://novelhub.adaptable.app/novel/${novelId}`);
  const { chapter } = useFetchC(
    `https://novelhub.adaptable.app/chapter/${novelId}`
  );
  const show = () => {
    var more = document.getElementById("more");
    var story = document.getElementById("story");
    more.innerHTML = "less";
    story.style.display = "flex";
  };
  const hide = () => {
    var story = document.getElementById("story");
    var more = document.getElementById("more");
    more.innerHTML = "more";
    story.style.display = "none";
  };
  return (
    <div className="novels">
      <Navbar />
      <Header />
      <div className="novel">
        <div className="novelContainer">
          {
            <div className="NCItems">
              <div className="novelDesc">
                <div className="title">
              <span>{data.title}</span>  :العنوان 
                </div>
                <div className="author">
               <span>{data.author}</span>   :الكاتب
                </div>
                <div className="translator">
                  {" "}
                <span>{data.translator}</span>{" "} :المترجم
                </div>
                
                <div className="rating">التقييم:{data.rating}</div>
                <div className="story">
                  {" "}
              
                  <span id="story" onClick={hide}>
                    {data.desc}{" "}
                  </span>{" "}
                  <span onClick={show} id="more">   
                    more
                  </span>
                  :القصة
                </div>
                <div className="tags">
                :التصنيف <span className="tag-item"> 
                <span className="Stag">
                {tags}
                </span>
                </span>
                </div>
              </div>
            </div>
          }
          <div className="image-airia">
            {" "}
            <img srcSet={data.image} width="170px" alt="" className="NImg" />
          </div>
        </div>
      </div>
      <div className="chapter">
        <div className="chapterContainer">
          <h3>الفصول</h3>
          {chapter &&
            chapter.map((chapter, index) => (
              <ul key={index}>
                <li>
                  {" "}
                  <a href={`/novel/${data._id}/chapter/${chapter._id}`}>
                    {" "}
                    {chapter.numberChapter}{" "}
                  </a>{" "}
                  {chapter.title}
                </li>
              </ul>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Novel;
