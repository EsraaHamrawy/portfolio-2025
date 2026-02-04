import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';
import GlobalModal from '../Modal/GlobalModal.jsx';

// Constants
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

// Card Data
const cardData = [
  {
    title: "Aura Store",
    description: "Learning e-commerce demo",
    details: {
      overview: "A comprehensive e-commerce demo project built to master modern React development, implementing full cart functionality, product management, and complex state handling.",
      achievements: [
        "Built complete frontend application from scratch for learning purposes",
        "Implemented complex form validation to understand advanced React patterns",
        "Practiced code splitting and performance optimization techniques",
        "Created reusable component architecture following best practices",
        "Successfully deployed full-stack demo application"
      ],
      techStack: ["React 18", "TypeScript", "React Hook Form", "Zod Validation", "Context API", "CSS Modules", "Vite", "Mock API"],
      roleNotes: "Self-directed learning project to master modern React development. Independently architected and built a full e-commerce demo to understand complex state management, form validation, and performance optimization. This project served as hands-on practice for implementing production-grade patterns including TypeScript strict typing, reusable components, and responsive design principles."
    },
    label: "Learning Project",
    link: "https://e-comarce-front.vercel.app/",
    img: "aura.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Degetal Center",
    description: "Full-stack learning initiative",
    details: {
      overview: "Comprehensive e-commerce platform developed to practice full-stack concepts including React with Redux, team collaboration, and product development processes.",
      achievements: [
        "Mastered Redux for complex application state management",
        "Collaborated effectively with design and product teams",
        "Implemented user authentication and authorization flows",
        "Built responsive layouts from design specifications",
        "Practiced agile development methodologies in team setting"
      ],
      techStack: ["React", "Redux Toolkit", "React Router DOM", "MUI",  "Team Project Management"],
      roleNotes: "Ambitious learning project focused on both technical implementation and team collaboration skills. Developed features using React with Redux state management while actively participating in design reviews and requirement discussions. This experience provided practical understanding of how frontend development integrates with design and product teams, emphasizing the importance of communication and shared understanding in successful project delivery."
    },
    label: "Team-Based Development",
    link: "https://esraahamrawy.github.io/degetai-center/#/",
    img: "DC.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Bloom",
    description: "Modern business platform",
    details: {
      overview: "Designed and developed the complete frontend for Bloom's corporate website, focusing on clean aesthetics, user experience, and brand representation.",
      achievements: [
        "Architected and built 100% of frontend UI components",
        "Implemented responsive grid system across 20+ pages",
        "Optimized images and assets reducing load time by 60%",
        "Created reusable CSS utility classes and components",
        "Ensured WCAG accessibility standards compliance"
      ],
      techStack: ["JavaScript", "Bootstrap Framework", "Custom CSS", "Responsive Layouts", "Cross-browser Testing", "Performance Optimization"],
      roleNotes: "Led complete UI development for my first professional freelance engagement. Translated client requirements into a visually appealing and functional website, building all interface elements from navigation to footer. Managed project timeline and client communications independently, delivering a polished product that exceeded expectations and paved the way for future freelance opportunities."
    },
    label: "UI Development",
    link: "https://www.bloom.com.jo/",
    img: "Bloom.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "COP 27 Conference",
    description: "Responsive event homepage",
    details: {
      overview: "A demonstration homepage for the COP 27 climate conference, showcasing my ability to translate complex designs into responsive code and integrate external APIs for dynamic content.",
      achievements: [
        "Converted XD design files to production-quality code",
        "Implemented fully responsive layout using Bootstrap",
        "Integrated live Twitter feed via official API",
        "Created interactive elements without JavaScript frameworks",
        "Delivered as first professional development assignment"
      ],
      techStack: ["JavaScript", "Bootstrap", "REST APIs", "Responsive Design", "Design-to-Code", "Git Workflow"],
      roleNotes: "Successfully completed my first professional development task: Creating a responsive conference homepage from XD designs. This project proved my capability to work with design teams and implement precise UI specifications. The X API integration demonstrated my understanding of asynchronous data fetching and DOM manipulation. As my introduction to company development workflows, this project established my foundation in professional frontend practices."
    },
    label: "Professional Demo",
    link: "https://cop-27.vercel.app/",
    img: "cop27.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Secure Login System",
    description: "Authentication interface",
    details: {
      overview: "A comprehensive login and authentication system implementing modern security practices, form validation, and user experience best practices.",
      achievements: [
        "Built secure login form with client-side validation",
        "Implemented password visibility toggle for UX enhancement",
        "Added form validation with real-time error feedback",
        "Created responsive design for all device sizes",
        "Implemented accessibility features (ARIA labels, keyboard navigation)"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Local Storage", "Responsive Design", "Accessibility"],
      roleNotes: "Developed a complete authentication interface focusing on security, usability, and responsive design. Implemented real-time form validation with visual feedback, password strength indicators, and remember-me functionality using localStorage. This project demonstrates attention to detail in user experience and commitment to building accessible, secure web interfaces."
    },
    label: "Authentication",
    link: "/LoginSystem/index.html",
    img: "login.jpg",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Bookmark Manager",
    description: "Personal bookmark organizer",
    details: {
      overview: "A web-based bookmark management application allowing users to save, organize, and categorize their favorite websites with search functionality.",
      achievements: [
        "Built CRUD operations for bookmark management",
        "Implemented local storage for data persistence",
        "Created responsive grid layout for bookmark display",
        "Added search and filter functionality",
        "Developed clean, intuitive user interface"
      ],
      techStack: ["JavaScript", "Local Storage API", "CSS Grid", "DOM Manipulation", "CRUD Operations", "Event Handling"],
      roleNotes: "Designed and developed a practical bookmark management application to practice data persistence and CRUD operations. Implemented features for adding, editing, deleting, and categorizing bookmarks with local storage for data persistence. Focused on creating an intuitive user experience with efficient search and organization capabilities."
    },
    label: "Utility App",
    link: "https://bookmark-jj5o2uztr-esraahamrawys-projects.vercel.app/",
    img: "Bookmark.jpg",
    color: 'rgba(132, 60, 188,0.15)'
  }
];

// Utility Functions
const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const createRippleEffect = (element, e, glowColor) => {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const maxDistance = Math.max(
    Math.hypot(x, y),
    Math.hypot(x - rect.width, y),
    Math.hypot(x, y - rect.height),
    Math.hypot(x - rect.width, y - rect.height)
  );

  const ripple = document.createElement('div');
  ripple.style.cssText = `
    position: absolute;
    width: ${maxDistance * 2}px;
    height: ${maxDistance * 2}px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
    left: ${x - maxDistance}px;
    top: ${y - maxDistance}px;
    pointer-events: none;
    z-index: 1000;
  `;

  element.appendChild(ripple);

  gsap.fromTo(
    ripple,
    { scale: 0, opacity: 1 },
    {
      scale: 1,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => ripple.remove()
    }
  );
};

// Particle Card Component
const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = false,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => particle.parentNode?.removeChild(particle)
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    const particles = Array.from({ length: particleCount }, () => {
      const { width, height } = cardRef.current.getBoundingClientRect();
      return createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      );
    });

    particles.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [particleCount, glowColor]);

  const handleMouseEnter = useCallback(() => {
    if (disableAnimations) return;
    
    isHoveredRef.current = true;
    animateParticles();
  }, [disableAnimations, animateParticles]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    clearAllParticles();
  }, [clearAllParticles]);

  const handleClick = useCallback((e) => {
    if (!clickEffect || disableAnimations || !cardRef.current) return;
    createRippleEffect(cardRef.current, e, glowColor);
  }, [clickEffect, disableAnimations, glowColor]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element || disableAnimations) return;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    if (clickEffect) element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (clickEffect) element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [handleMouseEnter, handleMouseLeave, handleClick, clickEffect, disableAnimations]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

