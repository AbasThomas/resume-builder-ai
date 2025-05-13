import React, { useState } from "react";
import { checkGrammar } from "../../api/grammarApi";
import "./GrammarChecker.css";

export default function GrammarChecker({ text }) {
  const [issues, setIssues] = useState([]);

  const handleCheck = async () => {
    const matches = await checkGrammar(text);
    setIssues(matches);
  };

  return (
    <div className="grammar-checker">
      <button type="button" onClick={handleCheck}>
        Check Grammar
      </button>
      {issues.length > 0 && (
        <ul>
          {issues.map((m, i) => (
            <li key={i}>{m.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
