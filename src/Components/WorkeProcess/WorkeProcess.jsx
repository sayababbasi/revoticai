import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Discovery & Research",
    info: "We begin by understanding your business needs, current workflow, and goals to align AI solutions effectively.",
    list: [
      "Analyze existing systems & pain points",
      "Identify opportunities for automation or AI",
      "Define use-case & success metrics",
    ],
  },
  {
    id: 2,
    title: "Solution Architecture",
    info: "Our AI experts create a tailored strategy combining models, data pipelines, and user experience flow.",
    list: [
      "Design data flow and processing pipeline",
      "Select appropriate AI/ML models",
      "Design user experience around automation",
    ],
  },
  {
    id: 3,
    title: "Development & Deployment",
    info: "We build, train, and deploy your AI solution with real-time monitoring and continuous improvement support.",
    list: [
      "Model training and API integration",
      "Deploy to scalable cloud infrastructure",
      "Monitor results and optimize iteratively",
    ],
  },
];

const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Transforming Ideas into Intelligent AI Solutions"
          sortTitle="Our Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
