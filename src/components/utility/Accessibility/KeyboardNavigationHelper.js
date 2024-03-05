import React, { useEffect } from 'react';

/**
 * KeyboardNavigationHelper - Enhances keyboard navigation for specified interactive elements.
 * Can be used to add keyboard support for custom components that are not natively focusable.
 *
 * Props:
 * - targetSelector (string): CSS selector for targeting the interactive elements.
 * - focusClass (string): CSS class to apply when an element is focused via keyboard.
 *
 * Example Usage:
 * <KeyboardNavigationHelper targetSelector=".custom-btn" focusClass="keyboard-focused" />
 */
const KeyboardNavigationHelper = ({ targetSelector, focusClass = 'keyboard-focused' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.querySelectorAll(targetSelector).forEach((element) => {
          element.classList.add(focusClass);
          element.setAttribute('tabindex', '0'); // Make elements focusable
          
          element.addEventListener('blur', () => {
            element.classList.remove(focusClass);
          });
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [targetSelector, focusClass]);

  return null; // This component does not render anything
};

export default KeyboardNavigationHelper;
