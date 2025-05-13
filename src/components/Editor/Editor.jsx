import React from 'react';
import './Editor.css';
import AnimatedReveal from '../AnimatedReveal/AnimatedReveal';
const Editor = () => (
  <section className="editor">
        <AnimatedReveal direction="right">
        <h2 className="editor-title">Intuitive Resume Editor</h2>
        </AnimatedReveal>
        <AnimatedReveal direction="left">
          <p className="editor-subtitle">
           Our slider-style editor makes resume creation simple and efficient.
          </p>
        </AnimatedReveal>

       
        <AnimatedReveal direction="left"><div className="editor-image-wrapper">
        <AnimatedReveal direction="right"><img
        src="https://via.placeholder.com/1200x600?text=Resume+Editor+Preview"
        alt="Resume editor preview"
        className="editor-image"
      /></AnimatedReveal>
    </div></AnimatedReveal>

    <AnimatedReveal direction="up"><button className="editor-btn">Try the Editor Now</button></AnimatedReveal>
  </section>
);

export default Editor;
