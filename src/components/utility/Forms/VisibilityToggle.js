import React, { useState } from 'react';

/**
 * VisibilityToggle - A component to toggle the visibility of its children.
 * Can be used for showing/hiding content dynamically, such as password fields or additional form inputs.
 *
 * Props:
 * - children (node): The content to be shown or hidden.
 * - labelHidden (string): The label to display when the content is hidden.
 * - labelVisible (string): The label to display when the content is visible.
 * - className (string): Tailwind CSS classes for customizing the toggle button's appearance.
 *
 * Example Usage:
 * <VisibilityToggle
 *   labelHidden="Show Password"
 *   labelVisible="Hide Password"
 * >
 *   <input type="password" value="SecretPassword" readOnly />
 * </VisibilityToggle>
 */
const VisibilityToggle = ({ children, labelHidden = "Show", labelVisible = "Hide", className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button
        onClick={toggleVisibility}
        className={`px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 ${className}`}
      >
        {isVisible ? labelVisible : labelHidden}
      </button>
      {isVisible && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default VisibilityToggle;
