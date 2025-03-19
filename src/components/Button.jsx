import React from 'react';
import styles from '../styles/components.module.css';

/**
 * Button component with primary and secondary variants
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary or secondary)
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether button is disabled
 * @param {Function} [props.onClick] - Click handler function
 */
const Button = ({
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  onClick,
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    variant === 'secondary' ? styles.secondary : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
