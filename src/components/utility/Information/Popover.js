import React, { useState, useRef, useEffect } from 'react';

/**
 * Popover - A component for displaying floating content like tooltips or additional information.
 * Can be attached to any element and will appear on hover or focus.
 *
 * Props:
 * - triggerContent (JSX.Element): The content that triggers the popover on hover/focus.
 * - popoverContent (JSX.Element): The content to be displayed within the popover.
 * - position (string): The position of the popover relative to the trigger (e.g., "top", "bottom").
 *
 * Example Usage:
 * <Popover
 *   triggerContent={<button>Hover me</button>}
 *   popoverContent={<div>Popover content</div>}
 *   position="bottom"
 * />
 */
const Popover = ({ triggerContent, popoverContent, position = 'bottom' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);

  // Position calculation logic can be enhanced as needed
  const popoverPositionClass = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  }[position];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="relative inline-block" ref={triggerRef}>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0} // Make trigger focusable
      >
        {triggerContent}
      </div>
      {isVisible && (
        <div className={`absolute ${popoverPositionClass} p-2 bg-white shadow-lg rounded`}>
          {popoverContent}
        </div>
      )}
    </div>
  );
};

export default Popover;
