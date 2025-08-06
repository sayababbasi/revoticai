import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "Facebook",
    icon: <ArrowRight />,
    url: "https://facebook.com/revoticai",
  },
  {
    id: 2,
    platfrom: "Instagram",
    icon: <ArrowRight />,
    url: "https://instagram.com/revoticai",
  },
  {
    id: 3,
    platfrom: "Dribbble",
    icon: <ArrowRight />,
    url: "https://dribbble.com/revoticai",
  },
  {
    id: 4,
    platfrom: "Webflow",
    icon: <ArrowRight />,
    url: "https://webflow.com/@revoticai",
  },
];

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I’m Sayab Gulfaraz, Founder of RevoticAI. Crafting intelligent AI-driven solutions for the future.
                </p>
                <a href="mailto:contact@revoticai.com">contact@revoticai.com</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platfrom, url }) => (
                    <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="social__footer">
                        {platfrom}
                        <i>{icon}</i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2025{" "}
              <Link to={"/"} className="base">
                RevoticAI.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="#0"> Terms & Condition </a>
              </li>
              <li>
                <a href="#0"> Privacy Policy </a>
              </li>
              <li>
                <Link to="/join-us">Job/Internship</Link>
              </li>
              <li>
                <a href="#0"> Certificate Verification </a>
              </li>
            </ul>
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
