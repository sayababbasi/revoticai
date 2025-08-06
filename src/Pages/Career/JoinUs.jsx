import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JoinUs = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'Job',
    skills: []
  });

  useEffect(() => {
    // Fetch skill options from backend
    axios.get('http://localhost:5000/api/skills') // Update when deployed
      .then(res => setSkills(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckbox = e => {
    const value = e.target.value;
    setForm(prev => ({
      ...prev,
      skills: prev.skills.includes(value)
        ? prev.skills.filter(skill => skill !== value)
        : [...prev.skills, value]
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', form); // Update URL later
      alert('Registered successfully!');
    } catch (error) {
      alert('Something went wrong.');
    }
  };

  return (
    <div className="container">
      <h2>Join Our Team</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="Job">Job</option>
          <option value="Internship">Internship</option>
        </select>

        <label>Select Skills:</label>
        <div>
          {skills.map((skill, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                value={skill}
                checked={form.skills.includes(skill)}
                onChange={handleCheckbox}
              />
              {skill}
            </label>
          ))}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default JoinUs;
