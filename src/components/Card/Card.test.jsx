import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Card>
        <p>Card Content</p>
      </Card>
    );
    
    const cardElement = screen.getByText('Card Content').closest('.card');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('card');
  });

  test('renders title correctly', () => {
    render(
      <Card title="Test Title">
        <p>Card Content</p>
      </Card>
    );
    
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('card-title');
  });

  test('applies custom className correctly', () => {
    render(
      <Card className="custom-card">
        <p>Card Content</p>
      </Card>
    );
    
    const cardElement = screen.getByText('Card Content').closest('.card');
    expect(cardElement).toHaveClass('custom-card');
    expect(cardElement).toHaveClass('card');
  });

  test('renders with different elevations', () => {
    render(
      <Card elevation={3}>
        <p>Card Content</p>
      </Card>
    );
    
    const cardElement = screen.getByText('Card Content').closest('.card');
    expect(cardElement).toHaveClass('card-elevation-3');
  });

  test('applies border when bordered prop is true', () => {
    render(
      <Card bordered>
        <p>Card Content</p>
      </Card>
    );
    
    const cardElement = screen.getByText('Card Content').closest('.card');
    expect(cardElement).toHaveClass('card-bordered');
  });

  test('applies different variants correctly', () => {
    render(
      <Card variant="outlined">
        <p>Card Content</p>
      </Card>
    );
    
    const cardElement = screen.getByText('Card Content').closest('.card');
    expect(cardElement).toHaveClass('card-outlined');
  });

  test('renders card header with avatar and action', () => {
    const avatar = <div data-testid="avatar">Avatar</div>;
    const action = <button data-testid="action">Action</button>;
    
    render(
      <Card 
        headerProps={{ 
          avatar, 
          action,
          title: "Card Header Title",
          subheader: "Card Subheader"
        }}
      >
        <p>Card Content</p>
      </Card>
    );
    
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('action')).toBeInTheDocument();
    expect(screen.getByText('Card Header Title')).toBeInTheDocument();
    expect(screen.getByText('Card Subheader')).toBeInTheDocument();
  });
});
