// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import "./JoinUsForm.scss";

// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";


// const openings = [
//   {
//     id: 1,
//     type: "Internship",
//     title: "AI Developer Internship",
//     technology: "Artificial Intelligence",
//     deadline: "2025-09-01",
//   },
//   {
//     id: 2,
//     type: "Job",
//     title: "Full Stack Developer",
//     technology: "MERN Stack",
//     deadline: "2025-08-15",
//   },
//   {
//     id: 3,
//     type: "Internship",
//     title: "GenAI Research Intern",
//     technology: "GenAI",
//     deadline: "2025-08-25",
//   },
// ];

// const JoinUsForm = () => {
//   const [step, setStep] = useState(1);
//   const [type, setType] = useState("");
//   const [formData, setFormData] = useState({});
//   const [status, setStatus] = useState("");

//   const handleTypeSelect = (selectedType) => {
//     setType(selectedType);
//     setStep(2);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     try {
//       await emailjs.send(
//         "service_24hekgn",
//         "template_9fzvyst",
//         {
//           ...formData,
//           website_link: "https://revoticai.com",
//         },
//         "pT4SCy8mKgQbIS09Y"
//       );

//       await addDoc(collection(db, "join_requests"), {
//         ...formData,
//         type: type,
//         submitted_at: new Date().toISOString(),
//       });

//       setStatus("Success! Your application has been submitted.");
//       setFormData({});
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setStatus("Error submitting the form. Please try again later.");
//     }
//   };
//   // Scroll to top on component mount
//   // This ensures the form is always at the top when opened
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);


//   const navigate = useNavigate();
//   const [isFormVisible, setIsFormVisible] = useState(true);

//   {
//     isFormVisible && (
//       <div className="your-form-wrapper">
//         {/* your form content here */}
//       </div>
//     )
//   }


//   // Esc key support to close form
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.key === "Escape") {
//         setStep(1);
//       }
//     };

//     window.addEventListener("keydown", handleEsc);

//     // Cleanup when component unmounts
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);


//   <button className="form-close" onClick={() => navigate("/join-us")}>×</button>



//   return (
//     <div className="join-us-container">
//       {step === 1 && (
//         <>
//           <div className="openings-section">
//             <h1>Current Openings</h1>
//             <p>Explore our latest internship and job opportunities below.</p>
//             <h2>Open Positions</h2>
//             <div className="openings-container">
//               <div className="openings-grid">
//                 {openings.map((job) => (
//                   <div key={job.id} className="opening-card">
//                     <h3>{job.title}</h3>
//                     <p><strong>Type:</strong> {job.type}</p>
//                     <p><strong>Technology:</strong> {job.technology}</p>
//                     <p><strong>Deadline:</strong> {job.deadline}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="type-selector">
//             <h2>Apply Now</h2>
//             <p>Choose your desired application type:</p>
//             <div className="type-buttons">
//               <button className="apply-btn" onClick={() => handleTypeSelect("Internship")}>Apply for Internship</button>
//               <button className="apply-btn" onClick={() => handleTypeSelect("Job")}>Apply for Job</button>
//             </div>
//           </div>
//         </>
//       )}

//       {step === 2 && (
//         <div className="form-section">
//           {/* <button className="form-close" onClick={() => navigate("/join-us")}>×</button> */}
//           <button className="form-close" onClick={() => setStep(1)}>×</button>



//           <h2>{type} Application Form</h2>
//           <form onSubmit={handleSubmit} className="application-form">

//             <div className="form-row">
//               <div className="form-group">
//                 <label>First Name</label>
//                 <input type="text" name="first_name" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Last Name</label>
//                 <input type="text" name="last_name" onChange={handleChange} required />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <label>Contact</label>
//                 <input type="tel" name="contact" placeholder="Must Start with Country Code: +1" onChange={handleChange} />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Country</label>
//                 <input type="text" name="country" onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Address</label>
//                 <input type="text" name="address" onChange={handleChange} />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>University Name</label>
//                 <input type="text" name="university" onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Available Date</label>
//                 <input type="date" name="available_date" onChange={handleChange} />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Technology</label>
//                 <select name="technology" onChange={handleChange}>
//                   <option value="">Select Technology</option>
//                   <option value="AI">AI</option>
//                   <option value="ML">ML</option>
//                   <option value="GenAI">GenAI</option>
//                   <option value="Full Stack">Full Stack</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Internship Type</label>
//                 <select name="internship_type" onChange={handleChange}>
//                   <option value="">Select Type</option>
//                   <option value="Remote">Remote</option>
//                   <option value="In-Person">In-Person</option>
//                 </select>
//               </div>
//             </div>

//             <div style={{ display: "block" }} className="comment-txt form-group full-width">
//               <label>Comment</label>
//               <textarea style={{
//                 backgroundColor: "rgba(77, 76, 76, 0.5)", color: "#fff",
//                 border: "1px solid #ccc", padding: "10px", width: "100%", height: "100px"

//               }} name="comment" onChange={handleChange} />
//             </div>

//             <div className="form-group full-width ">
//               <label>Upload Resume</label>
//               <input style={{ borderRadius: "8px", padding: "10px", border: "1px solid #ccc", marginLeft: "5px" }} type="file" name="resume" onChange={handleChange} />
//             </div>

//             <button className="submit-btn" type="submit">Submit Application</button>
//             <p className="status-message">{status}</p>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JoinUsForm;


import React, { useState } from "react";
import emailjs from "emailjs-com";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./JoinUsForm.scss";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const openings = [
  {
    id: 1,
    type: "Internship",
    title: "AI Developer Internship",
    technology: "Artificial Intelligence",
    deadline: "2025-09-01",
  },
  {
    id: 2,
    type: "Job",
    title: "Full Stack Developer",
    technology: "MERN Stack",
    deadline: "2025-08-15",
  },
  {
    id: 3,
    type: "Internship",
    title: "GenAI Research Intern",
    technology: "GenAI",
    deadline: "2025-08-25",
  },
];

