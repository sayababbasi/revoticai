import React, { useEffect, useState } from "react";

import sectionStar from "../../assets/img/about/section-star.png";
import Experience from "./Experience";
import Services from "./Services";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

import AOS from "aos";
import "aos/dist/aos.css";

const tabList = [
  {
    id: 1,
    name: "About",
    value: "about",
  },
  {
    id: 2,
    name: "Projects",
    value: "experience",
  },
  {
    id: 3,
    name: "Services", 
    value: "services", 
  },
  // {
  //   id: 3,
  //   name: "Education",
  //   value: "education",
  // },
  {
    id: 4,
    name: "Tech Stack",
    value: "skills",
  },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState("about");

  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className="about__section pt-120 pb-120" id="about">
        <div className="container">
          <div className="personal__head text-center">
            <img
              src={sectionStar}
              className="mb-30"
              alt="star"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <p className="descrp" data-aos="fade-up" data-aos-duration="1500">
              At Revoticai, we don’t just write code — we engineer intelligent, scalable, and future-ready solutions using AI, ML, and modern web technologies.
              Whether you're a startup or an enterprise, we bring your vision to life with precision, speed, and innovation.
              Your next breakthrough starts here. Let’s build it together.
            </p>
          </div>
          <div className="singletab">
            <ul className="tablinks">
              {tabList.map(({ id, name, value }) => (
                <li
                  key={id}
                  className={`nav-links ${isTabActive === value ? "active" : ""} `}
                >
                  <button onClick={() => handleTabClick(value)} className="tablink">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tabcontents">
              <AboutMe isTabActive={isTabActive} />
              <Experience isTabActive={isTabActive} />
              <Services isTabActive={isTabActive} />

              {/* <Education isTabActive={isTabActive} /> */}
              <Skills isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
    </>
  );
};

export default About;
