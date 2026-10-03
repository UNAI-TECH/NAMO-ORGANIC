import React from 'react';
import { Sprout, Leaf, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

interface FocusProductsSectionProps {
  category?: 'all' | 'panchakavya' | 'natural';
  isHomePage?: boolean;
}

export const FocusProductsSection: React.FC<FocusProductsSectionProps> = ({
  category = 'panchakavya',
  isHomePage = false,
}) => {
  // Determine which products to display based on category and home page context
  const panchakavyaIds = [
    'panchakavya-organic-fertilizer',
    'panchakavya-organic-pesticide',
    'algae-cattle-feed-supplement',
  ];

  const naturalIds = [
    'sesame-oil',
    'coconut-oil',
    'a2-ghee',
    'organic-honey',
    'jaggery-powder',
    'raw-rices',
    'wheat-flour',
    'dals-pulses',
    'masala-spices',
    'nuts-dryfruits',
    'sweets-snacks',
  ];

  let displayProducts = PRODUCTS;
  if (isHomePage || category === 'panchakavya') {
    displayProducts = PRODUCTS.filter((p) => panchakavyaIds.includes(p.id));
  } else if (category === 'natural') {
    displayProducts = PRODUCTS.filter((p) => naturalIds.includes(p.id));
  }

  // Header copy configuration
  let sectionBadge = 'OUR FOCUS PRODUCTS';
  let sectionTitle = 'Natural Solutions for Sustainable Agriculture';
  let sectionSubtitle =
    'NAMO presents three flagship natural agricultural inputs engineered to revitalize soil, shield crops organically, and fortify livestock health.';

  if (!isHomePage) {
    if (category === 'panchakavya') {
      sectionBadge = 'PANCHAKAVYA BIO-INPUTS & LIVESTOCK CARE';
      sectionTitle = 'Flagship Bio-Fertilizers & Crop Defense';
      sectionSubtitle =
        'Harnessing the transformative biological power of indigenous Vedic Panchakavya and marine micro-algae to regenerate farm soils, defend crops naturally, and elevate livestock wellness.';
    } else if (category === 'natural') {
      sectionBadge = 'CERTIFIED NATURAL PRODUCTS';
      sectionTitle = 'Pure Certified Farm-Fresh Products & Heritage Staples';
      sectionSubtitle =
        'Explore our collection of 11 certified natural products — traditional cold-pressed oils, Vedic Desi cow A2 ghee, raw forest honey, stone-ground heritage grains, unpolished pulses, single-origin spices, and wholesome snacks.';
    } else {
      sectionBadge = 'COMPLETE PRODUCT PORTFOLIO';
      sectionTitle = 'Pure, Certified Organic Products & Bio-Inputs';
      sectionSubtitle =
        'Explore our complete collection of certified natural products and flagship bio-inputs.';
    }
  }

  return (
    <section
      id="products"
      style={{
        padding: 'clamp(3.5rem, 5vw, 5.5rem) clamp(1rem, 3vw, 2rem)',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.2rem, 3.5vw, 3.2rem)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#E4ECCF',
              color: '#293B14',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.9rem',
            }}
          >
            {category === 'natural' ? (
              <Leaf size={14} color="#67A020" />
            ) : (
              <Sprout size={14} color="#67A020" />
            )}
            <span>{sectionBadge}</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.22,
              marginBottom: '0.85rem',
            }}
          >
            {sectionTitle}
          </h2>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              color: '#4A583A',
              maxWidth: '780px',
              margin: '0 auto',
            }}
          >
            {sectionSubtitle}
          </p>
        </div>

        {/* Products Grid (Compact balanced proportions, 100% aligned, no text cutting) */}
        <div className="focus-products-grid">
          {displayProducts.map((item) => {
            return (
              <div key={item.id} className="focus-product-card">
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Compact Product Visual Container (Height 195px, properly proportioned) */}
                  <div
                    style={{
                      backgroundColor: '#F3F6EC',
                      width: '100%',
                      height: '195px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      padding: '0.85rem',
                      overflow: 'hidden',
                      borderRadius: '16px 16px 0 0',
                    }}
                  >

                    {/* Badge if present */}
                    {item.badge && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          fontSize: '0.66rem',
                          fontWeight: 800,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          color: '#1b4d35',
                          backgroundColor: '#FFDB15',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '9999px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                          zIndex: 2,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Background-Removed Product Image (Cleanly filling the frame) */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        maxHeight: '155px',
                        maxWidth: '82%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 8px 16px rgba(24, 36, 10, 0.12))',
                        transition: 'transform 0.3s ease',
                      }}
                      className="product-card-img"
                    />
                  </div>

                  {/* Product Content Body */}
                  <div
                    className="focus-product-card-body"
                    style={{
                      padding: '1.25rem 1.35rem 0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                    }}
                  >
                    {/* Product Title - Clean natural display with no vertical clipping */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: 'clamp(1.08rem, 1.25vw, 1.22rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.015em',
                        color: '#18240A',
                        lineHeight: 1.35,
                        marginBottom: '0.65rem',
                      }}
                    >
                      {item.name}
                    </h3>

                    {/* Description - FULL content shown, never ends with ... */}
                    <p
                      style={{
                        fontFamily: 'var(--font-body, "Inter", sans-serif)',
                        fontSize: '0.88rem',
                        color: '#556645',
                        lineHeight: 1.6,
                        marginBottom: '1rem',
                      }}
                    >
                      {item.description || item.subheadline || item.subtitle}
                    </p>

                    {/* Key Highlights Checklist (Sizes, Process, Origin container completely removed) */}
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 1rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                      }}
                    >
                      {item.highlights.slice(0, 2).map((hl, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.82rem',
                            color: '#293B14',
                            fontWeight: 600,
                            lineHeight: 1.45,
                          }}
                        >
                          <Check size={14} color="#67A020" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div style={{ padding: '0.65rem 1.25rem 1.1rem' }}>
                  <div style={{ paddingTop: '0.6rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
                    <Link
                      to="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        color: '#1b4d35',
                        fontSize: '0.80rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      className="focus-product-inquire-link"
                    >
                      <span>Inquire Specifications & Supply</span>
                      <ArrowRight size={13} color="#67A020" className="focus-inquire-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* On Home page: Navigation links to explore full category lines */}
        {isHomePage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <Link
              to="/products/panchakavya"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#1b4d35',
                color: '#FFFFFF',
                padding: '0.8rem 1.8rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 5px 16px rgba(27, 77, 53, 0.22)',
                transition: 'all 0.2s ease',
              }}
              className="catalog-btn"
            >
              <span>Explore Panchakavya Bio-Inputs</span>
              <ArrowRight size={15} color="#FFDB15" />
            </Link>

            <Link
              to="/products/natural"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#FFFFFF',
                color: '#1b4d35',
                border: '1.5px solid #1b4d35',
                padding: '0.8rem 1.8rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              className="catalog-btn"
            >
              <span>Explore Natural Products (11 Items)</span>
              <ArrowRight size={15} color="#1b4d35" />
            </Link>
          </div>
        )}

        {/* Bulk Procurement & Commercial Distribution Banner */}
        <div
          style={{
            backgroundColor: '#1b4d35',
            color: '#FFFFFF',
            borderRadius: '18px',
            padding: '2.2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.75rem',
            boxShadow: '0 12px 30px rgba(27, 77, 53, 0.18)',
          }}
          className="focus-procure-banner"
        >
          <div style={{ maxWidth: '720px' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFDB15',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              COMMERCIAL PROCUREMENT & BULK DISPATCH
            </span>
            <h4
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.45rem',
                lineHeight: 1.25,
              }}
            >
              Partner with NAMO for Certified Organic Products & Natural Farm Inputs
            </h4>
            <p style={{ fontSize: '0.90rem', color: 'rgba(255, 255, 255, 0.88)', margin: 0, lineHeight: 1.55 }}>
              We collaborate directly with FPOs, retail distributors, agricultural cooperatives, and institutional buyers
              with volume pricing and pan-India logistics.
            </p>
          </div>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              backgroundColor: '#FFDB15',
              color: '#18240A',
              padding: '0.85rem 1.8rem',
              borderRadius: '9999px',
              fontSize: '0.84rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 5px 16px rgba(0,0,0,0.15)',
              flexShrink: 0,
            }}
            className="catalog-btn"
          >
            <span>Request Commercial Quote</span>
            <ArrowRight size={15} color="#18240A" />
          </Link>
        </div>
      </div>

      <style>{`
        .focus-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
          margin-bottom: 3rem;
          align-items: stretch;
        }
        .focus-product-card {
          background-color: #FFFFFF;
          border-radius: 18px;
          border: 1.5px solid rgba(103, 160, 32, 0.2);
          box-shadow: 0 6px 22px rgba(24, 36, 10, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          height: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .focus-product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(24, 36, 10, 0.09) !important;
          border-color: #67A020 !important;
        }
        .focus-product-card:hover .product-card-img {
          transform: scale(1.05);
        }
        .focus-product-inquire-link:hover {
          color: #4E6E10 !important;
        }
        .focus-product-inquire-link:hover .focus-inquire-arrow {
          transform: translateX(4px);
        }
        .focus-inquire-arrow {
          transition: transform 0.2s ease;
        }
        .catalog-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0,0,0,0.18) !important;
        }
        @media (max-width: 1024px) and (min-width: 641px) {
          .focus-products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.4rem !important;
          }
        }
        @media (max-width: 640px) {
          .focus-products-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .focus-product-card {
            border-radius: 16px !important;
          }
          .focus-product-card-body {
            padding: 1.15rem 1.15rem 0.5rem !important;
          }
          .focus-procure-banner {
            padding: 1.6rem 1.25rem !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1.25rem !important;
          }
          .focus-procure-banner .catalog-btn {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};
