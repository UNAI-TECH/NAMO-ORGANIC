import React from 'react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; to?: string }[];
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  bgImage = '/assets/light_organic_farmland_bg.jpg',
}) => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#0d180b',
        color: '#FFFFFF',
        padding: 'clamp(3.5rem, 8vw, 5.5rem) 1.5rem clamp(3rem, 6vw, 4.5rem)',
        overflow: 'hidden',
        borderBottom: '2px solid rgba(103, 160, 32, 0.25)',
      }}
    >
      {/* Background Image Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.36,
          filter: 'saturate(1.2) brightness(0.92)',
          transform: 'scale(1.02)',
        }}
      />

      {/* Deep Rich Gradient Overlay for High Contrast & Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(8, 16, 7, 0.93) 0%, rgba(17, 30, 14, 0.82) 50%, rgba(10, 20, 8, 0.92) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle organic light flare accents */}
      <div
        style={{
          position: 'absolute',
          top: '-25%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 160, 32, 0.22) 0%, rgba(17, 30, 14, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 219, 21, 0.1) 0%, rgba(17, 30, 14, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            lineHeight: 1.18,
            marginBottom: '1.1rem',
            maxWidth: '1000px',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body, "Inter", sans-serif)',
            fontSize: 'clamp(0.98rem, 1.5vw, 1.2rem)',
            lineHeight: 1.68,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '820px',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
