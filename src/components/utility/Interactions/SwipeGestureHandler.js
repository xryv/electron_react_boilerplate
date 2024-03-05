import React, { useState, useEffect } from 'react';

/**
 * SwipeGestureHandler - A component to detect swipe gestures and execute specified actions.
 * Utilizes touch events to determine swipe direction and magnitude.
 *
 * Props:
 * - onSwipeLeft (function): Action to perform on swipe left gesture.
 * - onSwipeRight (function): Action to perform on swipe right gesture.
 * - threshold (number): Minimum distance (in pixels) for the swipe action to be recognized.
 *
 * Example Usage:
 * <SwipeGestureHandler
 *   onSwipeLeft={() => console.log('Swiped left')}
 *   onSwipeRight={() => console.log('Swiped right')}
 *   threshold={50}
 * >
 *   <div>Swipe me!</div>
 * </SwipeGestureHandler>
 */
const SwipeGestureHandler = ({ children, onSwipeLeft, onSwipeRight, threshold = 50 }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Determine the direction of the swipe based on the touch start and end points
  useEffect(() => {
    if (touchStart - touchEnd > threshold) {
      onSwipeLeft && onSwipeLeft();
    } else if (touchEnd - touchStart > threshold) {
      onSwipeRight && onSwipeRight();
    }
    // Reset touch points after the swipe action is determined
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchEnd]);

  // Handler for the touch start event
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handler for the touch move event
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {children}
    </div>
  );
};

export default SwipeGestureHandler;
