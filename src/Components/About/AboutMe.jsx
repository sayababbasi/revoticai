import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  Youtube,
} from "react-bootstrap-icons";

import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";
import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "info@revoticai.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+(92) 316 0513841",
  },
  {
    id: 3,
    system: "Address",
    contact: "Spring Valley, Banigala, Islamabad",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      {
        icon: <Facebook />,
        url: "https://facebook.com/revoticai",
      },
      {
        icon: <Twitter />,
        url: "https://twitter.com/revoticai",
      },
      {
        icon: <Linkedin />,
        url: "https://linkedin.com/company/revoticai",
      },
      {
        icon: <Youtube />,
        url: "https://youtube.com/revoticai",
      },
      {
        icon: <Instagram />,
        url: "https://instagram.com/revoticai",
      },
    ],
  },
];

const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                About us
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                At Revoticai, we believe in transforming ideas into intelligent
                digital products. From AI-powered solutions to seamless web and
                mobile experiences — we turn complexity into clarity with
                innovation that matters.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => (
                    <div
                      key={id}
                      className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                      data-aos="zoom-in"
                    >
                      <div className="abox">
                        <div className="about__contbox__item">
                          <span className="ptext fz-18 mb-20 d-block">
                            {system}
                          </span>
                          {contact && <p>{contact}</p>}
                          {socalContact && (
                            <ul className="d-flex align-items-center gap-2 gap-xl-4">
                              {socalContact.map(({ icon, url }, index) => (
                                <li key={index}>
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {icon}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
