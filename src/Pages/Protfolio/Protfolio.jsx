import React, { useState } from "react";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import WorkeProcess from "../../Components/WorkeProcess/WorkeProcess";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { ScrollRestoration } from "react-router-dom";

// Updated categories to fit RevoticAI’s real-world services
const categoryList = [
  {
    id: 1,
    categoryName: "All",
    value: "all",
  },
  {
    id: 2,
    categoryName: "AI Dashboards",
    value: "ai_dashboard",
  },
  {
    id: 3,
    categoryName: "Machine Learning",
    value: "ml_model",
  },
  {
    id: 4,
    categoryName: "SaaS Platforms",
    value: "saas_platform",
  },
  {
    id: 5,
    categoryName: "UI/UX & Web",
    value: "web_design",
  },
];

const Protfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");

  // Filter projects by category
  let filterProject = [];

  for (const project of projectList) {
    if (currentCategory === "all") {
      filterProject = projectList;
      break;
    }
    if (project.category.includes(currentCategory)) {
      filterProject.push(project);
    }
  }

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHeader heading={"Our Projects & Portfolio"} page="Projects" />
      <section className="project__section pb-120">
        <div className="container">
          <div className="singletab protfolio__filter">
            <ul
              className="tablinks"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              {categoryList.map(({ id, categoryName, value }) => (
                <li
                  key={id}
                  className={`nav-links ${
                    currentCategory === value ? "active" : ""
                  } `}
                >
                  <button
                    className="tablink"
                    onClick={() => setCurrentCategory(value)}
                  >
                    {categoryName}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tabcontents project__wrapone">
              {filterProject.map(
                ({ heading, id, image, subHeading }, index) => (
                  <ProjectCard
                    key={id}
                    image={image}
                    heading={heading}
                    subHeading={subHeading}
                    openLightbox={openLightbox}
                    index={index}
                    navigate="/protfolio-details"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            setLightboxOpen={setLightboxOpen}
            currentId={currentId}
          />
        )}
      </section>

      {/* Work Process Section */}
      <WorkeProcess />

      <ScrollRestoration />
    </>
  );
};

export default Protfolio;
