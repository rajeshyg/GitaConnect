import React from 'react';
import './Avatar.css';

const Avatar = ({
  src,
  alt = '',
  name = '',
  size = 'md',
  shape = 'circle',
  className = '',
  icon = null,
  status = null,
  ...props
}) => {
  const baseClass = 'avatar';
  const sizeClass = `avatar-${size}`;
  const shapeClass = `avatar-${shape}`;
  const customClass = className;

  const classes = [baseClass, sizeClass, shapeClass, customClass]
    .filter(Boolean)
    .join(' ');

  const getInitials = (name) => {
    if (!name) return '';
    
    const nameParts = name.split(' ').filter(Boolean);
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    
    return (
      nameParts[0].charAt(0).toUpperCase() +
      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
    );
  };

  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt || name} />;
    }
    
    if (icon) {
      return icon;
    }
    
    if (name) {
      return <span className="avatar-initials">{getInitials(name)}</span>;
    }
    
    return <span className="avatar-placeholder"></span>;
  };

  return (
    <div className={classes} {...props}>
      {renderContent()}
      {status && (
        <span 
          data-testid="avatar-status" 
          className={`avatar-status avatar-status-${status}`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
