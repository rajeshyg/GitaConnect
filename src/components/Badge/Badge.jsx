import React from 'react';
import './Badge.css';

const Badge = ({
  children,
  count,
  content,
  max = 99,
  color = 'primary',
  showZero = false,
  variant = 'count',
  position = 'top-right',
  className = '',
  ...props
}) => {
  const baseClass = 'badge-wrapper';
  const positionClass = `badge-position-${position}`;
  const customClass = className;
  
  const wrapperClasses = [baseClass, positionClass, customClass]
    .filter(Boolean)
    .join(' ');
  
  const badgeClasses = [
    'badge',
    `badge-${color}`,
    variant === 'dot' && 'badge-dot'
  ].filter(Boolean).join(' ');
  
  const renderBadgeContent = () => {
    if (variant === 'dot') {
      // Apply the badge-dot class to the element with data-testid
      return <span data-testid="badge-dot" className="badge-dot"></span>;
    }
    
    if (content) {
      return content;
    }
    
    if (count !== undefined) {
      if (count === 0 && !showZero) {
        return null;
      }
      
      return count > max ? `${max}+` : count;
    }
    
    return null;
  };
  
  const badgeContent = renderBadgeContent();
  
  return (
    <div className={wrapperClasses} {...props}>
      {children}
      {badgeContent !== null && (
        <span className={badgeClasses}>
          {badgeContent}
        </span>
      )}
    </div>
  );
};

export default Badge;
