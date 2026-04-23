import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import styles from "./BackToTopButton.module.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-content-wedget");

    if (!scrollContainer) {
      return undefined;
    }

    const handleScroll = () => {
      setIsVisible(scrollContainer.scrollTop > 300);
    };

    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.getElementById("main-content-wedget");

    if (!scrollContainer) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
