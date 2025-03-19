import React from 'react';
import styles from '../styles/components.module.css';

/**
 * Card component that serves as a container with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content to be rendered inside the card
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler function
 */
const Card = ({ children, className = '', onClick, ...rest }) => {
  const cardClasses = [
    styles.card,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
