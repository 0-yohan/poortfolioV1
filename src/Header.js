import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ameen_sign from "./assets/ameen-sign-png-inverted.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 p-4 flex items-center justify-between bg-black text-white">
      {/* Your Logo */}
      <Link to="/">
        <img src={ameen_sign} alt="Logo" className="h-20" />
      </Link>

      

      {/* Navigation Links */}
      <nav className={`flex items-center space-x-4 ${isMobile ? 'md:hidden' : 'md:flex pr-8'}`} id="mobile-menu">
        <Link to="/" onClick={closeMobileMenu} className={`hover:text-blue-500 ${location.pathname === '/' ? 'text-blue-500' : 'text-white'}`}>About</Link>
        <Link to="/projects" onClick={closeMobileMenu} className={`hover:text-blue-500 ${location.pathname === '/projects' ? 'text-blue-500' : 'text-white'}`}>Projects</Link>
        <Link to="/experience" onClick={closeMobileMenu} className={`hover:text-blue-500 ${location.pathname === '/experience' ? 'text-blue-500' : 'text-white'}`}>Experience</Link>
        <Link to="/contact" onClick={closeMobileMenu} className={`hover:text-blue-500 ${location.pathname === '/contact' ? 'text-blue-500' : 'text-white'}`}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;