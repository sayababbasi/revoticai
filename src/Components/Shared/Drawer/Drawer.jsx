import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img style={{ width: "100px", height: "auto" }} src={logo} alt="img" />
        </Link>
        <span>Revolutionizing Tomorrow with Intelligent Solutions</span>
        <p>

          At <b>Revoticai.com</b>, we turn ideas into impactful digital products. From concept to deployment, we build scalable and intelligent solutions that empower businesses and creators to achieve more with innovation and technology.


        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> address </span>
              <span className="textp"> Spring Valley, Banigala, Islamabad, Pakistan </span>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> email </span>
              <Link style={{textTransform:"none"}} className="textp"> contact@revoticai.com </Link>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> call now </span>
              <Link className="textp"> +92 316 0513841 </Link>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            <ul className="social d-flex gap-3 flex-wrap">
              {socialIcons.map(({ icon, id, url }) => (
                <li key={id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i>{icon}</i>
                  </a>
                </li>
              ))}
            </ul>

            {/* {socialIcons.map(({ icon, id }) => (
              <li key={id}>
                <Link>
                  <a href={url}></a>
                  
                  <i>{icon}</i>
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
        <Link
          to={""}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Let's Talk </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
