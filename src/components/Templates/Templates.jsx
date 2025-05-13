import React, { useState } from 'react';
import './Templates.css';
import AnimatedReveal from '../AnimatedReveal/AnimatedReveal';
// placeholder images – replace with your real screenshots
const TEMPLATES = [
  {
    title: 'Executive',
    description:
      'Perfect for senior professionals and executives looking to highlight leadership experience.',
    img: 'https://via.placeholder.com/300x400?text=Executive+Template',
    badge: 'Popular',
    categories: ['All Templates', 'Professional', 'Modern'],
  },
  {
    title: 'Creative Pro',
    description:
      'Designed for creative professionals who want to showcase their portfolio and skills.',
    img: 'https://via.placeholder.com/300x400?text=Creative+Pro',
    categories: ['All Templates', 'Creative', 'Modern'],
  },
  {
    title: 'Minimalist',
    description:
      'Clean and simple design that puts focus on your content and professional experience.',
    img: 'https://via.placeholder.com/300x400?text=Minimalist',
    badge: 'New',
    categories: ['All Templates', 'Simple'],
  },
];

const CATEGORIES = [
  'All Templates',
  'Creative',
  'Professional',
  'Simple',
  'Modern',
];

export default function Templates() {
  const [active, setActive] = useState('All Templates');

  const visible = TEMPLATES.filter((t) =>
    t.categories.includes(active)
  );

  return (
    <section className="templates">
    <AnimatedReveal direction="up">
      <div className="templates-header">
      <AnimatedReveal direction="up"><h2>Professional Resume Templates</h2></AnimatedReveal>
      <AnimatedReveal direction="up"><p>Choose from our collection of ATS-friendly templates designed to impress employers</p></AnimatedReveal>
      </div></AnimatedReveal>

      <AnimatedReveal direction="up"><div className="templates-tabs">
        {CATEGORIES.map((cat) => (
          <AnimatedReveal direction="up"><button
            key={cat}
            className={cat === active ? 'tab active' : 'tab'}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button></AnimatedReveal>
        ))}
      </div></AnimatedReveal>

      <AnimatedReveal direction="up"> <div className="templates-grid">
        {visible.map((t) => (
          <AnimatedReveal direction="right"><div key={t.title} className="template-card">
            {t.badge && <span className="badge">{t.badge}</span>}
            <AnimatedReveal direction="up"><img
              src={t.img}
              alt={t.title}
              className="template-image"
            /></AnimatedReveal>
            <AnimatedReveal direction="up"><div className="template-info">
            <AnimatedReveal direction="up"><h3>{t.title}</h3></AnimatedReveal>
            <AnimatedReveal direction="up"><p>{t.description}</p></AnimatedReveal>
              <button className="use-btn">Use This Template</button>
            </div></AnimatedReveal>
          </div></AnimatedReveal>
        ))}
      </div></AnimatedReveal>

      <AnimatedReveal direction="up"><div className="view-all">
      <AnimatedReveal direction="up"> <a href="#all-templates">View all templates →</a></AnimatedReveal>
      </div></AnimatedReveal>
    </section>
  );
}