// Global Spotlight Component
const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && 
        e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside;
      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          card.style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - 
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }
        card.style.setProperty('--glow-intensity', glowIntensity.toString());
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
        card.style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

// Project Details Component
const ProjectDetails = ({ details, className = '' }) => {
  if (!details) return null;

  return (
    <div className={`project-details ${className}`.trim()}>
      {details.overview && (
        <>
          <h4>Overview</h4>
          <p>{details.overview}</p>
        </>
      )}
      
      {details.achievements && details.achievements.length > 0 && (
        <>
          <h4>Key Achievements</h4>
          <ul>
            {details.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
      
      {details.techStack && details.techStack.length > 0 && (
        <>
          <h4>Tech Stack</h4>
          <div className="tech-stack">
            {details.techStack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </>
      )}
      
      {details.roleNotes && (
        <>
          <h4>Role Notes</h4>
          <p>{details.roleNotes}</p>
        </>
      )}
    </div>
  );
};

// Bento Card Grid Component
const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
);

// Hook for Mobile Detection
const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Main Component
const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const [activeDetailsIndex, setActiveDetailsIndex] = useState(null);
  const activeCard = activeDetailsIndex !== null ? cardData[activeDetailsIndex] : null;

  const shouldDisableAnimations = disableAnimations || isMobile;

  const handleToggleDetails = useCallback((index) => {
    setActiveDetailsIndex(prevIndex => {
      // If clicking on the same card that's already open, close it
      // If clicking on a different card, close any open one and open the new one
      return prevIndex === index ? null : index;
    });
  }, []);

  const renderCard = useCallback((card, index) => {
    const baseClassName = `magic-bento-card ${textAutoHide ? 'magic-bento-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`;
    
    const cardProps = {
      className: baseClassName,
      style: {
        backgroundColor: card.color || 'rgba(132, 60, 188,0.15)',
        '--glow-color': glowColor
      }
    };

    if (enableStars) {
      return (
        <ParticleCard
          key={index}
          {...cardProps}
          disableAnimations={shouldDisableAnimations}
          particleCount={particleCount}
          glowColor={glowColor}
          clickEffect={clickEffect}
        >
          <div className="magic-bento-card__content">
            <h2 className="magic-bento-card__title">{card.title}</h2>
            
            <div className="magic-bento-card__image-container">
              <img 
                className="magic-bento-card__image" 
                src={card.img} 
                alt={card.title || "Project image"} 
              />
            </div>

            <div className="magic-bento-card__footer">
              <div className="info-hover">
                <button 
                  className="magic-bento-card__button" 
                  onClick={() => handleToggleDetails(index)}
                  aria-label={activeDetailsIndex === index ? "Close project details" : "Open project details"}
                  aria-expanded={activeDetailsIndex === index}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </button>

              </div>
              
              {card.link && (
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <button className="magic-bento-card__button" aria-label="View project">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </a>
              )}
            </div>
          </div>
        </ParticleCard>
      );
    }

    return (
      <div key={index} {...cardProps}>
        <div className="magic-bento-card__header">
          <div className="magic-bento-card__label">{card.label}</div>
        </div>
        <div className="magic-bento-card__content">
          <h2 className="magic-bento-card__title">{card.title}</h2>
          <p className="magic-bento-card__description">{card.description}</p>
        </div>
      </div>
    );
  }, [
    textAutoHide,
    enableBorderGlow,
    glowColor,
    enableStars,
    shouldDisableAnimations,
    particleCount,
    clickEffect,
    activeDetailsIndex,
    handleToggleDetails
  ]);

  return (
    <>
      <GlobalModal
        open={activeDetailsIndex !== null}
        onClose={() => setActiveDetailsIndex(null)}
        title={activeCard?.title || "Project Details"}
      >
        {activeCard && (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <img
                src={activeCard.img}
                alt={activeCard.title || "Project image"}
                className="h-20 w-20 rounded-xl object-cover"
              />
              <div className="space-y-2">
                <p className="text-sm text-white/70">{activeCard.description}</p>
                {activeCard.link && (
                  <a
                    href={activeCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition hover:bg-white/10"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
            <ProjectDetails details={activeCard.details} className="project-details--modal" />
          </div>
        )}
      </GlobalModal>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, index) => renderCard(card, index))}
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
