import React from 'react';
import './HowItWorks.css';
import AnimatedReveal from '../AnimatedReveal/AnimatedReveal';
const STEPS = [
  {
    step: '1',
    title: 'Choose a Template',
    description: 'Select a professionally designed resume template that fits your industry and style.',
  },
  {
    step: '2',
    title: 'Fill in Your Details',
    description: 'Add your personal information, work experience, skills, and education with easy-to-use forms.',
  },
  {
    step: '3',
    title: 'Customize & Download',
    description: 'Adjust fonts, colors, and layout to your liking, then download your polished resume.',
  },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <AnimatedReveal direction="up"><h2 className="how-title">How It Works</h2></AnimatedReveal>
    <AnimatedReveal direction="up"><p className="how-subtitle">Follow these simple steps to create your perfect resume.</p></AnimatedReveal>
    <AnimatedReveal direction="up"><div className="how-steps">
      {STEPS.map((item) => (
        <AnimatedReveal direction="up"><div key={item.step} className="how-step">
          <AnimatedReveal direction="up"><div className="step-number">{item.step}</div></AnimatedReveal>
          <AnimatedReveal direction="up"><h3 className="step-title">{item.title}</h3></AnimatedReveal>
          <AnimatedReveal direction="up"><p className="step-description">{item.description}</p></AnimatedReveal>
        </div></AnimatedReveal>
      ))}
    </div></AnimatedReveal>
  </section>
);

export default HowItWorks;
