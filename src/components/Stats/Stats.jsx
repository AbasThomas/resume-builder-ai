import React from 'react';
import './Stats.css';
import AnimatedReveal from '../AnimatedReveal/AnimatedReveal';
const Stats = () => {
  return (
    <section className="stats">
      <AnimatedReveal direction="right"><div className="stat-item">
        <h2>5,000+</h2>
        <p>Resumes Created</p>
      </div></AnimatedReveal>
      <AnimatedReveal direction="rigt"><div className="stat-item">
        <h2>98%</h2>
        <p>Interview Success Rate</p>
      </div></AnimatedReveal>
      <AnimatedReveal direction="right"><div className="stat-item">
        <h2>50+</h2>
        <p>Professional Templates</p>
      </div></AnimatedReveal>
      <AnimatedReveal direction="right"><div className="stat-item">
        <h2>4.9/5</h2>
        <p>Customer Satisfaction</p>
      </div></AnimatedReveal>
    </section>  
  );
};

export default Stats;
