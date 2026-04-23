import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export const MOTION_BREAKPOINT = 768;

export const useMotionSafety = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isCompactViewport, setIsCompactViewport] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${MOTION_BREAKPOINT}px)`);
    const updateViewportState = () => setIsCompactViewport(mediaQuery.matches);

    updateViewportState();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateViewportState);
    } else {
      mediaQuery.addListener(updateViewportState);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateViewportState);
      } else {
        mediaQuery.removeListener(updateViewportState);
      }
    };
  }, []);

  return {
    prefersReducedMotion,
    isCompactViewport,
    shouldReduceMotion: prefersReducedMotion,
    shouldToneDownMotion: prefersReducedMotion || isCompactViewport,
  };
};

export const textVariant = (delay, reduceMotion = false) => {
  return {
    hidden: {
      y: reduceMotion ? -12 : -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: reduceMotion ? "tween" : "spring",
        duration: reduceMotion ? 0.35 : 1.25,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration, reduceMotion = false) => {
  return {
    hidden: {
      x: reduceMotion ? (direction === "left" ? 12 : direction === "right" ? -12 : 0) : direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: reduceMotion ? (direction === "up" ? 12 : direction === "down" ? -12 : 0) : direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: reduceMotion ? Math.min(delay || 0, 0.08) : delay,
        duration: reduceMotion ? Math.min(duration || 0.45, 0.45) : duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration, reduceMotion = false) => {
  return {
    hidden: {
      scale: reduceMotion ? 0.96 : 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: reduceMotion ? Math.min(delay || 0, 0.08) : delay,
        duration: reduceMotion ? Math.min(duration || 0.35, 0.35) : duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration, reduceMotion = false) => {
  return {
    hidden: {
      x: reduceMotion ? (direction === "left" ? "-8%" : direction === "right" ? "8%" : 0) : direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: reduceMotion ? (direction === "up" ? "8%" : direction === "down" ? "8%" : 0) : direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: reduceMotion ? Math.min(delay || 0, 0.08) : delay,
        duration: reduceMotion ? Math.min(duration || 0.45, 0.45) : duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren, reduceMotion = false) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0.04 : staggerChildren,
        delayChildren: reduceMotion ? 0 : delayChildren || 0,
      },
    },
  };
};
