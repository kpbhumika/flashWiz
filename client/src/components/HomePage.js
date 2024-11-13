import React from 'react';
import "../HeroSection.css";

const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Section: Text Content */}
        <div className="hero-text">
          <h1 className="hero-heading">
            Boost Your Learning with Flashcards!
          </h1>
          <p className="hero-subheading">
            Master any topic with personalized flashcards and interactive learning.
          </p>
          <p className="hero-description">
            Create, Study, and Retain knowledge efficiently with our flashcard app.
          </p>
          {/* <div className="cta-buttons">
            <button className="cta-button">Get Started</button>
            <button className="cta-button secondary">Create Your First Deck</button>
          </div> */}
        </div>

        {/* Right Section: Image */}
        <div className="hero-image">
          {/* Add an image or graphic here */}
          <img src="/flashcard.jpg" alt="Person using flashcards" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
