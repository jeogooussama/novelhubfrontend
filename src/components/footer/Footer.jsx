import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="privecy-terms">
          <Link to="/privacy">privacy</Link>
          <Link to="/terms">terms</Link>
        </div>
        <div className="copyright">@all copyright save by jeogo</div>
      </div>
    </div>
  );
}

export default Footer;
