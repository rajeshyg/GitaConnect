import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom extensions are available
import Button from '../Button';

// NOTE: The test warnings about ReactDOMTestUtils.act are coming from the testing library's
// internal implementation and don't affect test functionality

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders primary button by default', () => {
    render(<Button>Primary Button</Button>);
    const buttonElement = screen.getByText(/primary button/i);
    
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).not.toHaveClass('secondary');
  });

  test('renders secondary button when variant is "secondary"', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText(/secondary button/i);
    
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('secondary');
  });

  test('accepts and applies additional CSS classes', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const buttonElement = screen.getByText(/custom button/i);
    
    expect(buttonElement).toHaveClass('button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('applies disabled attribute when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByText(/disabled button/i);
    
    expect(buttonElement).toBeDisabled();
  });

  test('supports additional props like type', () => {
    render(<Button type="submit">Submit Button</Button>);
    const buttonElement = screen.getByText(/submit button/i);
    
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
