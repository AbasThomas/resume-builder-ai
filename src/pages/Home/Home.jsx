import React from 'react'
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import Features from '../../components/Featured/Features';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Templates from '../../components/Templates/Templates';
import Editor from '../../components/Editor/Editor';
import Testimonials from '../../components/Testimonials/Testimonials';
import Pricing from '../../components/Pricing/Pricing';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';
import AnimatedReveal from '../../components/AnimatedReveal/AnimatedReveal';
const Home = () => {
    return (
      <div>
        <AnimatedReveal direction="up">
          <Hero />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.1}>
          <Stats />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.2}>
          <Features />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.3}>
          <HowItWorks />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.4}>
          <Templates />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.5}>
          <Editor />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.6}>
          <Testimonials />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.7}>
          <Pricing />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.8}>
          <FAQ />
        </AnimatedReveal>
  
        <AnimatedReveal direction="up" delay={0.9}>
          <CTA />
        </AnimatedReveal>
  
        <Footer /> {/* Usually Footer doesn't need animation */}
      </div>
    );
  };
  
export default Home