import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isProductsActive = location.pathname.startsWith('/products');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dropdown categories under Focus Products
  const productDropdownItems = [
    {
      label: 'Panchakavya Products',
      to: '/products/panchakavya',
      desc: 'Bio-Fertilizers, Crop Defense & Cattle Feed',
      badge: 'Flagship Bio-Inputs',
    },
    {
      label: 'Pets Products',
      to: '/products/pets',
      desc: 'Natural Herbal & Micro-Algae Pet Care',
      badge: '9 Certified Products',
    },
    {
      label: 'Natural Products',
      to: '/products/natural',
      desc: 'Cold-Pressed Oils, Vedic Ghee, Honey & Grains',
      badge: '11 Certified Products',
    },
  ];

  return (
    <header
      id="global-navbar"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
        backgroundColor: '#FFFFFF',
        boxShadow: isScrolled
          ? '0 10px 30px -10px rgba(24, 36, 10, 0.12)'
          : '0 2px 10px rgba(24, 36, 10, 0.04)',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Main Multi-Page Navigation Bar */}
      <div
        className="corporate-nav-tier"
        style={{
          padding: isScrolled ? '0.45rem 2rem' : '0.65rem 2rem',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
          width: '100%',
          transition: 'padding 0.25s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
          }}
        >
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="corp-brand-link"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.70rem',
              flexShrink: 0,
            }}
            title="Natural Agriculture & Modern Organic Private Limited"
          >
            <img
              id="navbar-center-logo"
              src="/assets/Fashions__11_-removebg-preview.png"
              alt="NAMO Logo"
              className="corp-brand-logo"
              style={{
                height: isScrolled ? '44px' : '52px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.25s ease',
                flexShrink: 0,
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
              <span
                className="corp-brand-title"
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: isScrolled ? '1.12rem' : '1.24rem',
                  fontWeight: 800,
                  letterSpacing: '0.025em',
                  color: '#18240A',
                  lineHeight: 1.1,
                  transition: 'font-size 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                NAMO ORGANIC
              </span>
              <span
                className="corp-brand-subtitle"
                style={{
                  fontSize: 'clamp(0.54rem, 0.60vw, 0.62rem)',
                  letterSpacing: '0.04em',
                  fontWeight: 700,
                  color: '#1b4d35',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  display: 'block',
                }}
              >
                Natural Agriculture & Modern Organic Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.6rem, 1.25vw, 1.6rem)',
              whiteSpace: 'nowrap',
            }}
            className="corporate-desktop-nav"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) => `corp-nav-link ${isActive ? 'active-corp-link' : ''}`}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#293B14',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.08em',
                padding: '0.45rem 0.2rem',
                transition: 'all 0.2s ease',
                borderBottom: isActive ? '2.5px solid #1b4d35' : '2.5px solid transparent',
              })}
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `corp-nav-link ${isActive ? 'active-corp-link' : ''}`}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#293B14',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.08em',
                padding: '0.45rem 0.2rem',
                transition: 'all 0.2s ease',
                borderBottom: isActive ? '2.5px solid #1b4d35' : '2.5px solid transparent',
              })}
            >
              ABOUT US
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) => `corp-nav-link ${isActive ? 'active-corp-link' : ''}`}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#293B14',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.08em',
                padding: '0.45rem 0.2rem',
                transition: 'all 0.2s ease',
                borderBottom: isActive ? '2.5px solid #1b4d35' : '2.5px solid transparent',
              })}
            >
              SERVICES
            </NavLink>

            {/* FOCUS PRODUCTS Dropdown Menu Container */}
            <div
              ref={dropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`corp-nav-link ${isProductsActive ? 'active-corp-link' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: isProductsActive ? '#1b4d35' : '#293B14',
                  fontSize: '0.82rem',
                  fontWeight: isProductsActive ? 800 : 700,
                  letterSpacing: '0.08em',
                  padding: '0.45rem 0.2rem',
                  transition: 'all 0.2s ease',
                  borderBottom: isProductsActive ? '2.5px solid #1b4d35' : '2.5px solid transparent',
                  outline: 'none',
                }}
                aria-expanded={productsDropdownOpen}
              >
                <span>FOCUS PRODUCTS</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: productsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: isProductsActive ? '#1b4d35' : '#4E6E10',
                  }}
                />
              </button>

              {/* Desktop Dropdown Flyout */}
              {productsDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 0.4rem)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '0.65rem',
                    minWidth: '310px',
                    boxShadow: '0 16px 40px rgba(24, 36, 10, 0.12)',
                    border: '1.5px solid rgba(103, 160, 32, 0.22)',
                    zIndex: 1200,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    animation: 'fadeInMenu 0.18s ease-out',
                  }}
                  className="corp-dropdown-menu"
                >
                  {productDropdownItems.map((item) => {
                    const isActiveItem = location.pathname === item.to;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setProductsDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '0.7rem 0.95rem',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          backgroundColor: isActiveItem ? '#F0F4E8' : 'transparent',
                          transition: 'background-color 0.15s ease',
                        }}
                        className="dropdown-item-link"
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.5rem',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.86rem',
                              fontWeight: 800,
                              color: isActiveItem ? '#1b4d35' : '#18240A',
                              letterSpacing: '0.02em',
                            }}
                          >
                            {item.label}
                          </span>
                          <span
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              color: item.badge === 'Coming Soon' ? '#8a6405' : '#1b4d35',
                              backgroundColor: item.badge === 'Coming Soon' ? '#FFF4CC' : '#E4ECCF',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '9999px',
                            }}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '0.74rem',
                            color: '#556645',
                            marginTop: '0.25rem',
                            lineHeight: 1.3,
                          }}
                        >
                          {item.desc}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <NavLink
              to="/market"
              className={({ isActive }) => `corp-nav-link ${isActive ? 'active-corp-link' : ''}`}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#293B14',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.08em',
                padding: '0.45rem 0.2rem',
                transition: 'all 0.2s ease',
                borderBottom: isActive ? '2.5px solid #1b4d35' : '2.5px solid transparent',
              })}
            >
              MARKET & SCALE
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `corp-nav-link ${isActive ? 'active-corp-link' : ''}`}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#293B14',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.08em',
                padding: '0.45rem 0.2rem',
                transition: 'all 0.2s ease',
                borderBottom: isActive ? '2.5px solid #1b4d35' : '2.5px solid transparent',
              })}
            >
              CONTACT
            </NavLink>
          </nav>

          {/* Right Action CTA: Partner With Us */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              flexShrink: 0,
            }}
            className="corporate-cta-container"
          >
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#1b4d35',
                color: '#FFFFFF',
                padding: '0.55rem 1.3rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(27, 77, 53, 0.25)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              className="corp-cta-btn"
            >
              <span>Partner With Us</span>
              <ArrowUpRight size={14} color="#FFDB15" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#18240A',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="corp-hamburger-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid rgba(24, 36, 10, 0.08)',
            borderBottom: '2px solid #1b4d35',
            padding: '1.25rem 1.5rem 2rem',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
          className="corp-mobile-drawer"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}
          >
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#18240A',
                textDecoration: 'none',
                fontSize: '0.96rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.05em',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(24, 36, 10, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>HOME</span>
              <span style={{ color: '#1b4d35', fontWeight: 800 }}>→</span>
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#18240A',
                textDecoration: 'none',
                fontSize: '0.96rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.05em',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(24, 36, 10, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>ABOUT US</span>
              <span style={{ color: '#1b4d35', fontWeight: 800 }}>→</span>
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#18240A',
                textDecoration: 'none',
                fontSize: '0.96rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.05em',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(24, 36, 10, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>SERVICES</span>
              <span style={{ color: '#1b4d35', fontWeight: 800 }}>→</span>
            </NavLink>

            {/* FOCUS PRODUCTS Mobile Accordion */}
            <div style={{ borderBottom: '1px solid rgba(24, 36, 10, 0.05)', paddingBottom: '0.4rem' }}>
              <div
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.65rem 0',
                  color: isProductsActive ? '#1b4d35' : '#18240A',
                  fontSize: '0.96rem',
                  fontWeight: isProductsActive ? 800 : 700,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                }}
              >
                <span>FOCUS PRODUCTS</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: '#1b4d35',
                  }}
                />
              </div>

              {mobileProductsOpen && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                    paddingLeft: '0.75rem',
                    paddingRight: '0.25rem',
                    paddingBottom: '0.5rem',
                  }}
                >
                  {productDropdownItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.55rem 0.8rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        backgroundColor: location.pathname === item.to ? '#F0F4E8' : 'rgba(24, 36, 10, 0.02)',
                        color: '#18240A',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#18240A' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#556645' }}>{item.desc}</div>
                      </div>
                      <span style={{ color: '#1b4d35', fontWeight: 800, marginLeft: '0.5rem' }}>→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/market"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#18240A',
                textDecoration: 'none',
                fontSize: '0.96rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.05em',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(24, 36, 10, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>MARKET & SCALE</span>
              <span style={{ color: '#1b4d35', fontWeight: 800 }}>→</span>
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#1b4d35' : '#18240A',
                textDecoration: 'none',
                fontSize: '0.96rem',
                fontWeight: isActive ? 800 : 700,
                letterSpacing: '0.05em',
                padding: '0.65rem 0',
                borderBottom: '1px solid rgba(24, 36, 10, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>CONTACT</span>
              <span style={{ color: '#1b4d35', fontWeight: 800 }}>→</span>
            </NavLink>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(24, 36, 10, 0.1)' }}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#1b4d35',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <span>Partner With NAMO</span>
                <ArrowUpRight size={16} color="#FFDB15" />
              </Link>

              <div style={{ marginTop: '1.2rem', fontSize: '0.82rem', color: '#666', lineHeight: 1.6 }}>
                <div><strong>Helpline:</strong> +91 95008 29886</div>
                <div><strong>Email:</strong> namoorganicpvtltd@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive and Hover Styles */}
      <style>{`
        .corp-nav-link:hover {
          color: #1b4d35 !important;
          transform: translateY(-1px);
        }
        .active-corp-link {
          color: #1b4d35 !important;
        }
        .corp-cta-btn:hover {
          background-color: #133a28 !important;
          box-shadow: 0 6px 18px rgba(27, 77, 53, 0.35) !important;
          transform: translateY(-1px);
        }
        .dropdown-item-link:hover {
          background-color: #F3F6EC !important;
        }
        .dropdown-item-link:hover span {
          color: #1b4d35 !important;
        }
        @keyframes fadeInMenu {
          from {
            opacity: 0;
            transform: translate(-50%, -6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @media (max-width: 1024px) {
          .corporate-desktop-nav {
            display: none !important;
          }
          .corp-hamburger-btn {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .corporate-top-meta {
            display: none !important;
          }
          .corporate-cta-container .corp-cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
