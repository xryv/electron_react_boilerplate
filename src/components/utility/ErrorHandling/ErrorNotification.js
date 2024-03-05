import React from 'react';

/**
 * ErrorNotification - A component for displaying error messages in a consistent and noticeable manner.
 *
 * Props:
 * - message (string | JSX.Element): The error message to display.
 * - onClose (function): Optional function to call when the notification is closed.
 *
 * Example Usage:
 * <ErrorNotification
 *   message="An error has occurred. Please try again."
 *   onClose={() => console.log('Error notification closed')}
 * />
 */
const ErrorNotification = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-800 p-4 rounded-lg shadow flex justify-between items-center">
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-4 text-red-800 hover:text-red-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ErrorNotification;
