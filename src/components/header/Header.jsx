import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFeachF";
import { useEffect } from "react";
const Header = () => {
  const { data } = useFetch("https://novelhub.adaptable.app/novel?limit=5"); // test aera start
  const [searchResult, setSreachResilt] = useState([]);
  const [title, setTitle] = useState("");
  // test aera end
  useEffect(() => {
    const resutl = data.filter((novel) =>
      novel.title.toLowerCase().includes(title)
    );
    if (!title) {
      return;
    } else {
      setSreachResilt(resutl);
    }
  }, [data, title]);
  return (
    <div className="Header">
      <div className="HeaderItems">
        <div className="HeaderListItems">
          {/* HOME */}
          <div className="HeaderListItem">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </Link>
          </div>
          {/* NOVALS */}
          <div className="HeaderListItem">
            <Link to="/novels">
              <FontAwesomeIcon icon={faBook} />
              <span>Novels</span>
            </Link>
          </div>
          {/* CONTUCT US */}
          <div className="HeaderListItem">
            <Link to={"/contact"}>
              <FontAwesomeIcon icon={faMessage} />
              <span>Contact us</span>
            </Link>
            {/*  */}
          </div>
        </div>
        <div className="searchAndResultNovels">
          <div className="HeaderSearch">
            <input
              type="text"
              className="searchBox"
              placeholder="Search by name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FontAwesomeIcon className="searchicon" icon={faSearch} />
          </div>
          {title
            ? searchResult.map((novel, index) => (
              <div className="boxSearch"key={index}>
                <div className="resultSearch" >
                  <div className="image">
                    <img width={"50px"} src={novel.image} alt="" />
                  </div>
                  <Link to={`/novel/${novel._id}`}>
                    <div className="sreachTitle">{novel.title}</div>
                  </Link>
                </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
