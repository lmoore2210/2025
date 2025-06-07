import React from 'react';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('welcome');
  const [resumeData, setResumeData] = useState(null);
  const [preferences, setPreferences] = useState({});
  const [jobMatches, setJobMatches] = useState([]);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResumeData({
      name: 'John Doe',
      skills: ['JavaScript', 'React', 'Node.js'],
      experience: '5 years software development'
    });
    setPage('survey');
  };

  const handleSurveySubmit = () => {
    setJobMatches([
      { title: 'Frontend Developer', country: 'Germany', company: 'TechCorp', match: 88 },
      { title: 'Full Stack Engineer', country: 'Canada', company: 'MapleSoft', match: 83 }
    ]);
    setPage('matches');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-center">
      {page === 'welcome' && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Global Job Matcher</h1>
          <button className="btn" onClick={() => setPage('upload')}>Scan Resume</button>
        </div>
      )}

      {page === 'upload' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Upload Your Resume</h2>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
        </div>
      )}

      {page === 'survey' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Your Preferences</h2>
          <select onChange={(e) => setPreferences({ ...preferences, country: e.target.value })}>
            <option>Choose Country</option>
            <option>Germany</option>
            <option>Canada</option>
            <option>Thailand</option>
          </select>
          <br />
          <input type="text" placeholder="Preferred Salary" className="mt-2"
            onChange={(e) => setPreferences({ ...preferences, salary: e.target.value })} />
          <br />
          <button className="btn mt-2" onClick={handleSurveySubmit}>Find Jobs</button>
        </div>
      )}

      {page === 'matches' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Job Matches</h2>
          {jobMatches.map((job, idx) => (
            <div key={idx} className="border p-2 my-2 rounded shadow">
              <h3 className="font-semibold">{job.title} - {job.country}</h3>
              <p>{job.company} • Match Score: {job.match}%</p>
              <button className="text-blue-500">Apply</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
