import React from 'react';
import { Link } from 'react-router-dom';
import {
  Boxes,
  Briefcase,
  MonitorSmartphone,
  Presentation,
  PackageCheck,
  ShoppingBag,
  Users2,
  Headphones,
  Sprout,
  ArrowRight
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Organic Fertilizer Supply',
      desc: 'High-quality, eco-friendly fertilizers formulated for healthier crops, living soils, and enhanced yields.',
      icon: Boxes,
      badge: 'Bio Inputs',
    },
    {
      num: '02',
      title: 'Agriculture-Based Projects',
      desc: 'End-to-end turnkey projects for sustainable agrarian initiatives, soil enrichment, and farm conversions.',
      icon: Briefcase,
      badge: 'Turnkey',
    },
    {
      num: '03',
      title: 'Agricultural Software',
      desc: 'Smart digital solutions and field management software for modern, precise, and data-driven farming.',
      icon: MonitorSmartphone,
      badge: 'AgriTech',
    },
    {
      num: '04',
      title: 'Workshops & Exhibitions',
      desc: 'Hands-on awareness workshops and educational exhibitions spreading organic knowledge across farming clusters.',
      icon: Presentation,
      badge: 'Outreach',
    },
    {
      num: '05',
      title: 'Organic Agricultural Products',
      desc: 'Pure, natural, and chemical-free agricultural produce and certified commodities for healthier living.',
      icon: PackageCheck,
      badge: 'Produce',
    },
    {
      num: '06',
      title: 'E-Commerce Portal',
      desc: 'A dedicated platform bringing authentic organic products and bio-inputs directly to consumers and farms.',
      icon: ShoppingBag,
      badge: 'Digital',
    },
    {
      num: '07',
      title: 'B2B & B2C Distribution',
      desc: 'Connecting farmers, agricultural enterprises, and consumers within a unified, transparent supply network.',
      icon: Users2,
      badge: 'Commerce',
    },
    {
      num: '08',
      title: 'Farmer Advisory Services',
      desc: 'Specialized agronomic guidance, soil test interpretations, and pest protection advisories for cultivators.',
      icon: Headphones,
      badge: 'Advisory',
    },
    {
      num: '09',
      title: 'Improving Soil Fertility',
      desc: 'Revitalizing depleted soils with active biological humus and organic formulations for sustained productivity.',
      icon: Sprout,
      badge: 'Soil Vitality',
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#F0F4E8',
              color: '#293B14',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <Briefcase size={14} color="#67A020" />
            <span>OUR SERVICES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Healthy Soil. Thriving Farmers. A Greener Tomorrow.
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#4A583A',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            NAMO provides a comprehensive range of agricultural products, field services, and
            technology-oriented solutions to power India’s organic revolution.
          </p>
        </div>

        {/* 9 Services Grid (3 Cards Evenly in Each Row) */}
        <div
          className="services-grid-3col"
          style={{
            marginBottom: '3.5rem',
            alignItems: 'stretch',
          }}
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                style={{
                  backgroundColor: '#F8F9F3',
                  borderRadius: '16px',
                  padding: '1.4rem 1.35rem',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
                className="service-card"
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.9rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#4E6E10',
                        backgroundColor: '#E4ECCF',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {item.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: '#67A020',
                      }}
                    >
                      {item.num}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(24, 36, 10, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.9rem',
                      color: '#293B14',
                    }}
                  >
                    <Icon size={20} color="#293B14" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#18240A',
                      marginBottom: '0.45rem',
                      lineHeight: 1.3,
                      minHeight: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)', fontSize: '0.88rem', color: '#556645', lineHeight: 1.6, minHeight: '3.6rem' }}>
                    {item.desc}
                  </p>
                </div>

                <Link
                  to="/contact"
                  style={{
                    marginTop: '1.1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(24, 36, 10, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#293B14',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  className="inquire-service-link"
                >
                  <span>Inquire Service</span>
                  <ArrowRight size={13} color="#67A020" className="inquire-service-arrow" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Advisory CTA Banner */}
        <div
          style={{
            backgroundColor: '#F0F4E8',
            border: '1.5px solid rgba(103, 160, 32, 0.35)',
            borderRadius: '16px',
            padding: '2.2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
          className="services-advisory-banner"
        >
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                fontWeight: 800,
                color: '#18240A',
                marginBottom: '0.3rem',
                lineHeight: 1.3,
              }}
            >
              Need Farmer Advisory or Custom Project Deployment?
            </h4>
            <p style={{ fontSize: '0.94rem', color: '#4A583A', margin: 0 }}>
              Connect directly with our agricultural specialists and project coordinators.
            </p>
          </div>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#1b4d35',
              color: '#FFFFFF',
              padding: '0.75rem 1.8rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(27, 77, 53, 0.2)',
            }}
            className="advisory-btn"
          >
            <span>Request Advisory</span>
            <ArrowRight size={15} color="#FFDB15" />
          </Link>
        </div>
      </div>

      <style>{`
        .services-grid-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
        }
        @media (max-width: 992px) {
          .services-grid-3col {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .services-grid-3col {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .services-advisory-banner {
            padding: 1.5rem 1.25rem !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1.2rem !important;
          }
          .services-advisory-banner .advisory-btn {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(41, 59, 20, 0.08);
          border-color: #67A020;
          background-color: #FFFFFF;
        }
        .inquire-service-link:hover {
          color: #4E6E10 !important;
        }
        .inquire-service-link:hover .inquire-service-arrow {
          transform: translateX(4px);
        }
        .inquire-service-arrow {
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
};
