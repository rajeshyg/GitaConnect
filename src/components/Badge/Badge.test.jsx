import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from './Badge';

describe('Badge Component', () => {
  test('renders correctly with count', () => {
    render(<Badge count={5}>
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const contentElement = screen.getByTestId('badge-content');
    const badgeElement = screen.getByText('5');
    
    expect(contentElement).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge');
  });

  test('renders dot variant correctly', () => {
    render(<Badge variant="dot">
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const badgeElement = screen.getByTestId('badge-dot');
    
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge-dot');
  });

  test('applies color classes correctly', () => {
    render(<Badge count={5} color="error">
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const badgeElement = screen.getByText('5');
    
    expect(badgeElement).toHaveClass('badge-error');
  });

  test('caps count at max value', () => {
    render(<Badge count={100} max={99}>
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const badgeElement = screen.getByText('99+');
    expect(badgeElement).toBeInTheDocument();
  });

  test('does not render badge when count is zero and showZero is false', () => {
    render(<Badge count={0} showZero={false}>
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const badgeElement = screen.queryByText('0');
    expect(badgeElement).not.toBeInTheDocument();
  });

  test('renders badge when count is zero and showZero is true', () => {
    render(<Badge count={0} showZero={true}>
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const badgeElement = screen.getByText('0');
    expect(badgeElement).toBeInTheDocument();
  });

  test('renders custom content in the badge', () => {
    render(<Badge content="New">
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const badgeElement = screen.getByText('New');
    expect(badgeElement).toBeInTheDocument();
  });

  test('applies correct positioning classes', () => {
    render(<Badge count={5} position="bottom-left">
      <div data-testid="badge-content">Content</div>
    </Badge>);
    
    const badgeElement = screen.getByText('5');
    const wrapperElement = badgeElement.closest('.badge-wrapper');
    
    expect(wrapperElement).toHaveClass('badge-position-bottom-left');
  });
});
