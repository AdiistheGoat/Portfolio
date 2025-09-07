import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './index.css'; 
import Skills from './skills';
import Experiences from './experiences';
import Projects from './projects';
import About from './about';
import Contact from './contact';

const PersonalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            Aditya Goyal
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div>
            <img
              src="../public/Aditya.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          
          <h1 className="hero-title">
            Aditya Goyal
          </h1>
          
        <p className="hero-description">
          Hey guys, I'm Aditya Goyal
        </p>
        <p className="hero-description">
          From idea to deployment — I make it happen.
        </p>

          <button
            onClick={() => scrollToSection('about')}
            className="bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/*About*/}
      <About />

      {/*Skills*/}
      <Skills />

      {/*Experiences*/}
      <Experiences />

      {/*Projects*/}
      <Projects />

      {/*Contact*/}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Aditya Goyal</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;