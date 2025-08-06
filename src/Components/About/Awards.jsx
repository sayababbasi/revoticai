import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Helper to calculate the dynamic award year based on today's date
const getDynamicYear = (offsetDays) => {
  const baseDate = new Date("2025-08-01"); // your recent date
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - baseDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const step = Math.floor(diffDays / 25); // change every 10 days
  return 2025 - step; // go backward if needed or adjust logic as needed
};

const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [awardList, setAwardList] = useState([
    {
      id: 1,
      awardName: "AI Excellence Award",
      contest: "Emerging Tech Summit",
      year: getDynamicYear(0),
    },
    {
      id: 2,
      awardName: "Innovation in Automation",
      contest: "Global AI Conference",
      year: getDynamicYear(10),
    },
    {
      id: 3,
      awardName: "Best Predictive Model",
      contest: "Future Intelligence Expo",
      year: getDynamicYear(20),
    },
    {
      id: 4,
      awardName: "Top AI Startup",
      contest: "Tech Disrupt Awards",
      year: getDynamicYear(30),
    },
  ]);

  return (
    <div className="awoard__section">
      <div className="container">
        <div
          className="award__wraper table-responsive"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <table className="table w-100">
            <tbody>
              <tr>
                <td>
                  <span className="table__title">Our Achievements</span>
                </td>
                <td className="cusnoe"></td>
                <td className="text-end">
                  <a
                    href="#0"
                    className="d-flex table__view justify-content-end align-items-center base gap-2"
                  >
                    <span>View Our Work</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </td>
              </tr>
              {awardList.map(({ contest, id, year, awardName }) => (
                <tr key={id}>
                  <td>{awardName}</td>
                  <td>{contest}</td>
                  <td className="text-end">{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Awards;
