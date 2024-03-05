import React, { useEffect, useState } from 'react';

/**
 * ToastNotification - A reusable and transient notification component.
 * Displays brief messages (e.g., success, error) to the user in a non-intrusive way.
 * Styled with Tailwind CSS and utilizes React state and effects for dynamic display.
 *
 * Props:
 * - message (string): The message to display within the toast.
 * - type (string): The type of the toast ('success', 'error') to style accordingly.
 * - duration (number): Duration in milliseconds for which the toast is visible.
 *
 * Example Usage:
 * <ToastNotification message="Profile updated successfully!" type="success" duration={3000} />
 */
const ToastNotification = ({ message, type = 'success', duration = 3000 }) => {
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

  const toastTypeClass = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    isVisible && (
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white ${toastTypeClass} transition-opacity`}
        role="alert"
      >
        {message}
      </div>
    )
  );
};

export default ToastNotification;
