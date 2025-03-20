import React from 'react';
import './Button.css'; // Use direct CSS import, not CSS modules

const Button = ({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick, 
  disabled = false,
  isLoading = false,
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = variant !== 'default' ? `btn-${variant}` : '';
  const disabledClass = disabled || isLoading ? 'btn-disabled' : '';
  const loadingClass = isLoading ? 'btn-loading' : '';
  
  const combinedClasses = [
    baseClass,
    variantClass,
    disabledClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span data-testid="button-spinner" className="btn-spinner" />}
      {children}
    </button>
  );
};

export default Button;
