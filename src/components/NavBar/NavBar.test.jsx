import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

// Mock component to wrap NavBar with Router for testing
const NavBarWithRouter = (props) => (
  <BrowserRouter>
    <NavBar {...props} />
  </BrowserRouter>
);

describe('NavBar Component', () => {
  test('renders correctly with default props', () => {
    render(<NavBarWithRouter />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveClass('navbar');
  });

  test('renders logo properly', () => {
    render(<NavBarWithRouter logo="App Logo" />);
    const logoElement = screen.getByText('App Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass('navbar-logo');
  });

  test('renders navigation links correctly', () => {
    const navItems = [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' }
    ];
    
    render(<NavBarWithRouter navItems={navItems} />);
    
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });

  test('applies fixed position when fixed prop is true', () => {
    render(<NavBarWithRouter fixed />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('navbar-fixed');
  });

  test('toggles mobile menu when hamburger is clicked', () => {
    render(<NavBarWithRouter />);
    const hamburgerButton = screen.getByLabelText('Toggle navigation');
    const mobileMenu = screen.getByTestId('mobile-menu');
    
    expect(mobileMenu).toHaveClass('navbar-menu-closed');
    
    fireEvent.click(hamburgerButton);
    expect(mobileMenu).toHaveClass('navbar-menu-open');
    
    fireEvent.click(hamburgerButton);
    expect(mobileMenu).toHaveClass('navbar-menu-closed');
  });

  test('applies transparent styles when transparent prop is true', () => {
    render(<NavBarWithRouter transparent />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('navbar-transparent');
  });

  test('renders user profile when authenticated', () => {
    const user = {
      name: 'John Doe',
      avatar: 'https://example.com/avatar.jpg'
    };
    
    render(<NavBarWithRouter user={user} />);
    const userElement = screen.getByText('John Doe');
    const avatarElement = screen.getByAltText('John Doe');
    
    expect(userElement).toBeInTheDocument();
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });
});
