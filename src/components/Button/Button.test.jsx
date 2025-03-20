import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders correctly with default props', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).not.toBeDisabled();
  });

  test('applies primary variant styles correctly', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement).toHaveClass('btn-primary');
  });

  test('applies secondary variant styles correctly', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText('Secondary Button');
    expect(buttonElement).toHaveClass('btn-secondary');
  });

  test('applies outline variant styles correctly', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const buttonElement = screen.getByText('Outline Button');
    expect(buttonElement).toHaveClass('btn-outline');
  });

  test('applies custom className correctly', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const buttonElement = screen.getByText('Custom Button');
    expect(buttonElement).toHaveClass('custom-class');
    expect(buttonElement).toHaveClass('btn');
  });

  test('executes onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('btn-disabled');
  });

  test('does not execute onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
    const buttonElement = screen.getByText('Disabled Button');
    
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
  
  test('applies loading state correctly', () => {
    render(<Button isLoading>Loading Button</Button>);
    const buttonElement = screen.getByText('Loading Button');
    const spinnerElement = screen.getByTestId('button-spinner');
    
    expect(buttonElement).toHaveClass('btn-loading');
    expect(spinnerElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });
});
