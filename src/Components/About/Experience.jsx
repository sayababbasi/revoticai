// import React from "react";
// import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

// const Experience = ({ isTabActive }) => {
//   return (
//     <div className={`tabitem ${isTabActive === "experience" ? "active" : ""} `}>
//       <div className="about__v1wrap">
//         <div className="row g-4 align-items-lg-start align-items-center">
//           <div className="col-lg-5">
//             <div className="about__onethumb">
//               <img src={personalInfothumb} alt="img" />
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="about__onecontent">
//               <h2>My Experience</h2>
//               <p>
//                 At Revoticai, we don’t just build applications — we build your dreams.
//                 Our experienced team collaborates effectively, meets deadlines, and ensures a smooth, client-focused development process.
//               </p>
//               <div className="exprience__box mt-30">
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">In July 2025</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">AI SaaS</h4>
//                     <p className="fz-18 pra d-block">Summarizes YouTube videos, research articles, PDFs & Word files, 
//                       and generates accurate transcripts using NLP.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">In June 2025</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">Fullstack Web App</h4>
//                     <p className="fz-18 pra d-block">A customize Website for startup Frontend with <b>Rect.js</b> and Backend using <b>FastAPI</b></p>
//                   </div>
//                 </div>
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">In June 2025</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">mart Resume Ranker (ML + NLP)</h4>
//                     <p className="fz-18 pra d-block">Automatically matches resumes to job descriptions using AI-powered keyword analysis and ranking logic.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const Experience = ({ isTabActive }) => {
  const projects = [
    {
      title: "AI SaaS",
      description:
        "Summarizes YouTube videos, research articles, PDFs & Word files, and generates accurate transcripts using NLP.",
    },
    {
      title: "Fullstack Web App",
      description:
        "A custom-built web app for startups using React.js frontend and FastAPI backend.",
    },
    {
      title: "Smart Resume Ranker (ML + NLP)",
      description:
        "Matches resumes to job descriptions using keyword analysis and AI ranking logic.",
    },
    {
      title: "ChatPDF Assistant",
      description:
        "AI chatbot that lets users ask questions from uploaded PDFs, Word docs or research files using RAG + LangChain.",
    },
    {
      title: "Taskify Pro",
      description:
        "A task management platform built with Next.js and MongoDB, including team collaboration and deadline tracking.",
    },
    {
      title: "Code Snippet Saver",
      description:
        "An app to save, organize and share code snippets across multiple languages with real-time preview.",
    },
    {
      title: "Prompt Generator for AI",
      description:
        "AI tool that generates effective prompts for ChatGPT, Claude, and Midjourney based on user goals.",
    },
    {
      title: "Portfolio CMS",
      description:
        "Headless CMS built using Sanity.io for managing personal or agency portfolios dynamically.",
    },
    {
      title: "Realtime Feedback Board",
      description:
        "Live feedback board using WebSocket and Firebase for product teams to collect user suggestions.",
    },
    {
      title: "AI-Powered Chat Support",
      description:
        "Custom AI chat widget integrated with websites to answer FAQs using embeddings + OpenAI API.",
    },
  ];

  // Rotation Logic: Show 3 projects, rotated every 10 days
  const daysPerProject = 10;
  const currentDate = new Date();
  const baseDate = new Date("2025-07-01"); // Rotation start date
  const daysSinceBase = Math.floor((currentDate - baseDate) / (1000 * 60 * 60 * 24));
  const startIndex = Math.floor(daysSinceBase / daysPerProject) % projects.length;

  // Rotate projects
  const rotatedProjects = [];
  for (let i = 0; i < 3; i++) {
    rotatedProjects.push(projects[(startIndex + i) % projects.length]);
  }

  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Our Recent Projects</h2>
              <p>
                At Revoticai, we don’t just build applications — we build your dreams.
                Our experienced team collaborates effectively, meets deadlines, and ensures a smooth, client-focused development process.
              </p>
              <div className="exprience__box mt-30">
                {rotatedProjects.map((project, index) => (
                  <div className="exri__item" key={index}>
                    <span className="fz-18 fw-500 base">In July 2025</span>
                    <div className="expri__cont">
                      <h4 className="mb-15 text-white">{project.title}</h4>
                      <p className="fz-18 pra d-block">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

