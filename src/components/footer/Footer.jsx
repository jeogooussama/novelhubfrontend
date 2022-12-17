
import React, {} from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerContactUs">
            <img
              width="30px"
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt=""
            />
            <img
              width="30px"
              src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png"
              alt=""
            />

            <img
              width="30px"
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt=""
            />  
            <img
              width="30px"
              src="https://cdn-icons-png.flaticon.com/512/2504/2504896.png"
              alt=""
            />
          </div>
          <div className="copyright">
           {<h3>@all the copyright saved from oussama</h3>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