const JoinUsForm = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("");

  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
    setStep(2);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await emailjs.send(
        "service_24hekgn",
        "template_9fzvyst",
        {
          ...formData,
          website_link: "https://revoticai.com",
        },
        "pT4SCy8mKgQbIS09Y"
      );

      await addDoc(collection(db, "join_requests"), {
        ...formData,
        type: type,
        submitted_at: new Date().toISOString(),
      });

      setStatus("Success! Your application has been submitted.");
      setFormData({});
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error submitting the form. Please try again later.");
    }
  };
  // Scroll to top on component mount
  // This ensures the form is always at the top when opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(true);

  {
    isFormVisible && (
      <div className="your-form-wrapper">
        {/* your form content here */}
      </div>
    )
  }


  // Esc key support to close form
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setStep(1);
      }
    };

    window.addEventListener("keydown", handleEsc);

    // Cleanup when component unmounts
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);


  <button className="form-close" onClick={() => navigate("/join-us")}>×</button>



  return (
    <div className="join-us-container">
      {step === 1 && (
        <>
          <div className="openings-section">
            <h1>Current Openings</h1>
            <p>Explore our latest internship and job opportunities below.</p>
            <h2>Open Positions</h2>
            <div className="openings-container">
              <div className="openings-grid">
                {openings.map((job) => (
                  <div key={job.id} className="opening-card">
                    <h3>{job.title}</h3>
                    <p><strong>Type:</strong> {job.type}</p>
                    <p><strong>Technology:</strong> {job.technology}</p>
                    <p><strong>Deadline:</strong> {job.deadline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="type-selector">
            <h2>Apply Now</h2>
            <p>Choose your desired application type:</p>
            <div className="type-buttons">
              <button className="apply-btn" onClick={() => handleTypeSelect("Internship")}>Apply for Internship</button>
              <button className="apply-btn" onClick={() => handleTypeSelect("Job")}>Apply for Job</button>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="form-section">
          <button className="form-close" onClick={() => setStep(1)}>×</button>

          <h2>{type} Application Form</h2>
          <form onSubmit={handleSubmit} className="application-form">
            {type === "Internship" && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="first_name" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="last_name" onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Contact</label>
                    <input type="tel" name="contact" placeholder="Must Start with Country Code: +1" onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Country</label>
                    <input type="text" name="country" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>University Name</label>
                    <input type="text" name="university" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Available Date</label>
                    <input type="date" name="available_date" onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Technology</label>
                    <select name="technology" onChange={handleChange}>
                      <option value="">Select Technology</option>
                      <option value="AI">AI</option>
                      <option value="ML">ML</option>
                      <option value="GenAI">GenAI</option>
                      <option value="Full Stack">Full Stack</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Internship Type</label>
                    <select name="internship_type" onChange={handleChange}>
                      <option value="">Select Type</option>
                      <option value="Remote">Remote</option>
                      <option value="In-Person">In-Person</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "block" }} className="comment-txt form-group full-width">
                  <label>Comment</label>
                  <textarea style={{
                    backgroundColor: "rgba(77, 76, 76, 0.5)", color: "#fff",
                    border: "1px solid #ccc", padding: "10px", width: "100%", height: "100px"
                  }} name="comment" onChange={handleChange} />
                </div>

                <div className="form-group full-width ">
                  <label>Upload Resume</label>
                  <input style={{ borderRadius: "8px", padding: "10px", border: "1px solid #ccc", marginLeft: "5px" }} type="file" name="resume" onChange={handleChange} />
                </div>
              </>
            )}

            {type === "Job" && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="first_name" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="last_name" onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Street Address</label>
                    <input type="text" name="address" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Street Address Line 2</label>
                    <input type="text" name="address2" onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Postal / Zip Code</label>
                    <input type="text" name="postal_code" onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="contact" placeholder="(000) 000-0000" onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="example@example.com" onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Areas of Interest</label>
                    <select name="technology" onChange={handleChange}>
                      <option value="">--Select--</option>
                      <option value="AI">AI</option>
                      <option value="ML">ML</option>
                      <option value="GenAI">GenAI</option>
                      <option value="Full Stack">Full Stack</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Skill Level</label>
                    <select name="skill_level" onChange={handleChange}>
                      <option value="">--Select--</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Highest Education</label>
                    <input type="text" name="education" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Years of Experience</label>
                    <input type="number" name="experience" onChange={handleChange} />
                  </div>
                </div>

                <div style={{ display: "block" }} className="comment-txt form-group full-width">
                  <label>Cover Letter</label>
                  <textarea style={{
                    backgroundColor: "rgba(77, 76, 76, 0.5)", color: "#fff",
                    border: "1px solid #ccc", padding: "10px", width: "100%", height: "100px"
                  }} name="cover_letter" onChange={handleChange} />
                </div>

                <div className="form-group full-width ">
                  <label>Upload Resume</label>
                  <input style={{ borderRadius: "8px", padding: "10px", border: "1px solid #ccc", marginLeft: "5px" }} type="file" name="resume" onChange={handleChange} />
                </div>

                <div className="form-group full-width ">
                  <label>Upload Education Documents</label>
                  <input style={{ borderRadius: "8px", padding: "10px", border: "1px solid #ccc", marginLeft: "5px" }} type="file" name="education_docs" onChange={handleChange} />
                </div>
              </>
            )}

            <button className="submit-btn" type="submit">Submit Application</button>
            <p className="status-message">{status}</p>
          </form>
        </div>
      )}



    </div>
  );
};

export default JoinUsForm;

