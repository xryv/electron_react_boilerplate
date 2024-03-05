import React, { useContext, useState } from 'react';

/**
 * AccessibilityContext - A React context for managing accessibility preferences across the application.
 */
const AccessibilityContext = React.createContext();

/**
 * useAccessibility - A custom hook for accessing the AccessibilityContext.
 */
export const useAccessibility = () => useContext(AccessibilityContext);

/**
 * AccessibilityProvider - Provides the AccessibilityContext to child components.
 */
export const AccessibilityProvider = ({ children }) => {
  const [textSize, setTextSize] = useState('normal'); // 'normal', 'large'

  const toggleTextSize = () => {
    setTextSize((currentSize) => (currentSize === 'normal' ? 'large' : 'normal'));
  };

  return (
    <AccessibilityContext.Provider value={{ textSize, toggleTextSize }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

/**
 * TextSizeToggle - A component for toggling the text size.
 * Utilizes the useAccessibility hook to read and update accessibility settings.
 */
export const TextSizeToggle = () => {
  const { textSize, toggleTextSize } = useAccessibility();

  return (
    <button
      onClick={toggleTextSize}
      className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {textSize === 'normal' ? 'Increase' : 'Decrease'} Text Size
    </button>
  );
};
