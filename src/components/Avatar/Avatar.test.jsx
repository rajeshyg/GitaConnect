import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar from './Avatar';

describe('Avatar Component', () => {
  test('renders correctly with image src', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const avatarElement = screen.getByAltText('User Avatar');
    
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatarElement.parentElement).toHaveClass('avatar');
  });

  test('renders initials when no image is provided', () => {
    render(<Avatar name="John Doe" />);
    const initialsElement = screen.getByText('JD');
    
    expect(initialsElement).toBeInTheDocument();
    expect(initialsElement.parentElement).toHaveClass('avatar');
  });

  test('renders single initial for single-word names', () => {
    render(<Avatar name="John" />);
    const initialElement = screen.getByText('J');
    
    expect(initialElement).toBeInTheDocument();
  });

  test('applies size classes correctly', () => {
    render(<Avatar name="John Doe" size="lg" />);
    const avatarElement = screen.getByText('JD').parentElement;
    
    expect(avatarElement).toHaveClass('avatar-lg');
  });

  test('applies shape classes correctly', () => {
    render(<Avatar name="John Doe" shape="square" />);
    const avatarElement = screen.getByText('JD').parentElement;
    
    expect(avatarElement).toHaveClass('avatar-square');
  });

  test('applies custom className correctly', () => {
    render(<Avatar name="John Doe" className="custom-avatar" />);
    const avatarElement = screen.getByText('JD').parentElement;
    
    expect(avatarElement).toHaveClass('custom-avatar');
    expect(avatarElement).toHaveClass('avatar');
  });

  test('renders icon when provided', () => {
    const iconComponent = <span data-testid="avatar-icon">Icon</span>;
    render(<Avatar icon={iconComponent} />);
    
    expect(screen.getByTestId('avatar-icon')).toBeInTheDocument();
  });

  test('applies status indicator correctly', () => {
    render(<Avatar name="John Doe" status="online" />);
    const avatarElement = screen.getByText('JD').parentElement;
    const statusElement = screen.getByTestId('avatar-status');
    
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass('avatar-status-online');
  });
});
