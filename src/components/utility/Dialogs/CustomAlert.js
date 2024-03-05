import React from 'react';
import ReactDOM from 'react-dom';

/**
 * CustomAlert - A comprehensive alert component for displaying messages, warnings, or errors.
 * Utilizes React Portal for rendering outside the regular DOM tree, ensuring it's always on top.
 * Supports customization for different types of alerts with Tailwind CSS.
 *
 * Props:
 * - isVisible (boolean): Controls the visibility of the alert.
 * - onClose (function): Function to call when the alert is dismissed.
 * - type (string): The type of alert ('info', 'warning', 'error'). Optional; affects styling.
 * - title (string): Title of the alert.
 * - message (string | JSX.Element): The content/message to display within the alert.
 * - closeButtonLabel (string): Label for the close button. Defaults to "Close".
 *
 * Example Usage:
 * <CustomAlert
 *   isVisible={showAlert}
 *   onClose={() => setShowAlert(false)}
 *   type="error"
 *   title="Alert Title"
 *   message="This is an important message."
 *   closeButtonLabel="Got It"
 * />
 */
const CustomAlert = ({ isVisible, onClose, type = 'info', title, message, closeButtonLabel = 'Close' }) => {
  if (!isVisible) return null;

  const backgroundColor = {
    info: 'bg-blue-100',
    warning: 'bg-yellow-100',
    error: 'bg-red-100',
  }[type] || 'bg-blue-100';

  const textColor = {
    info: 'text-blue-800',
    warning: 'text-yellow-800',
    error: 'text-red-800',
  }[type] || 'text-blue-800';

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4`}>
      <div className={`${backgroundColor} rounded-lg shadow-xl p-6 max-w-md w-full`}>
        <h2 className={`${textColor} text-lg font-semibold`}>{title}</h2>
        <div className={`${textColor} mt-4`}>{message}</div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {closeButtonLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomAlert;
