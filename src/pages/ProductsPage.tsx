import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { FocusProductsSection } from '../components/FocusProductsSection';
import { WhyChooseNamoSection } from '../components/WhyChooseNamoSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { ArrowRight, BarChart3, Mail } from 'lucide-react';

interface ProductsPageProps {
  category?: 'panchakavya' | 'natural' | 'all';
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ category }) => {
  const location = useLocation();

  // Determine active category from props or current URL pathname
  let activeCategory: 'panchakavya' | 'natural' | 'all' = category || 'panchakavya';
  if (!category) {
    if (location.pathname.includes('/natural')) {
      activeCategory = 'natural';
    } else if (location.pathname.includes('/panchakavya')) {
      activeCategory = 'panchakavya';
    }
  }

  const isNatural = activeCategory === 'natural';

  return (
    <main>
      <PageHeader
        badge={isNatural ? '100% PURE & CERTIFIED ORGANIC' : 'FLAGSHIP BIO-INPUTS & LIVESTOCK CARE'}
        title={
          isNatural
            ? 'Pure Certified Farm-Fresh Products & Heritage Staples'
            : 'Panchakavya Bio-Fertilizers & Crop Care'
        }
        subtitle={
          isNatural
            ? 'From farm to kitchen — discover 11 pure, cold-pressed oils, Desi cow A2 ghee, raw forest honey, unpolished heritage grains, stone-ground flours, pulses, and traditional snacks.'
            : 'Certified organic bio-fertilizers, botanical crop defenders, and micro-algae cattle feed supplements formulated to regenerate soil biology and boost livestock wellness.'
        }
        bgImage={isNatural ? '/assets/forest_wooden_showcase_bg.jpg' : '/assets/nature-soil.jpg'}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: isNatural ? 'Natural Products' : 'Panchakavya Products' },
        ]}
      />

      {/* Focus Products Showcase (Panchakavya 3 products or Natural 11 products, square visual cards, no filters) */}
      <FocusProductsSection category={activeCategory} isHomePage={false} />

      {/* Unique Selling Proposition — Why Choose NAMO */}
      <WhyChooseNamoSection />

      {/* Benefits Section for Panchakavya Products */}
      {!isNatural && <BenefitsSection />}

      {/* CTA to Market Opportunity or Technical Dossier Inquiry */}
      <section
        style={{
          padding: '5rem 2rem',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid rgba(24, 36, 10, 0.08)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Explore India's Agricultural Market & Scalable Model
          </h3>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#4A583A',
              maxWidth: '680px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.7,
            }}
          >
            Understand the US $24B agricultural market opportunity, our circular FPO partnerships, and multi-channel
            commercial growth model.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/market"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#1b4d35',
                color: '#FFFFFF',
                padding: '0.85rem 2.2rem',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(27, 77, 53, 0.25)',
              }}
            >
              <BarChart3 size={16} color="#FFDB15" />
              <span>View Market & Growth Model</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#F0F4E8',
                color: '#293B14',
                border: '1.5px solid rgba(103, 160, 32, 0.4)',
                padding: '0.85rem 2.2rem',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              <Mail size={16} color="#4E6E10" />
              <span>Request Product Technical Dossier</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
