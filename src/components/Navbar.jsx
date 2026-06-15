import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Main primary links shown directly on desktop navbar
  const primaryLinks = [
    { label: 'Home', path: '/' },
    { label: 'About ICPC', path: '/about' },
    { label: 'Important Dates', path: '/dates' },
    { label: 'Registration', path: '/registration' },
    { label: 'Rules & Eligibility', path: '/rules' },
    { label: 'Problem Archive', path: '/archive' },
  ];

  // Secondary links grouped under "Contest Info ▾" dropdown on desktop
  const secondaryLinks = [
    { label: 'Selection Criteria', path: '/selection' },
    { label: 'Organizing Committee', path: '/people' },
    { label: 'Sponsors', path: '/sponsors' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Program Schedule', path: '/schedule' },
    { label: 'How to Reach', path: '/how-to-reach' },
    { label: 'Onsite Teams', path: '/onsite-teams' },
    { label: 'Official Ranklist', path: '/ranklist' },
  ];

  // Flattened links list for mobile view
  const allLinks = [
    ...primaryLinks,
    ...secondaryLinks
  ];

  // Check if any of the dropdown paths are active
  const isDropdownActive = secondaryLinks.some(link => location.pathname === link.path);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          {/* Custom vector trophy logo to match the Orange/Slate palette */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 0 4px rgba(255,181,102,0.4))' }}
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
            <path d="M12 2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
          </svg>
          <span>ICPC Mathura</span>
        </Link>

        {/* Desktop Navbar Menu */}
        <ul className="navbar-menu">
          {primaryLinks.map((link) => (
            <li key={link.path} className="navbar-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          
          {/* Dropdown Menu for Secondary Items */}
          <li className="navbar-dropdown">
            <button className={`navbar-dropdown-toggle ${isDropdownActive ? 'active' : ''}`}>
              Contest Info <span style={{ fontSize: '0.75rem', marginLeft: '2px' }}>▼</span>
            </button>
            <ul className="navbar-dropdown-menu">
              {secondaryLinks.map((link) => (
                <li key={link.path} className="navbar-dropdown-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none', marginBottom: '4px' }}></span>
          <span style={{ opacity: isOpen ? 0 : 1, marginBottom: '4px' }}></span>
          <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
        </button>
      </div>

      {/* Mobile Dropdown Nav Menu */}
      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {allLinks.map((link) => (
            <li key={link.path} className="mobile-nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
