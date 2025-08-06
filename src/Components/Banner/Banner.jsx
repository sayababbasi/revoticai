import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

// const socalIcon = [
//   {
//     id: 1,
//     icon: <Facebook />,
//   },
//   {
//     id: 2,
//     icon: <Twitter />,
//   },
//   {
//     id: 3,
//     icon: <Linkedin />,
//   },
//   {
//     id: 4,
//     icon: <Globe />,
//   },
//   {
//     id: 5,
//     icon: <Instagram />,
//   },
// ];
const socalIcon = [
  {
    id: 1,
    icon: <Facebook />,
    url: "https://facebook.com/revoticai",
  },
  {
    id: 2,
    icon: <Twitter />,
    url: "https://twitter.com/revoticai",
  },
  {
    id: 3,
    icon: <Linkedin />,
    url: "https://linkedin.com/in/revoticai",
  },
  {
    id: 4,
    icon: <Globe />,
    url: "https://revoticai.com", // Or your main website
  },
  {
    id: 5,
    icon: <Instagram />,
    url: "https://instagram.com/revoticai",
  },
];


const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Currently available for freelance
                </span>
                <span className="d-flex gap-4 align-items-center">
                  Projects worldwide
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone"> Creative Visual</span>
                <span className="d-block designers" data-text="Designer">
                  Designer
                </span>
              </h1>
              <div className="video__area">
                <img src={bnArrow} className="vid__arrow" alt="img" />
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Work Process</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${position ? "right_up_animat" : "right_up"
                }`}

            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to={""}>(+92)-316-0513841</Link>
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {/* {socalIcon.map(({ icon, id }) => {
              return (
                <li key={id}>
                  <Link to={""} >
                    <i>{icon}</i>
                  </Link>
                </li>
              );
            })} */}
            {socalIcon.map(({ icon, id, url }) => {
              return (
                <li key={id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i>{icon}</i>
                  </a>
                </li>
              );
            })}

          </ul>
        </div>
      </div>
      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          // url="https://www.youtube.com/embed/tgbNymZ7vqY"
          url={"https://www.youtube.com/embed/aAvDI1qae-U"}
        />
      )}
    </section>
  );
};

export default Banner;
