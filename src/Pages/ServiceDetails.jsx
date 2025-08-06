import React from "react";
import { PlayFill, ArrowRight } from "react-bootstrap-icons";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Accordion from "../Components/Accordion/Accordion";

import serDv1 from "../assets/img/project/ser-dv1.png";
import serDv2 from "../assets/img/project/ser-dv2.png";
import detialcontact from "../assets/img/contact/ser-detialcontact.png";
import { ScrollRestoration } from "react-router-dom";

const accordionList = [
  {
    id: "cmnid4",
    heading: "What is the process for developing AI solutions?",
    para: `At RevoticAI, our AI development starts with understanding your business needs. We then design intelligent systems using cutting-edge models, test for accuracy, and deploy them seamlessly into your existing infrastructure.`,
  },
  {
    id: "cmnid5",
    heading: "How does RevoticAI create a strong brand identity?",
    para: `We combine design, storytelling, and data-driven strategies to shape your digital identity. From logos to social presence, we ensure your brand speaks clearly and stands out in the AI and tech space.`,
  },
  {
    id: "cmnid6",
    heading: "Do you build custom digital products?",
    para: `Yes. Whether it’s an AI-powered platform, SaaS application, or intelligent chatbot, we build tailor-made digital solutions optimized for your users and business goals.`,
  },
];

const ServiceDetails = () => {
  return (
    <>
      <PageHeader heading={"AI Solutions & Branding"} page={"Our Services"} />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="ser__left__details">
                <div className="thumb">
                  <img src={serDv1} alt="img" />
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    About Our AI & Branding Services
                  </h3>
                  <p className="fz-16 pra ttext__one">
                    At RevoticAI, we help startups and businesses harness the power of Artificial Intelligence to elevate their digital presence. Whether you're just starting out or scaling up, our custom AI solutions and modern branding strategies bring innovation and clarity to your vision.
                  </p>
                  <p className="fz-16 pra">
                    Our mission is to bridge the gap between technology and user experience. We empower you with scalable tools—from smart automation to AI-integrated systems—and wrap it all in a sleek, modern brand that speaks directly to your audience.
                  </p>
                </div>

                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    Our Specialization & Workflow
                  </h3>
                  <p className="fz-16 pra">
                    We specialize in full-stack development, intelligent systems design, and brand strategy. Our workflow is agile and collaborative—ideation, prototyping, AI/ML integration, UI/UX design, testing, and deployment. Every step is backed by data, creativity, and a passion for results.
                  </p>
                </div>

                <div className="paythumb position-relative">
                  <img src={serDv2} alt="img" />
                  <a
                    href="https://www.youtube.com/embed/aAvDI1qae-U"
                    className="video__80 video-btn"
                  >
                    <i>
                      <PlayFill />
                    </i>
                  </a>
                </div>

                <div className="ser__components">
                  <h2 className="whites mb-5">Frequently Asked Questions</h2>
                  <div className="accordion" id="accordionExample">
                    {accordionList.map(({ id, heading, para }) => (
                      <Accordion key={id} id={id} heading={heading} para={para} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service__right__wrap">
                <div className="service__rightbox mb-30">
                  <h3>Our Services</h3>
                  <a href="#0" className="link__box mb-15">
                    AI-Powered Product Development
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Brand Identity & Strategy
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    UI/UX & Web Design
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Intelligent Chatbots
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Social & Digital Marketing
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box">
                    Custom Web & App Development
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </div>

                <div className="service__rightbox">
                  <div className="thumb">
                    <img src={detialcontact} alt="img" />
                    <a href="mailto:management.revoticai@gmail.com" className="cmn--btn">
                      <span>Contact Us</span>
                      <span>
                        <i>
                          <ArrowRight />
                        </i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default ServiceDetails;
