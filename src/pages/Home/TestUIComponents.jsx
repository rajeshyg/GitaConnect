import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Avatar from '../../components/Avatar/Avatar';
import Badge from '../../components/Badge/Badge';
import './TestUIComponents.css';

const TestUIComponents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleButtonClick = () => {
    setButtonClicks(prevCount => prevCount + 1);
    
    // Simulate loading state
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="ui-component-showcase">
      <h1>UI Component Test</h1>
      
      <div className="ios-section">
        <div className="ios-section-header">
          <h2>Button Component</h2>
        </div>
        
        <div className="ios-scrollable-cards">
          <Button variant="primary" onClick={handleButtonClick}>Primary Button</Button>
          <Button variant="secondary" onClick={handleButtonClick}>Secondary Button</Button>
          <Button variant="outline" onClick={handleButtonClick}>Outline Button</Button>
          <Button disabled>Disabled Button</Button>
          <Button isLoading={isLoading} onClick={handleButtonClick}>
            {isLoading ? 'Loading...' : 'Click to Load'}
          </Button>
        </div>
        
        {buttonClicks > 0 && (
          <p className="click-counter">Button clicked {buttonClicks} times</p>
        )}
      </div>

      <div className="ios-section">
        <div className="ios-section-header">
          <h2>Card Component</h2>
        </div>
        
        <div className="ios-scrollable-cards">
          <Card>
            <div className="card-badge">Scholarship</div>
            <h3 className="card-title">Lorem Ipsum Scholarship</h3>
            <p className="card-subtitle">Harvard University</p>
            <Button variant="primary">View Details</Button>
          </Card>

          <Card>
            <div className="card-badge">Internship</div>
            <h3 className="card-title">Software Engineer Intern</h3>
            <p className="card-subtitle">Google</p>
            <Button variant="primary">Apply Now</Button>
          </Card>

          <Card>
            <div className="card-badge">Admission</div>
            <h3 className="card-title">Fall 2023 Admissions</h3>
            <p className="card-subtitle">Stanford University</p>
            <Button variant="primary">Learn More</Button>
          </Card>
        </div>
      </div>

      <div className="ios-section">
        <div className="ios-section-header">
          <h2>Avatar Component</h2>
        </div>
        
        <div className="avatar-showcase">
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" size="lg" />
          <Avatar name="Alex" shape="square" />
          <Avatar name="Morgan Freeman" status="online" />
          <Avatar name="Lisa Johnson" status="busy" />
          <Avatar name="Tom Wilson" size="lg" status="away" />
        </div>
      </div>

      <div className="ios-section">
        <div className="ios-section-header">
          <h2>Badge Component</h2>
        </div>
        
        <div className="badge-showcase">
          <div className="badge-item">
            <Badge count={5}>
              <div className="badge-box">Notifications</div>
            </Badge>
          </div>
          
          <div className="badge-item">
            <Badge count={99} max={99}>
              <div className="badge-box">Max Count</div>
            </Badge>
          </div>
          
          <div className="badge-item">
            <Badge variant="dot" color="error">
              <div className="badge-box">Dot Badge</div>
            </Badge>
          </div>
          
          <div className="badge-item">
            <Badge content="NEW" color="success">
              <div className="badge-box">Custom Content</div>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestUIComponents;
