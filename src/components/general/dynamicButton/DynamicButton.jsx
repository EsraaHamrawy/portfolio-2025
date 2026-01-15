import styles from './DynamicButton.module.css';

const DynamicButton = ({ 
  href, 
  text, 
  className = '', 
  variant = 'primary',
  active = false, // Add active prop
  onClick 
}) => {
  return (
    <a
    href={href} 
      className={`${styles.button} ${styles[variant]} ${active ? styles.active : ''} ${className}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default DynamicButton;