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
  const { data } = useFetchN(`https://novelhub.adaptable.app/novel/${novelId}`);
  const { chapter } = useFetchC(
    `https://novelhub.adaptable.app/chapter/${novelId}`
  );
  const tags = [data.tags].join(" ");
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
                 العنوان: <span>{data.title}</span>
                </div>
                <div className="translator">
                  {" "}
                  المترجم:<span></span>{" "}
                </div>
                <div className="rating">التقييم:{data.rating}</div>
                <div className="story">
                  {" "}
                  القصة: <span>{data.desc}</span>{" "}
                </div>
                <div className="tags">
                  <span className="tag-item">التصنيف: {tags}</span>
                </div>
              </div>
            </div>
          }
<div>                  <img srcSet={data.image} width="170px" alt="" className="NImg" />
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
