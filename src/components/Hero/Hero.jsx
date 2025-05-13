import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import resumeImage from '../../assets/Resume-Preview.png'; // use your own image
import AnimatedReveal from '../AnimatedReveal/AnimatedReveal';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
      <AnimatedReveal direction="up">

        <div className="hero-text">
          <h1>
            Craft Your Future,<br />
            <span className="highlight">One Page at a Time</span>
          </h1>
          <p>
            Create professional, eye-catching resumes in minutes with our intuitive builder.
            Stand out from the crowd and land your dream job.
          </p>
          <div className="hero-buttons">
            <Link to="/builder" className="btn primary">Create Resume →</Link>
            <Link to="/templates" className="btn secondary">View Templates</Link>
          </div>
        </div>
      </AnimatedReveal>
      <AnimatedReveal direction="up">
        <div className="hero-image">
          <img src={resumeImage} alt="Resume Preview" />
        </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default Hero;
