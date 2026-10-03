import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Check, ArrowRight, Dog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PET_PRODUCTS, type PetProduct } from '../data/petProducts';

export const PetProductsPage: React.FC = () => {
  return (
    <main>
      <PageHeader
        badge="SUPER-PREMIUM PET WELLNESS"
        title="Natural & Organic Solutions for Pet Health"
        subtitle="Formulated with high-quality animal proteins, marine fish cartilage, Ayurvedic botanicals, and essential omega fatty acids to nurture dogs and cats across every life stage."
        bgImage="/assets/forest_wooden_showcase_bg.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Pet Products' },
        ]}
      />

      <section
        style={{
          padding: 'clamp(3.5rem, 5vw, 5.5rem) clamp(1rem, 3vw, 2.5rem)',
          backgroundColor: '#F8F9F3',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Section Heading */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 3.8rem)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#E4ECCF',
                color: '#293B14',
                padding: '0.35rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.9rem',
              }}
            >
              <Dog size={15} color="#4E6E10" />
              <span>{PET_PRODUCTS.length} CERTIFIED PET FORMULATIONS</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
                color: '#18240A',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.22,
                marginBottom: '0.85rem',
              }}
            >
              NAMO Super-Premium Dog & Cat Care
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#556645',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Engineered with veterinary nutritionists combining real animal-origin proteins, fish cartilage,
              and therapeutic Ayurvedic herbs. Zero fillers, no artificial steroids, and 100% transparent formulations.
            </p>
          </div>

          {/* Pet Product Cards Grid */}
          <div className="pet-products-grid">
            {PET_PRODUCTS.map((product) => (
              <PetProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bulk Veterinary & Commercial Distribution Banner */}
          <div
            style={{
              backgroundColor: '#1b4d35',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: 'clamp(2rem, 3.5vw, 2.8rem) clamp(1.5rem, 4vw, 3rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
              boxShadow: '0 16px 40px rgba(27, 77, 53, 0.2)',
              marginTop: '4rem',
            }}
            className="pet-cta-banner"
          >
            <div style={{ maxWidth: '750px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#FFDB15',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                PET CARE DISTRIBUTION & VETERINARY SUPPLY
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.25,
                  marginBottom: '0.5rem',
                }}
              >
                Partner with NAMO for Pet Care Dealerships & Institutional Orders
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                We collaborate directly with pet clinic networks, veterinary dispensaries, retail distributors,
                and breeding kennels with customized bulk supply and pan-India dispatch.
              </p>
            </div>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: '#FFDB15',
                color: '#18240A',
                padding: '0.95rem 2.2rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
                flexShrink: 0,
                transition: 'all 0.25s ease',
              }}
              className="pet-inquire-btn"
            >
              <span>Inquire Commercial Supply</span>
              <ArrowRight size={16} color="#18240A" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .pet-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.85rem;
          align-items: stretch;
        }
        .pet-product-card {
          background-color: #FFFFFF;
          border-radius: 20px;
          border: 1.5px solid rgba(103, 160, 32, 0.2);
          box-shadow: 0 6px 24px rgba(24, 36, 10, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          height: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pet-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(24, 36, 10, 0.1) !important;
          border-color: #67A020 !important;
        }
        .pet-product-card:hover .product-card-img {
          transform: scale(1.05);
        }
        .pet-product-inquire-link:hover {
          color: #4E6E10 !important;
        }
        .pet-product-inquire-link:hover .pet-inquire-arrow {
          transform: translateX(4px);
        }
        .pet-inquire-arrow {
          transition: transform 0.2s ease;
        }
        .pet-inquire-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.25) !important;
        }
        @media (max-width: 1024px) and (min-width: 641px) {
          .pet-products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .pet-products-grid {
            grid-template-columns: 1fr !important;
            gap: 1.6rem !important;
            width: 100% !important;
          }
          .pet-cta-banner {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 1.6rem 1.25rem !important;
          }
          .pet-cta-banner .pet-inquire-btn {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </main>
  );
};

// Individual Pet Product Card Component
interface PetProductCardProps {
  product: PetProduct;
}

const PetProductCard: React.FC<PetProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="pet-product-card">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Visual Showcase (Height 205px, with badge and graceful fallback) */}
        <div
          style={{
            backgroundColor: '#F3F6EC',
            width: '100%',
            height: '205px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '1rem',
            overflow: 'hidden',
            borderRadius: '20px 20px 0 0',
          }}
        >

          {/* Badge if present */}
          {product.badge && (
            <span
              style={{
                position: 'absolute',
                top: '0.8rem',
                right: '0.8rem',
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
              {product.badge}
            </span>
          )}

          {/* Product Image or Stylized Placeholder until user drops the image in public/ */}
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              style={{
                maxHeight: '160px',
                maxWidth: '85%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 18px rgba(24, 36, 10, 0.12))',
                transition: 'transform 0.3s ease',
              }}
              className="product-card-img"
            />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1rem',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(24, 36, 10, 0.08)',
                  color: '#4E6E10',
                }}
              >
                <Dog size={32} />
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#4E6E10',
                  letterSpacing: '0.04em',
                }}
              >
                NAMO Pet Care Formulation
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div
          style={{
            padding: '1.35rem 1.4rem 0.6rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          {/* Title - Clean fluid typography without cut letters */}
          <h3
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              color: '#18240A',
              lineHeight: 1.35,
              marginBottom: '0.35rem',
            }}
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p
            style={{
              fontSize: '0.80rem',
              fontWeight: 700,
              color: '#4E6E10',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '0.75rem',
            }}
          >
            {product.tagline}
          </p>

          {/* Full Description - Shown fully, never ends with ... */}
          <p
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: '0.88rem',
              color: '#556645',
              lineHeight: 1.6,
              marginBottom: '1.1rem',
            }}
          >
            {product.description}
          </p>

          {/* Key Benefits List */}
          <div style={{ marginBottom: '1rem' }}>
            <span
              style={{
                fontSize: '0.70rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#293B14',
                display: 'block',
                marginBottom: '0.45rem',
              }}
            >
              Key Benefits:
            </span>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
              }}
            >
              {product.keyBenefits.map((benefit, idx) => (
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
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div style={{ padding: '0.75rem 1.4rem 1.35rem' }}>
        <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#1b4d35',
              fontSize: '0.82rem',
              fontWeight: 800,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            className="pet-product-inquire-link"
          >
            <span>Inquire Specifications & Supply</span>
            <ArrowRight size={13} color="#67A020" className="pet-inquire-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};
