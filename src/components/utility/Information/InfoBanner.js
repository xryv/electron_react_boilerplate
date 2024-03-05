import React from 'react';

/**
 * InfoBanner - A component for displaying informational banners, such as announcements or updates.
 *
 * Props:
 * - message (string | JSX.Element): The content of the banner.
 * - type (string): The type of banner ('info', 'warning', 'error', 'success') for styling purposes.
 * - onClose (function): Optional function to call when the banner is closed.
 *
 * Example Usage:
 * <InfoBanner
 *   message="This is an important update!"
 *   type="info"
 *   onClose={() => console.log('Banner closed')}
 * />
 */
const InfoBanner = ({ message, type = 'info', onClose }) => {
  const bannerStyles = {
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <div className={`p-4 rounded-lg ${bannerStyles[type]} flex justify-between items-center`}>
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 rounded-lg p-1.5 hover:bg-opacity-50 focus:outline-none"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default InfoBanner;
