import {} from "react-router-dom";
import { useHistory } from "react-router-use-history";
import { useParams } from "react-router-dom";
import extractUrls from "extract-urls";
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
  const { singleChapter, content } = useFetchSc(
    `https://novelhub.adaptable.app/chapter/${novelId}/${chapterId}` //single chpater in novel
  );
  // done
  //-----------------------------------------------
  const history = useHistory();
  const handlechange = (e) => {
    history.push(`/novel/${novelId}/chapter/${e.target.value}`);
  };

  const setNext = () => {
    const Cid = chapter.map((id) => id._id);

    for (let i = 0; i <= chapter.length; i++) {
      try {
        if (!Cid[i + 1])
          return (document.getElementsByClassName("rightB")[0].style.display =
            "disable");
        if (Cid[i] === chapterId) {
          window.location = `/novel/${novelId}/chapter/${Cid[i + 1]}`;
        }
      } catch (err) {}
    }
  };

  const setBack = () => {
    const Cid = chapter.map((id) => id._id);
    for (let i = 0; i <= chapter.length; i++) {
      try {
        if (i <= 0)
          document.getElementsByClassName("leftB").style.display = "disable";
        if (Cid[i] === chapterId) {
          window.location = `/novel/${novelId}/chapter/${Cid[i - 1]}`;
        }
      } catch (err) {
        if (i <= 0)
          document.getElementsByClassName("leftB")[0].style.display = "disable";
      }
    }
  };
  // img filter
  function detectUrls(string) {
    // Use a regular expression to find URLs in the string

    let urls = extractUrls(string, true);
    // If there are no URLs, return the original string
    if (!urls) return string;

    // Otherwise, replace each URL with an img tag
    let newString = string;
    urls.forEach((url) => {
      newString = newString.replace(
        url,
        `<img width="150px" src="${url}" alt="URL image" />`
      );
    });
    return newString;
  }
  const modifiedString = detectUrls(content);


  //------------------------------------------------
  return (
    <div className="containerText">
      <Navbar />
      <div className="readerPage">
        <div className="navbarChapters">
          <div className="dropDownCh">
            <select className="dropdownItem " onChange={handlechange}>
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
          {singleChapter &&
            singleChapter.map((chaptertitle, index) => (
              <div className="titleNovel" key={index}>
                {" "}
                <h3>{chaptertitle.title}</h3>
              </div>
            ))}

          <div className="navItme">
            <div className="buttons">
              <button className="leftB" onClick={setBack}>
                سابق
              </button>
            </div>

            {singleChapter.map((number) => (
              <div className="nuberChapter" key={number._id}>
                {" "}
                {number.numberChapter}
              </div>
            ))}

            <div className="buttons">
              <button className="rightB" onClick={setNext}>
                التالي
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="readAria">
     
        <div className="textContenet" dangerouslySetInnerHTML={{__html: modifiedString}} />

     
      </div>

      <Footer />
    </div>
  );
}

export default Read;
