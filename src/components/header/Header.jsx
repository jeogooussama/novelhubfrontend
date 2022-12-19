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
const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderItems">
        <div className="HeaderListItems">
          {/* HOME */}
          <div className="HeaderListItem">
            <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
              <span>الرئيسية</span>
            </Link>
          </div>
          {/* NOVALS */}
          <div className="HeaderListItem">
            <Link to="/novels">
            <FontAwesomeIcon icon={faBook} />
              <span>الروايات</span>
            </Link>
          </div>
          {/* CONTUCT US */}
          <div className="HeaderListItem">
            <FontAwesomeIcon icon={faMessage} />
            <span>اتصل بنا</span>
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
