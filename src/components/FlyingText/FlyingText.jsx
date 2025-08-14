import React, { useEffect, useRef, useState } from 'react';
import './FlyingText.scss';

const FlyingText = () => {
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  // Text items matching the image
  const textItems = [
    { text: 'React', color: 'text-primary' },
    { text: 'UI/UX', color: 'text-highlight' },
    { text: 'js', color: 'text-primary' },
    { text: 'Visual', color: 'text-primary' },
    { text: 'Design', color: 'text-primary' },
    { text: 'Figma', color: 'text-highlight' },
    { text: 'Adobe', color: 'text-primary' },
    { text: 'Photoshop', color: 'text-primary' },
    { text: 'Illustrator', color: 'text-primary' },
    { text: 'Effect', color: 'text-primary' },
    { text: 'Premiere', color: 'text-primary' },
    { text: '4D', color: 'text-primary' },
    { text: '3ds', color: 'text-primary' },
    { text: 'Max', color: 'text-primary' },
    { text: 'Lumion', color: 'text-primary' },
    { text: '3D', color: 'text-highlight' },
    { text: 'Web', color: 'text-primary' },
    { text: 'Development', color: 'text-highlight' },
    { text: 'HTML', color: 'text-primary' },
    { text: 'CSS', color: 'text-primary' },
    { text: 'JavaScript', color: 'text-primary' },
    { text: 'Motion', color: 'text-highlight' },
    { text: 'Graphic', color: 'text-primary' },
    { text: 'After', color: 'text-primary' },
    { text: 'Architectural', color: 'text-highlight' },
    { text: 'Auto', color: 'text-primary' },
    { text: 'CAD', color: 'text-primary' },
    { text: 'Sketchup', color: 'text-primary' },
    { text: 'Cinema', color: 'text-primary' }
  ];

  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Initialize elements with more horizontal spread
    const initialElements = textItems.map((item, index) => {
      const row = Math.floor(index / 10); // Arrange in rows
      const col = index % 10;
      
      return {
        ...item,
        id: index,
        x: (col * 120) + Math.random() * 80 + 50, // More horizontal spacing
        y: (row * 80) + Math.random() * 40 + 60, // Vertical rows
        vx: 0, // Start with no velocity
        vy: 0,
        originalX: (col * 120) + Math.random() * 80 + 50,
        originalY: (row * 80) + Math.random() * 40 + 60,
        scale: 0.9 + Math.random() * 0.2,
        rotation: 0,
        isMoving: false
      };
    });
    setElements(initialElements);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setElements(prevElements => {
        return prevElements.map(element => {
          const dx = mousePosition.current.x - element.x;
          const dy = mousePosition.current.y - element.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let newX = element.x;
          let newY = element.y;
          let newVx = element.vx;
          let newVy = element.vy;
          let isMoving = element.isMoving;

          // Mouse interaction - only move when mouse is close
          if (distance < 80 && distance > 0) {
            const force = (80 - distance) / 80;
            newVx += (dx / distance) * force * -3; // Push away from mouse
            newVy += (dy / distance) * force * -3;
            isMoving = true;
          }

          // Apply velocity with stronger damping when not being pushed
          if (isMoving) {
            newVx *= 0.95; // Damping
            newVy *= 0.95;
            newX += newVx;
            newY += newVy;

            // Return to original position slowly when velocity is low
            if (Math.abs(newVx) < 0.5 && Math.abs(newVy) < 0.5) {
              const returnForceX = (element.originalX - newX) * 0.02;
              const returnForceY = (element.originalY - newY) * 0.02;
              newVx += returnForceX;
              newVy += returnForceY;
              
              // Stop moving when close to original position
              if (Math.abs(element.originalX - newX) < 5 && Math.abs(element.originalY - newY) < 5) {
                isMoving = false;
                newVx = 0;
                newVy = 0;
              }
            }
          }

          // Bounce off container walls
          const containerWidth = containerRef.current?.clientWidth || 1200;
          const containerHeight = containerRef.current?.clientHeight || 400;
          const margin = 100;
          
          if (newX <= 0 || newX >= containerWidth - margin) {
            newVx *= -0.6;
            newX = Math.max(0, Math.min(containerWidth - margin, newX));
          }
          if (newY <= 0 || newY >= containerHeight - 40) {
            newVy *= -0.6;
            newY = Math.max(0, Math.min(containerHeight - 40, newY));
          }

          // Gentle rotation based on velocity
          const newRotation = element.rotation + newVx * 0.3;

          return {
            ...element,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: newRotation,
            isMoving
          };
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="flying-text-wrapper">
      <div 
        ref={containerRef}
        className="flying-text-container"
      >
        {/* Floating text elements */}
        {elements.map((element) => (
          <div
            key={element.id}
            className={`text-element ${element.color}`}
            style={{
              transform: `translate(${element.x}px, ${element.y}px) scale(${element.scale}) rotate(${element.rotation * 0.1}deg)`,
              fontSize: `${16 + element.scale * 6}px`
            }}
          >
            {element.text}
          </div>
        ))}

        {/* Container instructions */}
        <div className="instructions">
          Move mouse to interact with elements
        </div>
      </div>
    </div>
  );
};

export default FlyingText;