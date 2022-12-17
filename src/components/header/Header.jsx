import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderItems">
        <div className="HeaderListItems">
          {/* HOME */}
          <div className="HeaderListItem">
            <a href="/">
            <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </a>
          </div>
          {/* NOVALS */}
          <div className="HeaderListItem">
            <a href="/novels">
            <FontAwesomeIcon icon={faBook} />
              <span>Novels</span>
            </a>
          </div>
          {/* CONTUCT US */}
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faMessage} />
            <span>Contact us</span>
            {/*  */}
          </div>
        </div>
        <div className="HeaderSearch">
          <input type="text" className="searchBox" placeholder="" />
          <FontAwesomeIcon className="searchicon" icon={faSearch} />
        </div>
      </div>
    </div>
  );
};

export default Header;
