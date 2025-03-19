import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom extensions are available
import Card from '../Card';

// NOTE: The test warnings about ReactDOMTestUtils.act are coming from the testing library's
// internal implementation and don't affect test functionality

describe('Card Component', () => {
  test('renders children correctly', () => {
    render(
      <Card>
        <h2>Test Title</h2>
        <p>Test content</p>
      </Card>
    );
    
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/test content/i)).toBeInTheDocument();
  });

  test('applies default card class', () => {
    render(<Card data-testid="card">Content</Card>);
    const cardElement = screen.getByTestId('card');
    
    expect(cardElement).toHaveClass('card');
  });

  test('applies custom classes along with default class', () => {
    render(<Card className="custom-card" data-testid="card">Content</Card>);
    const cardElement = screen.getByTestId('card');
    
    expect(cardElement).toHaveClass('card');
    expect(cardElement).toHaveClass('custom-card');
  });

  test('forwards additional props to the div element', () => {
    render(
      <Card 
        data-testid="card"
        aria-label="Test card"
      >
        Content
      </Card>
    );
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveAttribute('aria-label', 'Test card');
  });

  test('applies onClick handler if provided', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick} data-testid="card">Click me</Card>);
    
    const cardElement = screen.getByTestId('card');
    cardElement.click();
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
