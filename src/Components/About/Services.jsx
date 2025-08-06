import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const Services = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "services" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="Our Services" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Our Services</h2>
              <p>
                At <strong>Revoticai</strong>, we deliver cutting-edge AI and
                digital solutions tailored to your business goals. Whether
                you're a startup or enterprise, we help you scale smarter with
                our full-stack development and intelligent systems.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">AI & ML Solutions</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Custom AI & ML Models</h4>
                    <p className="fz-18 pra d-block">
                      Predictive systems, automation, and smart insights built
                      just for you.
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Web & App Development</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Modern Digital Products</h4>
                    <p className="fz-18 pra d-block">
                      Responsive websites, progressive web apps, and mobile apps
                      that scale.
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Automation & SaaS</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">AI SaaS & Custom Tools</h4>
                    <p className="fz-18 pra d-block">
                      Streamline workflows with custom-built, cloud-based
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
