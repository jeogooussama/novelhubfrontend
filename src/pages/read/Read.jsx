import {
  faArrowLeft,
  faArrowRight,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, } from "react";
import {} from "react-router-dom";
import { useHistory } from 'react-router-use-history'
import { useParams ,   } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import useFetchC from "../../hooks/useFeachC";
import useFetchSc from "../../hooks/useFeachSc";

import "./read.css";
function Read() {
  const { chapterId, novelId } = useParams();
  const { chapter } = useFetchC(
    `https://novelhub.adaptable.app/chapter/${novelId}` //All chapters in novel
  );
  const { singleChapter } = useFetchSc(
    `https://novelhub.adaptable.app/chapter/${novelId}/${chapterId}` //single chpater in novel
  );
  // Remmeber create new hook for the read page <3 =>(done)
  // create a function replace id of chapter ==> RES:response ='(res.data.chapter_id)'
  //-----------------------------------------------
  /*
   
   */
  const history = useHistory()
 const handlechange = (e) => {
  history.push(`/novel/${novelId}/chapter/${e.target.value}`)
}



  const setNext = () => {
    const Cid = chapter.map((id) => id._id);

    for (let i = 0; i <= chapter.length; i++) {
      try {
        if (!Cid[i + 1])
          return (document.getElementsByClassName("rightB")[0].style.display =
            "disable");
        if (Cid[i] === chapterId) {
          console.log(Cid[i + 1]);
          window.location = `/novel/${novelId}/chapter/${Cid[i + 1]}`;
        }
      } catch (err) {}
    }
  };
  useEffect(() => {
  });

  const setBack = () => {
    const Cid = chapter.map((id) => id._id);
    for (let i = 0; i <= chapter.length; i++) {
      try {
        if (i <= 0)
          document.getElementsByClassName("leftB").style.display = "disable";
        if (Cid[i] === chapterId) {
          console.log(Cid[i - 1]);
          window.location = `/novel/${novelId}/chapter/${Cid[i - 1]}`;
        }
      } catch (err) {
        if (i <= 0)
          document.getElementsByClassName("leftB")[0].style.display = "disable";
      }
    }
  };
  //------------------------------------------------
  return (
    <div className="containerText">
      <div>
        <Navbar />
        <div className="readerPage">
          <div className="navbarChapters">
            {singleChapter &&
              singleChapter.map((chaptertitle, index) => (
                <div className="titleNovel" key={index}>
                  {" "}
                  <h3>{chaptertitle.title}</h3>
                </div>
              ))}

            <div className="navItme">
              <div className=".dropDownCh">
                <select className="dropdownItem "onChange={handlechange}>
                  {singleChapter &&
                    chapter &&
                    chapter.map((chapter) => (
                      <option
                        value={chapter._id}
                        key={chapter._id}
                        defaultValue={singleChapter.map(
                          (number) => number.numberChapter
                        )}
                      >
                        {chapter.numberChapter}
                      </option>
                    ))}
                </select>
              </div>
              <div className="buttons">
                <button className="leftB" onClick={setBack}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                {singleChapter.map((number) => (
                  <div className="nuberChapter" key={number._id}>
                    {" "}
                    {number.numberChapter}
                  </div>
                ))}
                <button className="rightB" onClick={setNext}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="lightDarkMode">
                <button className="mode">
                  <FontAwesomeIcon icon={faSun} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {singleChapter &&
          singleChapter.map((chapterText, index) => (
            <div className="readAria" key={index}>
              <div className="textContenet">{chapterText.textContianer}</div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Read;
