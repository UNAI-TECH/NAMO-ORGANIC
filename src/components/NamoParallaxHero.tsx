import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const NamoParallaxHero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLImageElement>(null);
  const heroBgRef = useRef<HTMLImageElement>(null);
  const fgContainerRef = useRef<HTMLDivElement>(null);
  const fgImgRef = useRef<HTMLImageElement>(null);
  const whiteBackdropRef = useRef<HTMLDivElement>(null);
  const bigLogoRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const textVignetteRef = useRef<HTMLDivElement>(null);

  // Responsive check for mobile view (<= 768px)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  // 3 Hero Slider Slides: Panchakavya Products, Natural Products, Pet Products
  const heroSlides = [
    {
      id: 'panchakavya',
      tabLabel: 'Panchakavya Products',
      badge: 'FLAGSHIP BIO-INPUTS & LIVESTOCK CARE',
      categoryUrl: '/products/panchakavya',
      bgImage: '/assets/light_organic_farmland_bg.jpg',
      products: [
        {
          id: 'panchakavya-fertilizer',
          title: 'NAMO Organic Fertilizers',
          titleAccent: 'Based on Panchakavya',
          tagline: 'Traditional 5-Ingredient Soil Microbiome Restorer',
          desc: 'Natural agricultural inputs designed to support healthy plant growth and sustainable farming practices. Prepared from five pure cow-derived bio-inputs (Milk, Curd, Ghee, Dung, Urine) to revitalize depleted soils, enhance microflora, and reduce crop irrigation requirements by up to 40%.',
          specs: [
            { label: '5 Bio-Inputs', val: 'Pure Panchakavya' },
            { label: 'Water Savings', val: 'Up to 40%' },
            { label: 'Soil Health', val: 'Rich Microflora' },
          ],
          image: '/assets/namo-panchakavya-transparent-cropped.png',
          alt: 'NAMO Organic Fertilizers Based on Panchakavya',
          shortName: 'Fertilizers',
        },
        {
          id: 'panchakavya-pesticide',
          title: 'NAMO Organic Pesticides',
          titleAccent: 'Based on Panchakavya',
          tagline: 'Residue-Free Ecological Crop Protection & Pest Defense',
          desc: 'Natural crop protection solutions engineered to protect plants from pests while preserving beneficial pollinator insects and maintaining a healthy, balanced soil ecosystem. Safe for plants, farmers, and consumers.',
          specs: [
            { label: 'Pest Defense', val: 'Target Eco-Shield' },
            { label: 'Chemicals', val: 'Zero Toxic Residue' },
            { label: 'Ecosystem', val: 'Pollinator Friendly' },
          ],
          image: '/assets/namo-panchakavya-transparent-cropped.png',
          alt: 'NAMO Organic Pesticides Based on Panchakavya',
          shortName: 'Pesticides',
        },
        {
          id: 'algae-extract',
          title: 'NAMO Algae Extract',
          titleAccent: 'Cattle Feed Supplement',
          tagline: 'Bioactive Oceanic Nutrition for Dairy Cattle Wellness',
          desc: 'Natural nutritional feed supplement rich in oceanic macro-algae, bioactive nutrients, and essential minerals. Fortifies dairy cattle immunity, optimizes ruminal digestion, and sustainably boosts daily milk yields with superior fat and SNF profiles.',
          specs: [
            { label: 'Origin', val: 'Pure Marine Algae' },
            { label: 'Target', val: 'Dairy Cattle' },
            { label: 'Key Impact', val: 'Yield & Immunity' },
          ],
          image: '/assets/namo-algae-extract-transparent-cropped.png',
          alt: 'NAMO Algae Extract Cattle Feed Supplement',
          shortName: 'Cattle Feed',
        },
      ],
    },
    {
      id: 'natural',
      tabLabel: 'Natural Products',
      badge: '100% PURE & CERTIFIED ORGANIC',
      categoryUrl: '/products/natural',
      bgImage: '/assets/natural_products_hero_bg.jpg',
      products: [
        {
          id: 'sesame-oil',
          title: 'Cold-Pressed Sesame Oil',
          titleAccent: 'Traditional Vaagai Mara Chekku',
          tagline: 'Pure Native Seed Extraction with Natural Sesamol',
          desc: 'Mechanically cold-pressed at controlled low temperatures to keep natural antioxidants, sesamol, and Vitamin E intact. Unrefined, unbleached, and free from hexane solvent extraction for daily authentic culinary and wellness use.',
          specs: [
            { label: 'Extraction', val: 'Wood Cold-Pressed' },
            { label: 'Chemicals', val: 'Zero Hexane/Bleach' },
            { label: 'Nutrients', val: 'Sesamol & Vit-E' },
          ],
          image: '/products/transparent/oils.png',
          alt: 'Cold-Pressed Sesame Oil',
          shortName: 'Sesame Oil',
        },
        {
          id: 'desi-cow-a2-ghee',
          title: 'Desi Cow A2 Ghee',
          titleAccent: 'Traditional Vedic Bilona Method',
          tagline: 'Cultured Curd Butter Churned Granular Ghee',
          desc: 'Crafted exclusively from grass-fed indigenous cow milk cultured into curds and churned with wooden bilona. Golden granular texture packed with natural butyric acid, fat-soluble vitamins, and authentic aroma.',
          specs: [
            { label: 'Process', val: 'Vedic Bilona Churn' },
            { label: 'Source', val: 'Indigenous Desi Cows' },
            { label: 'Quality', val: 'Granular A2 Purity' },
          ],
          image: '/products/transparent/gee.png',
          alt: 'Desi Cow A2 Ghee',
          shortName: 'A2 Ghee',
        },
        {
          id: 'raw-forest-honey',
          title: 'Wild Multi-Flora Honey',
          titleAccent: 'Raw & Unpasteurized',
          tagline: 'Biodiverse Forest Reserve Harvest with Live Enzymes',
          desc: 'Direct from wild forest bee reserves. 100% raw, unheated, and micro-filtered to preserve active pollen grains, digestive enzymes, and beneficial antioxidants with zero high-fructose corn syrup.',
          specs: [
            { label: 'Processing', val: 'Raw & Unheated' },
            { label: 'Source', val: 'Wild Forest Trees' },
            { label: 'Enzymes', val: 'Living Bio-Pollen' },
          ],
          image: '/products/transparent/honey.png',
          alt: 'Wild Multi-Flora Honey',
          shortName: 'Forest Honey',
        },
        {
          id: 'heritage-rice',
          title: 'Heritage Traditional Rice',
          titleAccent: 'Ancient Unpolished Grains',
          tagline: 'Organically Grown Indigenous Low-GI Rice',
          desc: 'Ancient native paddy varieties cultivated with Panchakavya organic inputs. Retains natural outer bran rich in dietary fiber, anthocyanins, and micro-minerals for sustained low-glycemic stamina.',
          specs: [
            { label: 'Polishing', val: 'Zero Chemical Polish' },
            { label: 'Fiber', val: 'High Dietary Fiber' },
            { label: 'Glycemic', val: 'Low GI Sustained' },
          ],
          image: '/products/transparent/rice.png',
          alt: 'Heritage Traditional Rice',
          shortName: 'Heritage Rice',
        },
        {
          id: 'organic-jaggery',
          title: 'Organic Jaggery Powder',
          titleAccent: 'Chemical-Free Nattu Sakkarai',
          tagline: 'Herbal Clarified Cane Sweetener with Pure Iron',
          desc: 'Produced from organic sugarcane fields and clarified using natural vegetable extracts. Completely free from sulfur, artificial bleaching agents, or chemicals. Naturally rich in iron and essential minerals.',
          specs: [
            { label: 'Clarification', val: 'Herbal Clarified' },
            { label: 'Additives', val: 'Zero Sulfur Bleach' },
            { label: 'Minerals', val: 'Natural Iron Rich' },
          ],
          image: '/products/transparent/jaggery.png',
          alt: 'Organic Jaggery Powder',
          shortName: 'Jaggery Powder',
        },
      ],
    },
    {
      id: 'pets',
      tabLabel: 'Pet Products',
      badge: 'SUPER-PREMIUM VETERINARY PET CARE',
      categoryUrl: '/products/pets',
      bgImage: '/assets/pets_products_hero_bg.jpg',
      products: [
        {
          id: 'pet-adult-dogs',
          title: 'NAMO Elite Adult Dogs',
          titleAccent: 'Super-Premium Dry Food',
          tagline: 'High-Protein Nutrition with Real Meat & 5 Vitality Herbs',
          desc: 'Formulated for adult dogs with 26% protein, 14% fat, and organic calcium derived from marine fish cartilage. Enhanced with Turmeric, Rosemary, Wheatgrass, Chicory, and Moringa for strong joints and vibrant energy.',
          specs: [
            { label: 'Protein / Fat', val: '26% Pro / 14% Fat' },
            { label: 'Joint Health', val: 'Organic Fish Bone Ca' },
            { label: 'Botanicals', val: '5 Therapeutic Herbs' },
          ],
          image: '/products/pets/NAMO Elite for Adult Dogs.png',
          alt: 'NAMO Elite for Adult Dogs',
          shortName: 'Adult Dogs',
        },
        {
          id: 'pet-mother-baby',
          title: 'NAMO Elite Mother & Baby',
          titleAccent: 'Puppy & Nursing Mother Care',
          tagline: '80% Animal Origin Protein for Lactation & Early Growth',
          desc: 'Super-premium nutrition formulated for pregnant or nursing mothers and growing puppies. Concentrated with 20 amino acids, 8 vitamins, and zero added gluten to support rapid skeletal growth and maternal recovery.',
          specs: [
            { label: 'Animal Protein', val: '80% High Origin' },
            { label: 'Gluten', val: 'Zero Added Gluten' },
            { label: 'Growth', val: 'Optimal Skeletal Dev' },
          ],
          image: '/products/pets/NAMO Elite for Mother & Baby.png',
          alt: 'NAMO Elite for Mother & Baby',
          shortName: 'Mother & Baby',
        },
        {
          id: 'pet-cats',
          title: 'NAMO Elite for Cats',
          titleAccent: 'Taurine-Rich Feline Formula',
          tagline: 'Chicken Liver, Heart & Sardines for Vision & Coat',
          desc: 'Complete balanced dry food for cats of all life stages including queens and kittens. Fortified with 2000 mg/kg taurine for heart and eyesight wellness, 34% protein, and higher EPA/DHA omega fatty acids for a silky coat.',
          specs: [
            { label: 'Taurine', val: '2000 mg/kg Vision' },
            { label: 'Protein / Fat', val: '34% Pro / 14% Fat' },
            { label: 'Omegas', val: 'Rich Marine 3, 6, 9' },
          ],
          image: '/products/pets/NAMO Elite for Cats.png',
          alt: 'NAMO Elite for Cats',
          shortName: 'Cats Formula',
        },
        {
          id: 'pet-stud-dogs',
          title: 'NAMO Xcite for Stud Dogs',
          titleAccent: 'Specialized High-Energy Dog Food',
          tagline: '4900 Kcal Formula for Stud Conditioning & Vitality',
          desc: 'Ultra-premium formulation designed for breeding stud dogs. Packed with 30% protein, 20% healthy lipids, and 8 herbal adaptogens (Asparagus, Ashwagandha, Spirulina, Moringa) to maximize vitality, stamina, and sperm motility.',
          specs: [
            { label: 'Energy Profile', val: '4900 Kcal Formula' },
            { label: 'Protein / Fat', val: '30% Pro / 20% Fat' },
            { label: 'Herbs', val: '8 Adaptogenic Herbs' },
          ],
          image: '/products/pets/NAMO Xcite for Stud Dogs.png',
          alt: 'NAMO Xcite for Stud Dogs',
          shortName: 'Stud Dogs',
        },
        {
          id: 'pet-fish-oil',
          title: 'NAMO Pure Fish Oil',
          titleAccent: 'Coat & Joint Wellness Supplement',
          tagline: 'Rich in Active EPA & DHA for Dogs & Cats',
          desc: 'Pure veterinary-grade fish oil extracted from Indian catfish. Delivers 23g of EPA & DHA per 100ml to soothe irritated skin, eliminate excessive shedding, lubricate hip joints, and naturally reduce systemic inflammation.',
          specs: [
            { label: 'Active EPA/DHA', val: '23g per 100ml' },
            { label: 'Application', val: 'Easy Food Add-on' },
            { label: 'Benefits', val: 'Lustrous Skin & Coat' },
          ],
          image: '/products/pets/NAMO Fish Oil.png',
          alt: 'NAMO Fish Oil',
          shortName: 'Fish Oil',
        },
      ],
    },
  ];

  // Hero Slider active slide index: 0 = Panchakavya, 1 = Natural Products, 2 = Pet Products
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Track active product index individually for each slide
  const [productIndices, setProductIndices] = useState<number[]>([0, 0, 0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSlidePaused, setIsSlidePaused] = useState(false);

  const currentSlide = heroSlides[activeSlideIndex];
  const isSlideOne = activeSlideIndex === 0;
  const activeProductIndex = productIndices[activeSlideIndex] || 0;
  const currentProduct = currentSlide.products[activeProductIndex] || currentSlide.products[0];

  const handleSelectHeroSlide = (sIndex: number) => {
    if (sIndex === activeSlideIndex) return;
    setIsTransitioning(true);
    setActiveSlideIndex(sIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 280);
  };

  const nextHeroSlide = () => {
    handleSelectHeroSlide((activeSlideIndex + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    handleSelectHeroSlide((activeSlideIndex - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSelectProduct = (index: number) => {
    if (index === activeProductIndex) return;
    setIsTransitioning(true);
    setProductIndices((prev) => {
      const next = [...prev];
      next[activeSlideIndex] = index;
      return next;
    });
    setTimeout(() => {
      setIsTransitioning(false);
    }, 280);
  };

  const nextProduct = () => {
    const total = currentSlide.products.length;
    handleSelectProduct((activeProductIndex + 1) % total);
  };

  const prevProduct = () => {
    const total = currentSlide.products.length;
    handleSelectProduct((activeProductIndex - 1 + total) % total);
  };

  // Auto-play for hero slides carousel (every 9s, pauses on hover/interaction)
  useEffect(() => {
    if (isSlidePaused) return;
    const interval = setInterval(() => {
      handleSelectHeroSlide((activeSlideIndex + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [activeSlideIndex, isSlidePaused, heroSlides.length]);

  // Helper to check if intro was already completed in this browser session
  const checkIntroDone = (): boolean => {
    if (typeof window === 'undefined') return false;
    // Allow ?intro=true in URL to force replay for testing
    if (window.location.search.includes('intro=true')) {
      try {
        sessionStorage.removeItem('namo_parallax_done');
      } catch {}
      return false;
    }
    try {
      return sessionStorage.getItem('namo_parallax_done') === 'true' || window.scrollY > 200;
    } catch {
      return false;
    }
  };

  const [isParallaxDone, setIsParallaxDone] = useState<boolean>(checkIntroDone);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    const parallaxBg = parallaxBgRef.current;
    const heroBg = heroBgRef.current;
    const fgContainer = fgContainerRef.current;
    const whiteBackdrop = whiteBackdropRef.current;
    const bigLogo = bigLogoRef.current;
    const heroContent = heroContentRef.current;
    const textVignette = textVignetteRef.current;

    if (!wrapper || !stage || !heroBg || !heroContent) {
      return;
    }

    // Always ensure global-navbar is visible if parallax is already completed or user is scrolled
    if (isParallaxDone || window.scrollY > window.innerHeight * 0.5) {
      const navEl = document.getElementById('global-navbar');
      if (navEl) {
        navEl.style.opacity = '1';
        navEl.style.pointerEvents = 'auto';
      }
    }

    // If parallax is already done, render static completed Hero directly (no pinned runway!)
    if (isParallaxDone) {
      if (parallaxBg) gsap.set(parallaxBg, { opacity: 0, display: 'none' });
      if (fgContainer) gsap.set(fgContainer, { opacity: 0, display: 'none' });
      if (whiteBackdrop) gsap.set(whiteBackdrop, { opacity: 0, display: 'none' });
      if (bigLogo) gsap.set(bigLogo, { opacity: 0, display: 'none' });
      gsap.set(heroBg, { opacity: 1, display: 'block' });
      gsap.set(heroContent, { opacity: 1, y: 0, clearProps: 'transform' });
      if (textVignette) gsap.set(textVignette, { opacity: 1, display: 'block' });

      wrapper.style.height = 'auto';
      wrapper.style.minHeight = '100vh';
      stage.style.position = 'relative';
      stage.style.height = '100vh';
      stage.style.transform = 'none';
      stage.style.top = '0';
      stage.style.left = '0';

      const navEl = document.getElementById('global-navbar');
      if (navEl) {
        navEl.style.opacity = '1';
        navEl.style.pointerEvents = 'auto';
      }
      return;
    }

    // If intro not done, verify intro elements exist
    if (!parallaxBg || !fgContainer || !whiteBackdrop || !bigLogo) {
      return;
    }

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const mm = gsap.matchMedia();

      // Mobile setup (<= 768px): Instant reveal, fully interactive without 420% pinned dead scroll space
      mm.add('(max-width: 768px)', () => {
        gsap.set(whiteBackdrop, { opacity: 0, display: 'none' });
        gsap.set(bigLogo, { opacity: 0, display: 'none' });
        gsap.set(parallaxBg, { opacity: 0, display: 'none' });
        gsap.set(fgContainer, { opacity: 0, display: 'none' });
        gsap.set(heroBg, { opacity: 1, display: 'block' });
        gsap.set(heroContent, { opacity: 1, y: 0 });
        if (textVignette) gsap.set(textVignette, { opacity: 1, display: 'block' });

        const navEl = document.getElementById('global-navbar');
        if (navEl) {
          navEl.style.opacity = '1';
          navEl.style.pointerEvents = 'auto';
        }
      });

      // Desktop setup (> 768px): Master Pinned Scroll Timeline with 7 Cinematic Parallax Phases
      mm.add('(min-width: 769px)', () => {
        if (prefersReducedMotion) {
          gsap.set(whiteBackdrop, { opacity: 0, display: 'none' });
          gsap.set(bigLogo, { opacity: 0, display: 'none' });
          gsap.set(parallaxBg, { opacity: 0, display: 'none' });
          gsap.set(fgContainer, { opacity: 0, display: 'none' });
          gsap.set(heroBg, { opacity: 1, display: 'block' });
          gsap.set(heroContent, { opacity: 1, y: 0 });
          if (textVignette) gsap.set(textVignette, { opacity: 1, display: 'block' });
          const navEl = document.getElementById('global-navbar');
          if (navEl) {
            navEl.style.opacity = '1';
            navEl.style.pointerEvents = 'auto';
          }
          return;
        }

        // Initial Reset for Desktop Parallax
        gsap.set(parallaxBg, { yPercent: 0, scale: 1, opacity: 1, display: 'block', transformOrigin: 'center top', force3D: true });
        gsap.set(heroBg, { opacity: 0, display: 'block', force3D: true });
        gsap.set(fgContainer, { yPercent: 0, scale: 1, opacity: 1, display: 'block', transformOrigin: 'center bottom', force3D: true });
        gsap.set(whiteBackdrop, { opacity: 0, display: 'block', force3D: true });
        gsap.set(bigLogo, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          opacity: 0,
          display: 'flex',
          scale: 0.85,
          transformOrigin: '50% 50%',
          force3D: true,
        });
        gsap.set(heroContent, { opacity: 0, y: 28, force3D: true });
        if (textVignette) gsap.set(textVignette, { opacity: 0, display: 'block', force3D: true });

        let isCompleting = false;

        const completeParallax = (self: ScrollTrigger) => {
          if (isCompleting) return;
          isCompleting = true;

          try {
            sessionStorage.setItem('namo_parallax_done', 'true');
          } catch {}

          const runway = self.end - self.start;
          const currentY = window.scrollY || window.pageYOffset;
          const targetY = Math.max(0, currentY - runway);

          // Kill ScrollTrigger and timeline to remove pinSpacing
          const st = tl.scrollTrigger;
          if (st) {
            st.kill();
          }
          tl.kill();

          // Set all visual elements to their finalized, completed state
          gsap.set(whiteBackdrop, { opacity: 0, display: 'none' });
          gsap.set(bigLogo, { opacity: 0, display: 'none' });
          gsap.set(parallaxBg, { opacity: 0, display: 'none' });
          gsap.set(fgContainer, { opacity: 0, display: 'none' });
          gsap.set(heroBg, { opacity: 1, display: 'block' });
          gsap.set(heroContent, { opacity: 1, y: 0, clearProps: 'transform' });
          if (textVignette) gsap.set(textVignette, { opacity: 1, display: 'block' });

          const navEl = document.getElementById('global-navbar');
          if (navEl) {
            navEl.style.opacity = '1';
            navEl.style.pointerEvents = 'auto';
          }

          if (wrapper) {
            wrapper.style.height = 'auto';
            wrapper.style.minHeight = '100vh';
          }
          if (stage) {
            stage.style.position = 'relative';
            stage.style.height = '100vh';
            stage.style.transform = 'none';
            stage.style.top = '0';
            stage.style.left = '0';
          }

          // Adjust scroll position synchronously so user experiences zero visual jump
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(targetY, { immediate: true, force: true });
          } else {
            window.scrollTo({ top: targetY, left: 0, behavior: 'instant' as ScrollBehavior });
          }

          setIsParallaxDone(true);

          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            if (lenis) lenis.resize();
          });
        };

        // Master Pinned Scroll Timeline with Expanded Runway and Enhanced Scrub Damping
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: '+=420%',
            pin: stage,
            pinSpacing: true,
            scrub: 1.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onLeave: (self) => {
              completeParallax(self);
            },
            onUpdate: (self) => {
              // As soon as the hero is revealed and settled, complete the intro so scrolling back never triggers it!
              if (self.progress >= 0.95 && !isCompleting) {
                completeParallax(self);
                return;
              }

              const navEl = document.getElementById('global-navbar');
              if (!navEl) return;

              // Phase 4: Navbar reveals smoothly as the flying logo reaches its center slot
              // Starts fading in at progress 0.60, reaches 100% by progress 0.84
              if (self.progress >= 0.84) {
                navEl.style.opacity = '1';
                navEl.style.pointerEvents = 'auto';
              } else if (self.progress >= 0.60) {
                const p = (self.progress - 0.60) / (0.84 - 0.60);
                navEl.style.opacity = String(p);
                navEl.style.pointerEvents = p > 0.6 ? 'auto' : 'none';
              } else {
                navEl.style.opacity = '0';
                navEl.style.pointerEvents = 'none';
              }
            },
          },
        });

        // =======================================================================
        // PHASE 1: Landscape Parallax (0.0 -> 0.32)
        // Desktop: Translucent NAMO Over Misty Mountain Sunrise
        // Mobile: Golden Mists Over Mountain Forests
        // Foreground drops away smoothly with linear scroll tracking
        // =======================================================================
        tl.to(
          fgContainer,
          {
            yPercent: 112,
            scale: 1.06,
            ease: 'none',
            duration: 0.32,
          },
          0
        );

        tl.to(
          parallaxBg,
          {
            yPercent: -12,
            scale: 1.10,
            ease: 'none',
            duration: 0.32,
          },
          0
        );

        // =======================================================================
        // PHASE 2: Warm Ivory Glow Backdrop FADES IN for Logo (0.24 -> 0.44)
        // =======================================================================
        tl.to(
          whiteBackdrop,
          {
            opacity: 1,
            ease: 'power1.inOut',
            duration: 0.20,
          },
          0.24
        );

        // =======================================================================
        // PHASE 3: Big Center NAMO Logo Appears on Warm Ivory Glow (0.36 -> 0.52)
        // =======================================================================
        tl.fromTo(
          bigLogo,
          {
            opacity: 0,
            scale: 0.85,
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          {
            opacity: 1,
            scale: 1,
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
            ease: 'power1.out',
            duration: 0.16,
          },
          0.36
        );

        // Dedicated Center Stage Pause: Logo rests proudly in center before flight (0.52 -> 0.58)
        tl.to({}, { duration: 0.06 });

        // =======================================================================
        // PHASE 4: The Logo FLIES Upward and Shrinks into Navbar Center! (0.58 -> 0.84)
        // Smooth, steady power1.inOut curve avoids aggressive speed spikes
        // =======================================================================
        tl.to(
          bigLogo,
          {
            xPercent: -50,
            yPercent: -50,
            y: () => {
              const navLogo = document.getElementById('navbar-center-logo');
              if (navLogo) {
                const rect = navLogo.getBoundingClientRect();
                const logoCenterY = rect.top + rect.height / 2;
                return logoCenterY - window.innerHeight / 2;
              }
              return -(window.innerHeight / 2 - 76);
            },
            x: () => {
              const navLogo = document.getElementById('navbar-center-logo');
              if (navLogo) {
                const rect = navLogo.getBoundingClientRect();
                const logoCenterX = rect.left + rect.width / 2;
                return logoCenterX - window.innerWidth / 2;
              }
              return 0;
            },
            scale: () => {
              const navLogo = document.getElementById('navbar-center-logo');
              if (navLogo) {
                const rect = navLogo.getBoundingClientRect();
                return (rect.height / 240) || 0.28;
              }
              return 0.28;
            },
            ease: 'power1.inOut',
            duration: 0.26,
          },
          0.58
        );

        // Dissolve proxy logo right as real navbar logo reaches 100% opacity
        tl.to(
          bigLogo,
          {
            opacity: 0,
            duration: 0.04,
            ease: 'power1.out',
          },
          0.84
        );

        // =======================================================================
        // PHASE 5: Warm Ivory Glow FADES OUT & Farmland FADES IN (0.58 -> 0.78)
        // Strictly keeping Warm Ivory Glow ONLY on the logo background!
        // Parallax sunrise background is swapped out for Golden Mists Over Mountain Forests!
        // =======================================================================
        tl.to(
          whiteBackdrop,
          {
            opacity: 0,
            ease: 'power1.inOut',
            duration: 0.20,
          },
          0.58
        );

        tl.to(
          heroBg,
          {
            opacity: 1,
            ease: 'power1.inOut',
            duration: 0.20,
          },
          0.58
        );

        tl.to(
          parallaxBg,
          {
            opacity: 0,
            duration: 0.10,
          },
          0.58
        );

        // =======================================================================
        // PHASE 6: Home Page Hero Section Texts FADE IN (0.72 -> 0.88)
        // Displays NAMO ORGANIC headline, badge, subtitle, paragraph, CTA on Farmland!
        // =======================================================================
        if (textVignette) {
          tl.fromTo(
            textVignette,
            { opacity: 0 },
            { opacity: 1, duration: 0.16, ease: 'power1.out' },
            0.72
          );
        }

        tl.fromTo(
          heroContent,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: 'power1.out',
          },
          0.72
        );

        // =======================================================================
        // PHASE 7: Settle & Hold (0.88 -> 1.0)
        // Hero section fully displayed on Golden Mists background with navbar docked
        // Then unpins seamlessly into NaturePreserved!
        // =======================================================================
        tl.to({}, { duration: 0.12 });
      });
    }, wrapper);

    return () => {
      ctx.revert();
      const navEl = document.getElementById('global-navbar');
      if (navEl) {
        navEl.style.opacity = '1';
        navEl.style.pointerEvents = 'auto';
      }
    };
  }, [isParallaxDone]);

  return (
    <section
      ref={wrapperRef}
      id="namo-parallax-hero-wrapper"
      onMouseEnter={() => setIsSlidePaused(true)}
      onMouseLeave={() => setIsSlidePaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#F8F9F3',
        overflow: 'hidden',
      }}
    >
      {/* 100vh Pinned Stage Container */}
      <div
        ref={stageRef}
        id="namo-parallax-hero-stage"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8F9F3',
        }}
      >
        {/* ===================================================================
            PARALLAX INTRO ONLY LAYERS:
            Only mounted when user opens website newly. Once completed, they are removed.
            =================================================================== */}
        {!isParallaxDone && (
          <>
            {/* LAYER 1A (PARALLAX BACKGROUND) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              <picture
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  overflow: 'hidden',
                }}
              >
                {/* Mobile View: Golden Mists Over Mountain Forests */}
                <source
                  media="(max-width: 768px)"
                  srcSet="/assets/Golden%20Mists%20Over%20Mountain%20Forests.png"
                />
                {/* Desktop View: Translucent NAMO Over Misty Mountain Sunrise */}
                <source
                  media="(min-width: 769px)"
                  srcSet="/assets/Translucent%20NAMO%20Over%20Misty%20Mountain%20Sunrise.png"
                />
                <img
                  ref={parallaxBgRef}
                  src={
                    isMobile
                      ? '/assets/Golden Mists Over Mountain Forests.png'
                      : '/assets/Translucent NAMO Over Misty Mountain Sunrise.png'
                  }
                  alt={
                    isMobile
                      ? 'Golden Mists Over Mountain Forests'
                      : 'Translucent NAMO Over Misty Mountain Sunrise'
                  }
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 45%',
                    willChange: 'transform, opacity',
                    transform: 'translate3d(0, 0, 0)',
                    display: 'block',
                  }}
                />
              </picture>
            </div>

            {/* LAYER 3 (FOREGROUND): Lush Forest Floor Border Overlay */}
            <div
              ref={fgContainerRef}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 4,
                pointerEvents: 'none',
              }}
            >
              <img
                ref={fgImgRef}
                src="/assets/Lush Forest Floor Border Overlay.png"
                alt="Lush Forest Floor Border Overlay"
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center bottom',
                  willChange: 'transform',
                  transform: 'translate3d(0, 0, 0)',
                  display: 'block',
                }}
              />
            </div>

            {/* LAYER 4: Warm Ivory Glow Backdrop (LOGO BACKGROUND ONLY!) */}
            <div
              ref={whiteBackdropRef}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 5,
                opacity: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                backgroundColor: '#F8F6F0',
                willChange: 'opacity',
              }}
            >
              <img
                src="/assets/Warm Ivory Glow Background.png"
                alt="Warm Ivory Glow Background"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                }}
              />
            </div>

            {/* LAYER 5: Big Center NAMO Logo */}
            <div
              ref={bigLogoRef}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 6,
                opacity: 0,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                willChange: 'transform, opacity',
              }}
            >
              <img
                src="/assets/Fashions__11_-removebg-preview.png"
                alt="NAMO Natural Agriculture & Modern Organic"
                style={{
                  width: '240px',
                  height: '240px',
                  maxWidth: 'min(70vw, 300px)',
                  maxHeight: 'min(70vw, 300px)',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 14px 28px rgba(34, 46, 20, 0.10))',
                }}
              />
            </div>
          </>
        )}

        {/* ===================================================================
            LAYER 1B (HERO SECTION BACKGROUND): Light-Themed Organic Farmland
            Lush sunlit rolling green hills and tea plantation landscape!
            =================================================================== */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          {heroSlides.map((slide, sIndex) => {
            const isSlideActive = sIndex === activeSlideIndex;
            return (
              <img
                key={slide.id}
                ref={sIndex === 0 ? heroBgRef : undefined}
                src={slide.bgImage}
                alt={`${slide.tabLabel} Background`}
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: isMobile ? '65% center' : 'center center',
                  willChange: 'opacity',
                  opacity: isParallaxDone ? (isSlideActive ? 1 : 0) : (sIndex === 0 ? 0 : 0),
                  transition: 'opacity 0.75s ease-in-out',
                  display: 'block',
                }}
              />
            );
          })}
        </div>

        {/* ===================================================================
            LAYER 2: Soft Luminous Text Vignette Gradient
            Ensures crystal-clear dark typography contrast on left over sunlit landscape
            =================================================================== */}
        <div
          ref={textVignetteRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            background: isMobile
              ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.82) 48%, rgba(255, 255, 255, 0.20) 100%)'
              : 'linear-gradient(to right, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 38%, rgba(255, 255, 255, 0.35) 62%, transparent 85%)',
            pointerEvents: 'none',
            opacity: isParallaxDone ? 1 : 0,
            willChange: 'opacity',
          }}
        />

        {/* ===================================================================
            LAYER 6: HOME PAGE HERO SECTION — LIGHT THEMED ORGANIC SHOWCASE
            Left: Dynamic active product narrative, technical specs, CTAs
            Right: 3-Bottle panoramic showcase (center active + left/right side-back) with stage arrows
            (Bottom carousel bar completely removed; no wood stage)
            =================================================================== */}
        <div
          ref={heroContentRef}
          className="hero-main-container"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            width: '100%',
            height: '100%',
            maxWidth: '1560px',
            margin: '0 auto',
            padding: isMobile
              ? 'clamp(6.8rem, 13vh, 8.2rem) 1rem 1.25rem 1rem'
              : 'clamp(7.4rem, 13.5vh, 9.0rem) clamp(1.8rem, 3.5vw, 4.5rem) clamp(1.2rem, 2.5vh, 2.0rem)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'space-between' : 'space-between',
            boxSizing: 'border-box',
            opacity: isParallaxDone ? 1 : 0,
            overflowY: isMobile ? 'auto' : 'hidden',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform, opacity',
            pointerEvents: 'auto',
          }}
        >
          {/* LEFT/TOP: Product Details & Action Buttons */}
          <div
            className="hero-content-inner"
            style={{
              flex: isMobile ? 'none' : (isSlideOne ? '0 1 54%' : '0 1 50%'),
              width: '100%',
              maxWidth: isMobile ? '560px' : (isSlideOne ? '640px' : '620px'),
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
              margin: isMobile ? '0 auto' : '0',
              zIndex: 12,
            }}
          >
            {/* Product Title & Accent */}
            <div
              style={{
                width: '100%',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 0.28s ease, transform 0.28s ease',
              }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: isMobile ? 'clamp(1.30rem, 5.0vw, 1.60rem)' : 'clamp(2.15rem, 3.0vw, 3.10rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: '#18240A',
                  margin: isMobile ? '0 0 0.15rem 0' : '0 0 0.45rem 0',
                  lineHeight: isMobile ? 1.15 : 1.12,
                  textShadow: '0 2px 18px rgba(255, 255, 255, 0.95)',
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                {currentProduct.title}{' '}
                <span
                  style={{
                    color: '#1B4D35',
                    display: isMobile ? 'inline' : 'block',
                    fontSize: isMobile ? '0.92em' : '0.90em',
                  }}
                >
                  {currentProduct.titleAccent}
                </span>
              </h1>

              {/* Tagline */}
              <div
                style={{
                  color: '#4E6E10',
                  fontSize: isMobile ? '0.72rem' : 'clamp(0.95rem, 1.15vw, 1.12rem)',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  marginBottom: isMobile ? '0.30rem' : '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  gap: '0.5rem',
                }}
              >
                <span>{currentProduct.tagline}</span>
              </div>

              {/* Product Narrative */}
              <p
                style={{
                  fontSize: isMobile ? '0.78rem' : 'clamp(0.92rem, 1.05vw, 1.02rem)',
                  lineHeight: isMobile ? 1.45 : 1.55,
                  color: '#28381A',
                  maxWidth: isMobile ? '520px' : '600px',
                  margin: isMobile ? '0 auto 0.65rem auto' : '0 0 1.25rem 0',
                  fontWeight: 450,
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                {currentProduct.desc}
              </p>

              {/* Technical Spec Highlight Pills (Strictly 3 Columns, Full Text, Zero Ellipsis Cut-off) */}
              <div
                className="hero-specs-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: isMobile ? '0.4rem' : 'clamp(0.65rem, 1vw, 0.9rem)',
                  maxWidth: isMobile ? '100%' : '600px',
                  width: '100%',
                  marginBottom: isMobile ? '0.65rem' : '1.5rem',
                }}
              >
                {currentProduct.specs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1.5px solid rgba(103, 160, 32, 0.35)',
                      borderRadius: isMobile ? '12px' : '16px',
                      padding: isMobile ? '0.45rem 0.35rem' : 'clamp(0.65rem, 1.1vh, 0.85rem) clamp(0.55rem, 0.9vw, 0.95rem)',
                      boxShadow: '0 6px 24px rgba(24, 36, 10, 0.08)',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: isMobile ? '58px' : '68px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        color: '#4E6E10',
                        fontSize: isMobile ? '0.58rem' : 'clamp(0.66rem, 0.74vw, 0.74rem)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: isMobile ? '0.15rem' : '0.25rem',
                        lineHeight: 1.2,
                        textAlign: 'center',
                        width: '100%',
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        color: '#18240A',
                        fontSize: isMobile ? '0.74rem' : 'clamp(0.86rem, 0.98vw, 0.98rem)',
                        fontWeight: 800,
                        lineHeight: 1.25,
                        textAlign: 'center',
                        width: '100%',
                        wordBreak: 'break-word',
                      }}
                    >
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Forced strictly in the Same Line on Desktop & Mobile */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: isMobile ? '0.45rem' : 'clamp(0.75rem, 1.2vw, 1.1rem)',
                flexWrap: 'nowrap',
                width: '100%',
              }}
            >
              <Link
                to={currentSlide.categoryUrl}
                className="hero-btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '0.35rem' : '0.55rem',
                  backgroundColor: '#FFDB15',
                  border: '1.5px solid #FFDB15',
                  color: '#18240A',
                  padding: isMobile ? '0.62rem 0.5rem' : 'clamp(0.82rem, 1.3vh, 0.96rem) clamp(1.35rem, 1.8vw, 2.1rem)',
                  borderRadius: '9999px',
                  fontSize: isMobile ? '0.68rem' : 'clamp(0.82rem, 0.96vw, 0.92rem)',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(255, 219, 21, 0.45)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  flex: isMobile ? '1 1 50%' : '0 0 auto',
                  minWidth: 0,
                }}
              >
                <span>{isMobile ? 'Specifications' : 'Explore Specifications'}</span>
                <ArrowRight size={isMobile ? 12 : 15} color="#18240A" />
              </Link>

              <Link
                to="/contact"
                className="hero-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '0.35rem' : '0.55rem',
                  backgroundColor: '#1B4D35',
                  border: '1.5px solid #1B4D35',
                  color: '#FFFFFF',
                  padding: isMobile ? '0.62rem 0.5rem' : 'clamp(0.82rem, 1.3vh, 0.96rem) clamp(1.35rem, 1.8vw, 2.1rem)',
                  borderRadius: '9999px',
                  fontSize: isMobile ? '0.68rem' : 'clamp(0.82rem, 0.96vw, 0.92rem)',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(27, 77, 53, 0.25)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  flex: isMobile ? '1 1 50%' : '0 0 auto',
                  minWidth: 0,
                }}
              >
                <span>{isMobile ? 'Bulk Supply' : 'Inquire Bulk Supply'}</span>
              </Link>
            </div>
          </div>          {/* RIGHT/BOTTOM: Panoramic Product Showcase (Slide 1 reverted to original; Slide 2 & 3 dominant) */}
          <div
            className="hero-showcase-stage"
            style={{
              flex: isMobile ? '1 1 auto' : (isSlideOne ? '0 1 46%' : '0 1 50%'),
              width: '100%',
              maxWidth: isMobile ? '460px' : 'none',
              height: isMobile ? 'auto' : '100%',
              minHeight: isMobile
                ? (isSlideOne ? 'clamp(255px, 34vh, 310px)' : 'clamp(270px, 35vh, 320px)')
                : 'none',
              marginTop: isMobile ? '0.4rem' : '0',
              marginBottom: isMobile ? '0.2rem' : '0',
              margin: isMobile ? 'auto auto' : '0',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'auto',
            }}
          >
            {/* Stage Showcase Area */}
            <div
              className="hero-showcase-inner"
              style={{
                position: 'relative',
                width: isMobile ? '100%' : (isSlideOne ? 'clamp(360px, 36vw, 500px)' : '100%'),
                maxWidth: isMobile ? '360px' : (isSlideOne ? '500px' : '720px'),
                height: isMobile
                  ? (isSlideOne ? 'clamp(235px, 30vh, 275px)' : 'clamp(255px, 33vh, 305px)')
                  : (isSlideOne ? 'clamp(380px, 48vh, 480px)' : 'clamp(430px, 53vh, 520px)'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              {/* Floating Stage Carousel Arrows */}
              <button
                type="button"
                onClick={prevProduct}
                aria-label="Previous Product"
                className="stage-nav-arrow prev-arrow"
                style={{
                  position: 'absolute',
                  left: isMobile
                    ? (isSlideOne ? 'clamp(4px, 1.8vw, 10px)' : 'clamp(2px, 1.2vw, 8px)')
                    : (isSlideOne ? '-20px' : '-26px'),
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: isMobile ? '38px' : (isSlideOne ? '50px' : '52px'),
                  height: isMobile ? '38px' : (isSlideOne ? '50px' : '52px'),
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(27, 77, 53, 0.25)',
                  color: '#1B4D35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 35,
                  boxShadow: '0 8px 24px rgba(24, 36, 10, 0.16)',
                  transition: 'all 0.25s ease',
                }}
              >
                <ChevronLeft size={isMobile ? 20 : 28} color="#1B4D35" />
              </button>

              <button
                type="button"
                onClick={nextProduct}
                aria-label="Next Product"
                className="stage-nav-arrow next-arrow"
                style={{
                  position: 'absolute',
                  right: isMobile
                    ? (isSlideOne ? 'clamp(4px, 1.8vw, 10px)' : 'clamp(2px, 1.2vw, 8px)')
                    : (isSlideOne ? '-20px' : '-26px'),
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: isMobile ? '38px' : (isSlideOne ? '50px' : '52px'),
                  height: isMobile ? '38px' : (isSlideOne ? '50px' : '52px'),
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(27, 77, 53, 0.25)',
                  color: '#1B4D35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 35,
                  boxShadow: '0 8px 24px rgba(24, 36, 10, 0.16)',
                  transition: 'all 0.25s ease',
                }}
              >
                <ChevronRight size={isMobile ? 20 : 28} color="#1B4D35" />
              </button>

              {/* Showcase Products (Continuous Circular Hardware-Accelerated 3D Carousel) */}
              {currentSlide.products.map((p, idx) => {
                const total = currentSlide.products.length;
                let diff = (idx - activeProductIndex + total) % total;
                if (diff > total / 2) {
                  diff -= total;
                }

                const isCenter = diff === 0;
                const isRight = diff === 1;
                const isLeft = diff === -1;
                const isFarRight = diff >= 2;
                const isVisible = isCenter || isRight || isLeft;

                // Slot transform determination
                let slotTransform = '';
                let slotOpacity = 0;
                let slotZIndex = 1;
                let slotPointerEvents: 'default' | 'pointer' | 'none' = 'none';

                if (isSlideOne) {
                  if (isCenter) {
                    slotTransform = isMobile
                      ? 'translate(-50%, -50%) scale(1.0) translateZ(0)'
                      : 'translate(-50%, -50%) scale(1.02) translateZ(0)';
                    slotOpacity = 1;
                    slotZIndex = 12;
                    slotPointerEvents = 'default';
                  } else if (isRight) {
                    slotTransform = isMobile
                      ? 'translate(calc(-50% + clamp(66px, 18vw, 82px)), -50%) scale(0.70) rotate(3deg) translateZ(0)'
                      : 'translate(calc(-50% + clamp(115px, 9.5vw, 150px)), -50%) scale(0.74) rotate(4deg) translateZ(0)';
                    slotOpacity = 0.88;
                    slotZIndex = 5;
                    slotPointerEvents = 'pointer';
                  } else if (isLeft) {
                    slotTransform = isMobile
                      ? 'translate(calc(-50% - clamp(66px, 18vw, 82px)), -50%) scale(0.70) rotate(-3deg) translateZ(0)'
                      : 'translate(calc(-50% - clamp(115px, 9.5vw, 150px)), -50%) scale(0.74) rotate(-4deg) translateZ(0)';
                    slotOpacity = 0.88;
                    slotZIndex = 5;
                    slotPointerEvents = 'pointer';
                  } else if (isFarRight) {
                    slotTransform = 'translate(calc(-50% + 280px), -50%) scale(0.40) translateZ(0)';
                    slotOpacity = 0;
                    slotZIndex = 1;
                    slotPointerEvents = 'none';
                  } else {
                    slotTransform = 'translate(calc(-50% - 280px), -50%) scale(0.40) translateZ(0)';
                    slotOpacity = 0;
                    slotZIndex = 1;
                    slotPointerEvents = 'none';
                  }
                } else {
                  // Slides 2 & 3: Dominant Center & Fluid Carousel
                  if (isCenter) {
                    slotTransform = isMobile
                      ? 'translate(-50%, -50%) scale(1.08) translateZ(0)'
                      : 'translate(-50%, -50%) scale(1.20) translateZ(0)';
                    slotOpacity = 1;
                    slotZIndex = 25;
                    slotPointerEvents = 'default';
                  } else if (isRight) {
                    slotTransform = isMobile
                      ? 'translate(calc(-50% + clamp(95px, 24vw, 125px)), -50%) scale(0.58) rotate(2deg) translateZ(0)'
                      : 'translate(calc(-50% + clamp(185px, 17vw, 240px)), -50%) scale(0.62) rotate(3deg) translateZ(0)';
                    slotOpacity = 0.45;
                    slotZIndex = 6;
                    slotPointerEvents = 'pointer';
                  } else if (isLeft) {
                    slotTransform = isMobile
                      ? 'translate(calc(-50% - clamp(95px, 24vw, 125px)), -50%) scale(0.58) rotate(-2deg) translateZ(0)'
                      : 'translate(calc(-50% - clamp(185px, 17vw, 240px)), -50%) scale(0.62) rotate(-3deg) translateZ(0)';
                    slotOpacity = 0.45;
                    slotZIndex = 6;
                    slotPointerEvents = 'pointer';
                  } else if (isFarRight) {
                    slotTransform = isMobile
                      ? 'translate(calc(-50% + 190px), -50%) scale(0.35) translateZ(0)'
                      : 'translate(calc(-50% + 360px), -50%) scale(0.40) translateZ(0)';
                    slotOpacity = 0;
                    slotZIndex = 1;
                    slotPointerEvents = 'none';
                  } else {
                    slotTransform = isMobile
                      ? 'translate(calc(-50% - 190px), -50%) scale(0.35) translateZ(0)'
                      : 'translate(calc(-50% - 360px), -50%) scale(0.40) translateZ(0)';
                    slotOpacity = 0;
                    slotZIndex = 1;
                    slotPointerEvents = 'none';
                  }
                }

                return (
                  <div
                    key={p.id}
                    className={`showcase-bottle-slot ${isCenter ? 'is-active' : 'is-standby'}`}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: slotTransform,
                      zIndex: slotZIndex,
                      opacity: slotOpacity,
                      cursor: slotPointerEvents === 'pointer' ? 'pointer' : 'default',
                      pointerEvents: slotPointerEvents === 'none' ? 'none' : 'auto',
                      transition: 'transform 0.52s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.38s ease',
                      willChange: 'transform, opacity',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      if (!isCenter && isVisible) handleSelectProduct(idx);
                    }}
                  >
                    {/* Ambient Glow for Active Center Product (Slide 2 & 3 only) */}
                    {!isSlideOne && isCenter && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: isMobile ? '240px' : '440px',
                          height: isMobile ? '240px' : '440px',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0) 70%)',
                          zIndex: -1,
                          pointerEvents: 'none',
                          filter: 'blur(20px)',
                        }}
                      />
                    )}

                    {/* Product Graphic (Fixed base size for 60fps GPU transform scaling with zero layout reflow) */}
                    <img
                      src={p.image}
                      alt={p.alt}
                      style={{
                        height: isMobile
                          ? 'clamp(210px, 27vh, 250px)'
                          : (isSlideOne ? 'clamp(350px, 45vh, 440px)' : 'clamp(365px, 47vh, 450px)'),
                        width: 'auto',
                        maxWidth: isSlideOne
                          ? '100%'
                          : (isMobile ? '340px' : 'clamp(520px, 48vw, 660px)'),
                        objectFit: 'contain',
                        filter: isSlideOne
                          ? (isCenter
                            ? 'drop-shadow(0 18px 28px rgba(24, 36, 10, 0.32)) drop-shadow(0 4px 10px rgba(24, 36, 10, 0.18))'
                            : 'brightness(0.92) contrast(0.98) drop-shadow(0 12px 18px rgba(24, 36, 10, 0.20))')
                          : (isCenter
                            ? 'drop-shadow(0 24px 34px rgba(24, 36, 10, 0.38)) drop-shadow(0 6px 12px rgba(24, 36, 10, 0.20)) brightness(1.03)'
                            : 'brightness(0.85) contrast(0.94) drop-shadow(0 10px 16px rgba(24, 36, 10, 0.18))'),
                        userSelect: 'none',
                        transition: 'filter 0.35s ease',
                      }}
                    />

                    {/* Natural Soft Ground Contact Shadows */}
                    <div
                      style={{
                        width: isSlideOne
                          ? (isCenter ? '65%' : '54%')
                          : (isCenter ? '76%' : '48%'),
                        height: isMobile
                          ? (isCenter ? '12px' : '8px')
                          : (isCenter ? (isSlideOne ? '18px' : '20px') : (isSlideOne ? '12px' : '10px')),
                        borderRadius: '50%',
                        background: isCenter
                          ? 'radial-gradient(ellipse at center, rgba(20, 35, 15, 0.42) 0%, rgba(20, 35, 15, 0.10) 55%, transparent 75%)'
                          : 'radial-gradient(ellipse at center, rgba(20, 35, 15, 0.24) 0%, transparent 70%)',
                        filter: isMobile ? 'blur(3px)' : (isCenter ? 'blur(5px)' : 'blur(3px)'),
                        marginTop: isMobile ? (isCenter ? '-5px' : '-3px') : (isCenter ? '-8px' : '-4px'),
                        pointerEvents: 'none',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.35s ease, width 0.4s ease',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Global Hero Slider Navigation Control (Prev / Next Slide & Dots) */}
        <div
          className="hero-slider-bottom-controls"
          style={{
            position: 'absolute',
            bottom: isMobile ? '10px' : '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(103, 160, 32, 0.32)',
            padding: '0.32rem 0.95rem',
            borderRadius: '9999px',
            boxShadow: '0 8px 24px rgba(24, 36, 10, 0.12)',
            zIndex: 35,
            userSelect: 'none',
          }}
        >
          <button
            type="button"
            onClick={prevHeroSlide}
            aria-label="Previous Slide Category"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1B4D35',
              display: 'flex',
              alignItems: 'center',
              padding: '0.2rem',
              transition: 'transform 0.2s ease',
            }}
            className="slider-arrow-btn"
          >
            <ChevronLeft size={16} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            {heroSlides.map((s, dIdx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleSelectHeroSlide(dIdx)}
                aria-label={`Go to ${s.tabLabel}`}
                style={{
                  width: dIdx === activeSlideIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: dIdx === activeSlideIndex ? '#1B4D35' : 'rgba(27, 77, 53, 0.28)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.35, 0.64, 1)',
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextHeroSlide}
            aria-label="Next Slide Category"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1B4D35',
              display: 'flex',
              alignItems: 'center',
              padding: '0.2rem',
              transition: 'transform 0.2s ease',
            }}
            className="slider-arrow-btn"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Micro-interaction Hover & Keyframe Styles */}
      <style>{`
        #namo-parallax-hero-wrapper {
          background-color: #F8F9F3 !important;
          border: none !important;
          outline: none !important;
          overflow-x: hidden !important;
        }
        #namo-parallax-hero-stage {
          background-color: #F8F9F3 !important;
          border: none !important;
          outline: none !important;
          overflow-x: hidden !important;
        }
        .hero-cta-group {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
        }
        .hero-specs-grid {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        }
        @media (max-width: 768px) {
          #namo-parallax-hero-wrapper {
            background-color: #F8F9F3 !important;
            border: none !important;
            outline: none !important;
            overflow-x: hidden !important;
          }
          #namo-parallax-hero-stage {
            min-height: 100vh !important;
            height: auto !important;
            background-color: #F8F9F3 !important;
            border: none !important;
            outline: none !important;
            overflow-x: hidden !important;
          }
          .hero-main-container {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: clamp(7.6rem, 14vh, 8.8rem) 1rem 1.25rem 1rem !important;
            border: none !important;
            outline: none !important;
            overflow-x: hidden !important;
          }
          .hero-content-inner {
            width: 100% !important;
            max-width: 580px !important;
            margin: 0 auto !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-showcase-stage {
            flex: 1 1 auto !important;
            width: 100% !important;
            max-width: 460px !important;
            height: auto !important;
            min-height: clamp(270px, 35vh, 320px) !important;
            margin: auto auto !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
          }
          .hero-showcase-inner {
            position: relative !important;
            width: 100% !important;
            max-width: 380px !important;
            height: clamp(255px, 33vh, 305px) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 auto !important;
          }
          .hero-specs-grid {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 0.35rem !important;
            width: 100% !important;
            margin-bottom: 0.55rem !important;
          }
          .hero-cta-group {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 0.45rem !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            flex: 1 1 50% !important;
            min-width: 0 !important;
            padding: 0.62rem 0.4rem !important;
            font-size: 0.68rem !important;
            letter-spacing: 0.04em !important;
            justify-content: center !important;
            white-space: nowrap !important;
            border-radius: 9999px !important;
          }
        }
        .stage-nav-arrow:hover {
          background-color: #1B4D35 !important;
          border-color: #1B4D35 !important;
          color: #FFDB15 !important;
          transform: translateY(-50%) scale(1.12);
          box-shadow: 0 10px 28px rgba(27, 77, 53, 0.35) !important;
        }
        .stage-nav-arrow:hover svg {
          stroke: #FFDB15 !important;
        }
        .showcase-bottle-slot.is-standby:hover {
          opacity: 0.72 !important;
        }
        .showcase-bottle-slot.is-standby:hover img {
          filter: brightness(0.92) contrast(0.96) blur(0.5px) !important;
        }
        .hero-btn-primary:hover {
          background-color: #ffe033 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 219, 21, 0.55) !important;
        }
        .hero-btn-secondary:hover {
          background-color: #246545 !important;
          border-color: #246545 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(27, 77, 53, 0.35) !important;
        }
      `}</style>
    </section>
  );
};
