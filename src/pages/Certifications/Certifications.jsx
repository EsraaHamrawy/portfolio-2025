import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Certifications.css';

import eduacriveImg from "../../assets/Certifications/eduacrive.png";
import udemy from "../../assets/Certifications/Material-UI.jpg";
import javascript from "../../assets/Certifications/javascript.jpg";
import reactAdvance from "../../assets/Certifications/Coursera Advanced React.jpg";
import basicsreact from "../../assets/Certifications/Coursera React Basics.jpg";
import WebMaste from "../../assets/Certifications/ITShare-Web Master.jpg";

import ReactAdvance from "../../assets/Certifications/Coursera Advanced React.pdf";
 import BasicsReact from "../../assets/Certifications/Coursera React Basics.pdf";
 import ITShare from "../../assets/Certifications/ITShare-Web Master -Full Stack.pdf"

export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: udemy,
      title: 'Material UI',
      subtitle: 'Udemy',
      handle: '20-Apri-2025',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: "https://www.udemy.com/certificate/UC-0419b9ca-576f-41a3-b0a2-8bf2967c006a/",
    },
    {
      image: eduacriveImg,
      title: 'React Hooks',
      subtitle: 'Educative',
      handle: '27-sep-2024',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: "https://www.educative.io/verify-certificate/PQq49pPNXrmsNQpqLmAZzwumXx9L8o0XjTl",
    },
   
    
    {
      image: reactAdvance,
      title: 'Advanced React',
      subtitle: 'Coursera',
      handle: '16-Jul-2024',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: ReactAdvance,
    },
    {
      image:basicsreact ,
      title: 'React Basics',
      subtitle: 'Coursera',
      handle: '16-Jul-2024',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: BasicsReact
    },
     {
      image: javascript,
      title: 'JavaScript',
      subtitle: 'Udemy',
      handle: '15-Sep-2023',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: "https://www.udemy.com/certificate/UC-29a6acc8-00ee-410c-befd-aa4a0f7c3ac9/", 
    },
    {
      image: WebMaste,
      title: 'Web Master - Full Stack',
      subtitle: 'ITShare',
      handle: '31-Dec-2021',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url:ITShare
    }
  ];
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardKeyDown = (event, url) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    handleCardClick(url);
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns,
        '--rows': rows
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
        {data.map((c, i) => (
          <article
            key={i}
            className="chroma-card"
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            onKeyDown={(event) => handleCardKeyDown(event, c.url)}
            role={c.url ? 'button' : undefined}
            tabIndex={c.url ? 0 : -1}
            aria-label={`${c.title} certificate from ${c.subtitle}${c.handle ? `, issued ${c.handle}` : ''}`}
            style={{
              '--card-border': c.borderColor || 'transparent',
              '--card-gradient': c.gradient,
              cursor: c.url ? 'pointer' : 'default'
            }}
          >
            <div className="chroma-img-wrapper">
              <img src={c.image} alt={`${c.title} certificate from ${c.subtitle}`} loading="lazy" />
            </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
