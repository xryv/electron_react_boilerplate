import React, { useState } from 'react';

/**
 * ToggleSwitch - A component for toggling between two states, with visual feedback.
 * Can be used for settings that have an enabled/disabled state.
 *
 * Props:
 * - initialValue (boolean): The initial state of the toggle (true for on, false for off).
 * - onToggle (function): Function to call when the toggle state changes. Receives the new state as a parameter.
 * - className (string): Tailwind CSS classes for customizing the appearance of the toggle button.
 *
 * Example Usage:
 * <ToggleSwitch
 *   initialValue={false}
 *   onToggle={(state) => console.log('Toggle State:', state)}
 * />
 */
const ToggleSwitch = ({ initialValue = false, onToggle, className }) => {
  const [isToggled, setIsToggled] = useState(initialValue);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    onToggle && onToggle(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`transition-colors duration-300 ${isToggled ? 'bg-blue-500' : 'bg-gray-200'} ${className} inline-block px-4 py-2 rounded-full`}
      aria-pressed={isToggled}
    >
      <span
        className={`block transition-transform duration-300 transform ${isToggled ? 'translate-x-5' : 'translate-x-0'} w-4 h-4 bg-white rounded-full shadow-md`}
      ></span>
    </button>
  );
};

export default ToggleSwitch;
