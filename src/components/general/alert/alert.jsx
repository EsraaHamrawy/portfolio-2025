import { motion } from "framer-motion";

import styles from "./alert.module.css";


const Alert = ({ show, type = "success", message, onClose }) => {
  if (!show) return null;

  return (
    
    <div  className={styles.toast__container}>
<motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      role="alert"
      className={`${styles.toast} ${styles[`toast--${type}`]}`}
      >
      {/* Icon */}
      <div className={styles.toast__icon}>
        <svg
        
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          {type === "success" && (
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          )}
          {type === "error" && (
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          )}
          {type === "warning" && (
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          )}
        </svg>
      </div>

      {/* Message */}
      <divv className={styles.toast__message} >{message}</divv>

      {/* Close */}
      <button className={styles.toast__close} onClick={onClose} aria-label="Close">
        ✕
      </button>
    </motion.div>
    </div>
    
  );
};

export default Alert;
