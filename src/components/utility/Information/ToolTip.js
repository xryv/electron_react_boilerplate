import React, { useState } from 'react';

/**
 * ToolTip - A reusable and accessible tooltip component.
 * Displays additional information as a floating label over the wrapped element.
 * Utilizes Tailwind CSS for styling and React state for dynamic visibility.
 *
 * Props:
 * - content (string | JSX.Element): The content to display within the tooltip.
 * - position (string): The preferred position of the tooltip relative to the child ('top', 'bottom', 'left', 'right').
 * - children (JSX.Element): The element that the tooltip is associated with.
 *
 * Example Usage:
 * <ToolTip content="More info here" position="right">
 *   <button>Hover me</button>
 * </ToolTip>
 */
const ToolTip = ({ content, position = 'top', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative flex justify-center items-center">
      {isVisible && (
        <div className={`absolute px-2 py-1 text-sm text-white bg-black rounded shadow-md ${getPositionClass(position)}`}>
          {content}
        </div>
      )}
      <div
        onMouseEnter={toggleVisibility}
        onMouseLeave={toggleVisibility}
        onFocus={toggleVisibility}
        onBlur={toggleVisibility}
        tabIndex={0} // Make it focusable
      >
        {children}
      </div>
    </div>
  );
};

// Helper function to determine the positioning class based on the 'position' prop.
const getPositionClass = (position) => {
  switch (position) {
    case 'top':
      return 'bottom-full mb-2';
    case 'bottom':
      return 'top-full mt-2';
    case 'left':
      return 'right-full mr-2';
    case 'right':
      return 'left-full ml-2';
    default:
      return 'top-full mt-2';
  }
};

export default ToolTip;
