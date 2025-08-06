import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

// RevoticAI – Service list updated
const serviceList = [
  {
    id: "01",
    heading: "AI-Powered Automation",
    subHeading: "Process Optimization",
    para: "Streamline your business workflows with intelligent automation solutions designed to reduce cost and improve efficiency.",
  },
  {
    id: "02",
    heading: "Custom AI Solutions",
    subHeading: "Model Development",
    para: "From data preprocessing to model deployment, we design end-to-end AI pipelines tailored for your unique business challenges.",
  },
  {
    id: "03",
    heading: "Predictive Analytics",
    subHeading: "Forecasting",
    para: "Use machine learning to predict trends, behaviors, and outcomes giving your business a competitive data-driven edge.",
  },
  {
    id: "04",
    heading: "Intelligent Chatbots",
    subHeading: "Conversational AI",
    para: "Enhance customer engagement with AI-powered chatbots that understand, respond, and learn from interactions in real time.",
  },
  {
    id: "05",
    heading: "Data Annotation & Insights",
    subHeading: "Data Intelligence",
    para: "Get scalable data labeling, annotation, and visualization support to prepare your datasets for accurate AI training.",
  },
];

const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"} pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="AI Solutions Tailored for Business Growth"
            sortTitle="What We Offer"
          />
        )}

        <div className="service__uniquewrap">
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
