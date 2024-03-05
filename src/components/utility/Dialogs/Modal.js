import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Modal - A reusable and accessible modal component.
 * Utilizes React Portal to render the modal as a child of the body element, ensuring it's always on top.
 * Styled with Tailwind CSS for consistent design and flexibility.
 *
 * Props:
 * - isOpen (boolean): Controls the visibility of the modal.
 * - onClose (function): Function to call when the modal is requested to be closed.
 * - title (string): Optional title for the modal.
 * - children (node): The content to be displayed within the modal.
 * - className (string): Tailwind CSS classes for customizing the modal appearance.
 *
 * Example Usage:
 * <Modal isOpen={isOpen} onClose={handleClose} title="Modal Title">
 *   <p>This is a modal</p>
 * </Modal>
 */
const Modal = ({ isOpen, onClose, title, children, className }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 flex justify-center items-center p-4">
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        {title && <div className="font-bold text-lg mb-4">{title}</div>}
        <div>{children}</div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
