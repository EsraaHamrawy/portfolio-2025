import styles from './DynamicButton.module.css';

const DynamicButton = ({
  href,
  text,
  className = '',
  variant = 'primary',
  active = false,
  onClick,
  target,
  rel,
  download,
}) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${active ? styles.active : ''} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={buttonClassName}
        onClick={onClick}
        target={target}
        rel={rel}
        download={download}
      >
        {text}
      </a>
    );
  }

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default DynamicButton;
