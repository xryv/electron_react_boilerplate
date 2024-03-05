import React from 'react';
import ReactDOM from 'react-dom';

/**
 * ConfirmationDialog - A component to prompt users for confirmation on certain actions.
 * Utilizes React Portal to render the dialog above all other content.
 *
 * Props:
 * - isOpen (boolean): Controls the visibility of the confirmation dialog.
 * - onClose (function): Function to call when the dialog is closed without confirmation.
 * - onConfirm (function): Function to call when the action is confirmed.
 * - title (string): Title of the dialog.
 * - message (string): Message to display within the dialog.
 *
 * Example Usage:
 * <ConfirmationDialog
 *   isOpen={showConfirmDialog}
 *   onClose={() => setShowConfirmDialog(false)}
 *   onConfirm={handleActionConfirm}
 *   title="Confirm Action"
 *   message="Are you sure you want to perform this action?"
 * />
 */
const ConfirmationDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-4">{message}</p>
        <div className="flex justify-end space-x-4 mt-6">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationDialog;
