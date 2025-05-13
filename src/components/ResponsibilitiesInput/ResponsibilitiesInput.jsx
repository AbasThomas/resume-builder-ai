import React from "react";
import { commonKeywords } from "../../Data/commonKeywords";
import "./ResponsibilitiesInput.css";

export default function ResponsibilitiesInput({ industry, value, onChange }) {
  const key = industry && industry in commonKeywords ? industry : "technology";
  const keywords = commonKeywords[key];

  return (
    <div className="resp-input">
      <textarea
        placeholder="Describe your responsibilities…"
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p className="tip">
        Try starting with:
        {keywords.map((kw) => (
          <button
            key={kw}
            type="button"
            className="keyword-btn"
            onClick={() => onChange(kw + " ")}
          >
            {kw}
          </button>
        ))}
      </p>
    </div>
  );
}
