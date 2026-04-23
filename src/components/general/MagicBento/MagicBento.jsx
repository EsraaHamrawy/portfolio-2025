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
    description: "Built a React storefront with cart state, form validation, and reusable product flows.",
    context: "Self-directed learning project focused on modern React architecture and production-style state handling.",
    role: "Frontend developer",
    problem: "Needed a realistic e-commerce experience that could handle catalog browsing, cart updates, and validated checkout behavior in one interface.",
    solution: "Created a modular storefront with reusable product cards, Context API state, React Hook Form validation, and Zod-backed form rules.",
    result: "Shipped a deployed demo that demonstrates scalable component structure, complex UI state, and polished storefront interactions.",
    built: [
      "Product listing and cart flows",
      "Validated checkout forms",
      "Reusable UI and state architecture"
    ],
    stack: ["React 18", "TypeScript", "React Hook Form", "Zod", "Context API", "CSS Modules", "Vite", "Mock API"],
    details: {
      context: "Self-directed learning project focused on modern React architecture and production-style state handling.",
      role: "Frontend developer",
      problem: "Needed a realistic e-commerce experience that could handle catalog browsing, cart updates, and validated checkout behavior in one interface.",
      solution: "Created a modular storefront with reusable product cards, Context API state, React Hook Form validation, and Zod-backed form rules.",
      result: "Shipped a deployed demo that demonstrates scalable component structure, complex UI state, and polished storefront interactions.",
      built: [
        "Product listing and cart flows",
        "Validated checkout forms",
        "Reusable UI and state architecture"
      ],
      techStack: ["React 18", "TypeScript", "React Hook Form", "Zod", "Context API", "CSS Modules", "Vite", "Mock API"]
    },
    label: "Personal project",
    link: "https://e-comarce-front.vercel.app/",
    img: "aura.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Digital Center",
    description: "Built a Redux-driven team storefront with auth flows, shared state, and responsive product views.",
    context: "Team project built to practice frontend collaboration, shared planning, and product development workflows.",
    role: "Frontend contributor",
    problem: "The team needed a cohesive storefront that could coordinate product browsing, authentication, and shared state across the app.",
    solution: "Implemented Redux Toolkit state, routed views, responsive layouts, and UI aligned with design and product feedback.",
    result: "Delivered a collaborative build that shows how I work with design and product partners while shipping maintainable frontend features.",
    built: [
      "Redux-powered application state",
      "Authentication and routed views",
      "Responsive layouts from design specs"
    ],
    stack: ["React", "Redux Toolkit", "React Router DOM", "MUI", "Team Project Management"],
    details: {
      context: "Team project built to practice frontend collaboration, shared planning, and product development workflows.",
      role: "Frontend contributor",
      problem: "The team needed a cohesive storefront that could coordinate product browsing, authentication, and shared state across the app.",
      solution: "Implemented Redux Toolkit state, routed views, responsive layouts, and UI aligned with design and product feedback.",
      result: "Delivered a collaborative build that shows how I work with design and product partners while shipping maintainable frontend features.",
      built: [
        "Redux-powered application state",
        "Authentication and routed views",
        "Responsive layouts from design specs"
      ],
      techStack: ["React", "Redux Toolkit", "React Router DOM", "MUI", "Team Project Management"]
    },
    label: "Team project",
    link: "https://esraahamrawy.github.io/degetai-center/#/",
    img: "DC.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Bloom",
    description: "Delivered a brand-forward client website with reusable sections, responsive layouts, and performance-focused asset handling.",
    context: "Freelance client engagement where I owned the full frontend build and translated brand direction into a polished site.",
    role: "Sole frontend developer",
    problem: "The client needed a professional website that felt on-brand, worked smoothly across devices, and was easy to extend.",
    solution: "Built the complete UI with reusable sections, responsive grids, custom CSS, and optimized assets for fast delivery.",
    result: "Launched a polished corporate site that improved the brand presentation and gave the client a maintainable frontend foundation.",
    built: [
      "End-to-end frontend ownership",
      "Reusable content sections",
      "Responsive layouts and asset optimization"
    ],
    stack: ["JavaScript", "Bootstrap", "Custom CSS", "Responsive Layouts", "Cross-browser Testing", "Performance Optimization"],
    details: {
      context: "Freelance client engagement where I owned the full frontend build and translated brand direction into a polished site.",
      role: "Sole frontend developer",
      problem: "The client needed a professional website that felt on-brand, worked smoothly across devices, and was easy to extend.",
      solution: "Built the complete UI with reusable sections, responsive grids, custom CSS, and optimized assets for fast delivery.",
      result: "Launched a polished corporate site that improved the brand presentation and gave the client a maintainable frontend foundation.",
      built: [
        "End-to-end frontend ownership",
        "Reusable content sections",
        "Responsive layouts and asset optimization"
      ],
      techStack: ["JavaScript", "Bootstrap", "Custom CSS", "Responsive Layouts", "Cross-browser Testing", "Performance Optimization"]
    },
    label: "Client work",
    link: "https://www.bloom.com.jo/",
    img: "Bloom.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "COP 27 Conference",
    description: "Converted XD designs into a responsive event landing page and integrated live social content.",
    context: "First professional assignment, turning a conference concept into a production-ready marketing page.",
    role: "Frontend developer",
    problem: "The task was to translate static design files into a polished landing page while keeping the content responsive and current.",
    solution: "Built the page in Bootstrap, matched the XD layout precisely, and integrated a live Twitter feed for dynamic updates.",
    result: "Delivered the assignment on spec and demonstrated that I could work from design files and meet professional frontend expectations.",
    built: [
      "Design-to-code landing page",
      "Responsive Bootstrap layout",
      "Live social feed integration"
    ],
    stack: ["JavaScript", "Bootstrap", "REST APIs", "Responsive Design", "Design-to-Code", "Git Workflow"],
    details: {
      context: "First professional assignment, turning a conference concept into a production-ready marketing page.",
      role: "Frontend developer",
      problem: "The task was to translate static design files into a polished landing page while keeping the content responsive and current.",
      solution: "Built the page in Bootstrap, matched the XD layout precisely, and integrated a live Twitter feed for dynamic updates.",
      result: "Delivered the assignment on spec and demonstrated that I could work from design files and meet professional frontend expectations.",
      built: [
        "Design-to-code landing page",
        "Responsive Bootstrap layout",
        "Live social feed integration"
      ],
      techStack: ["JavaScript", "Bootstrap", "REST APIs", "Responsive Design", "Design-to-Code", "Git Workflow"]
    },
    label: "Professional demo",
    link: "https://cop-27.vercel.app/",
    img: "cop27.png",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Secure Login System",
    description: "Created a secure, accessible login experience with validation, feedback, and password controls.",
    context: "UI-focused authentication exercise to practice security, accessibility, and form-state management.",
    role: "Frontend developer",
    problem: "The interface needed to feel trustworthy, guide users through validation errors, and remain usable with assistive technology.",
    solution: "Built real-time validation, password visibility controls, accessible labels, and keyboard-friendly interactions.",
    result: "Produced a reusable auth UI that improves clarity for users and shows careful attention to form usability.",
    built: [
      "Validation with live feedback",
      "Accessible auth interactions",
      "Password visibility and remember-me flows"
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Local Storage", "Responsive Design", "Accessibility"],
    details: {
      context: "UI-focused authentication exercise to practice security, accessibility, and form-state management.",
      role: "Frontend developer",
      problem: "The interface needed to feel trustworthy, guide users through validation errors, and remain usable with assistive technology.",
      solution: "Built real-time validation, password visibility controls, accessible labels, and keyboard-friendly interactions.",
      result: "Produced a reusable auth UI that improves clarity for users and shows careful attention to form usability.",
      built: [
        "Validation with live feedback",
        "Accessible auth interactions",
        "Password visibility and remember-me flows"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Local Storage", "Responsive Design", "Accessibility"]
    },
    label: "Authentication UI",
    link: "/LoginSystem/index.html",
    img: "login.jpg",
    color: 'rgba(132, 60, 188,0.15)'
  },
  {
    title: "Bookmark Manager",
    description: "Built a productivity app for saving, organizing, and searching bookmarks with local persistence.",
    context: "Personal productivity app focused on CRUD patterns, persistence, and fast retrieval.",
    role: "Frontend developer",
    problem: "Users needed a simple way to keep bookmarks organized without depending on a backend.",
    solution: "Implemented add, edit, delete, search, and filter workflows backed by localStorage for persistence.",
    result: "Delivered a lightweight organizer that demonstrates practical data handling and a clear content-management workflow.",
    built: [
      "CRUD bookmark management",
      "Local storage persistence",
      "Search and filter tools"
    ],
    stack: ["JavaScript", "Local Storage API", "CSS Grid", "DOM Manipulation", "CRUD Operations", "Event Handling"],
    details: {
      context: "Personal productivity app focused on CRUD patterns, persistence, and fast retrieval.",
      role: "Frontend developer",
      problem: "Users needed a simple way to keep bookmarks organized without depending on a backend.",
      solution: "Implemented add, edit, delete, search, and filter workflows backed by localStorage for persistence.",
      result: "Delivered a lightweight organizer that demonstrates practical data handling and a clear content-management workflow.",
      built: [
        "CRUD bookmark management",
        "Local storage persistence",
        "Search and filter tools"
      ],
      techStack: ["JavaScript", "Local Storage API", "CSS Grid", "DOM Manipulation", "CRUD Operations", "Event Handling"]
    },
    label: "Productivity app",
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
      {details.context && (
        <div className="project-details__section">
          <h4>Context</h4>
          <p>{details.context}</p>
        </div>
      )}

      {(details.role || details.techStack?.length > 0) && (
        <div className="project-details__meta-row">
          {details.role && (
            <div className="project-details__meta-item">
              <h4>Role</h4>
              <p>{details.role}</p>
            </div>
          )}

          {details.techStack && details.techStack.length > 0 && (
            <div className="project-details__meta-item">
              <h4>Stack</h4>
              <div className="tech-stack">
                {details.techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {details.problem && (
        <div className="project-details__section">
          <h4>Problem</h4>
          <p>{details.problem}</p>
        </div>
      )}

      {details.solution && (
        <div className="project-details__section">
          <h4>Solution</h4>
          <p>{details.solution}</p>
        </div>
      )}

      {details.built && details.built.length > 0 && (
        <div className="project-details__section">
          <h4>What I Built</h4>
          <ul>
            {details.built.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {details.result && (
        <div className="project-details__section">
          <h4>Result</h4>
          <p>{details.result}</p>
        </div>
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
              <h3 className="magic-bento-card__title">{card.title}</h3>
              <p className="magic-bento-card__meta">{card.role} · {card.label}</p>
              <p className="magic-bento-card__meta magic-bento-card__meta--stack">{card.stack?.slice(0, 3).join(" · ")}</p>
              
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
                  type="button"
                  className="magic-bento-card__button" 
                  onClick={() => handleToggleDetails(index)}
                  aria-label={activeDetailsIndex === index ? "Close case study details" : "Open case study details"}
                  aria-expanded={activeDetailsIndex === index}
                  aria-haspopup="dialog"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </button>

              </div>
              
              {card.link && (
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="magic-bento-card__button" aria-label={`View ${card.title}`}>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
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
                  </span>
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
          <h3 className="magic-bento-card__title">{card.title}</h3>
          <p className="magic-bento-card__meta">{card.role} · {card.label}</p>
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
        title={activeCard?.title || "Case Study Details"}
      >
        {activeCard && (
          <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <img
                src={activeCard.img}
                alt={`${activeCard.title || "Project"} screenshot`}
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
                    View Case Study
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
