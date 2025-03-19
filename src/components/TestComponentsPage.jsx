import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import '../styles/global.css';

/**
 * Test page to manually verify component implementations
 */
const TestComponentsPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const [cardClicked, setCardClicked] = useState(false);

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const handleCardClick = () => {
    setCardClicked(prevState => !prevState);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Component Testing Page</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>Button Component Tests</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Primary Button (Default)</h3>
          <Button onClick={handleButtonClick}>
            Click Me ({clickCount})
          </Button>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Secondary Button</h3>
          <Button variant="secondary" onClick={handleButtonClick}>
            Secondary Button
          </Button>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Disabled Button</h3>
          <Button disabled>
            Disabled Button
          </Button>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Custom Class Button</h3>
          <Button className="custom-button-class" onClick={handleButtonClick}>
            Custom Styled Button
          </Button>
        </div>
      </section>
      
      <section>
        <h2>Card Component Tests</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Basic Card</h3>
          <Card>
            <h3>Card Title</h3>
            <p>This is some content inside a card component.</p>
          </Card>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Clickable Card</h3>
          <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <h3>Clickable Card</h3>
            <p>Click this card to toggle its state.</p>
            {cardClicked && <p style={{ color: 'green' }}>Card was clicked!</p>}
          </Card>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Card with Custom Class</h3>
          <Card className="custom-card-class">
            <h3>Custom Styled Card</h3>
            <p>This card has additional custom styling.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TestComponentsPage;
