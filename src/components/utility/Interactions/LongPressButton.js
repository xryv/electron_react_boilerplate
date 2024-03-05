import React, { useState, useEffect } from 'react';

/**
 * LongPressButton - A component that triggers an action after a long press.
 * Can be used with both mouse and touch events.
 *
 * Props:
 * - onLongPress (function): The function to call when a long press is detected.
 * - onClick (function): The function to call when a simple click is detected.
 * - delay (number): The duration (in milliseconds) to determine a long press.
 * - children (node): The content of the button.
 * - className (string): Tailwind CSS classes for customizing the button's appearance.
 *
 * Example Usage:
 * <LongPressButton
 *   onLongPress={() => console.log('Long pressed')}
 *   onClick={() => console.log('Clicked')}
 *   delay={800}
 *   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
 * >
 *   Press me
 * </LongPressButton>
 */
const LongPressButton = ({ onLongPress, onClick, delay = 500, children, className }) => {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(() => {
        onLongPress();
        setStartLongPress(false); // Reset after action
      }, delay);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [startLongPress, onLongPress, delay]);

  const handleMouseDown = () => {
    setStartLongPress(true);
  };

  const handleMouseUp = () => {
    setStartLongPress(false);
    if (!startLongPress) onClick();
  };

  const handleTouchStart = () => {
    setStartLongPress(true);
  };

  const handleTouchEnd = () => {
    setStartLongPress(false);
    if (!startLongPress) onClick();
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setStartLongPress(false)} // Cancel on leave
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={className}
    >
      {children}
    </button>
  );
};

export default LongPressButton;
