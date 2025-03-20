import React from 'react';
import './Card.css';

const CardHeader = ({ avatar, action, title, subheader }) => {
  return (
    <div className="card-header">
      {avatar && <div className="card-header-avatar">{avatar}</div>}
      <div className="card-header-content">
        {title && <div className="card-header-title">{title}</div>}
        {subheader && <div className="card-header-subheader">{subheader}</div>}
      </div>
      {action && <div className="card-header-action">{action}</div>}
    </div>
  );
};

const Card = ({
  children,
  className = '',
  title,
  elevation = 1,
  bordered = false,
  variant = 'default',
  headerProps,
  ...props
}) => {
  const baseClass = 'card';
  const elevationClass = `card-elevation-${elevation}`;
  const borderedClass = bordered ? 'card-bordered' : '';
  const variantClass = variant !== 'default' ? `card-${variant}` : '';
  
  const combinedClasses = [
    baseClass,
    elevationClass,
    borderedClass,
    variantClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses} {...props}>
      {headerProps && <CardHeader {...headerProps} />}
      {title && <div className="card-title">{title}</div>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
