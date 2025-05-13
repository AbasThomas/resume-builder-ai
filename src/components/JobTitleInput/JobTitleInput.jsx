import React from "react";
import { jobTitles } from "../../Data/jobTitles";
import "./JobTitleInput.css";

export default function JobTitleInput({ industry, value, onChange }) {
  const key = industry && industry in jobTitles ? industry : "technology";
  const options = jobTitles[key];

  return (
    <div className="job-title-input">
      <input
        list="titles"
        placeholder="Job Title"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <datalist id="titles">
        {options.map((t) => (
          <option key={t} value={t} />
        ))}
      </datalist>
    </div>
  );
}
