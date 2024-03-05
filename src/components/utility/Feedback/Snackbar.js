import React, { useState, useEffect } from 'react';

/**
 * Snackbar - Displays brief messages at the bottom of the screen.
 * Messages disappear automatically after a short duration.
 *
 * Props:
 * - message (string): The message to display in the Snackbar.
 * - duration (number): How long the Snackbar should be visible (in milliseconds).
 *
 * Example Usage:
 * <Snackbar message="Item added to cart" duration={3000} />
 */
const Snackbar = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 px-6 py-3 bg-black text-white rounded-lg shadow">
      {message}
    </div>
  );
};

export default Snackbar;
