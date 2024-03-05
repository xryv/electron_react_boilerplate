import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline'; // Assuming ArrowLeftIcon is available

/**
 * GoBackIcon - A reusable navigation component for going back to the previous page.
 * Styled with Tailwind CSS for consistency and rapid development.
 * 
 * Props:
 * - className (string): Tailwind CSS classes to customize the icon's appearance.
 * 
 * Example Usage:
 * <GoBackIcon className="h-6 w-6 text-blue-500" />
 */
const GoBackIcon = ({ className = 'h-5 w-5' }) => {
  const history = useHistory();

  // Handler for the click event
  const handleClick = () => {
    history.goBack(); // Navigate back to the previous page
  };

  return (
    <button onClick={handleClick} className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${className}`} aria-label="Go back">
      <ArrowLeftIcon />
    </button>
  );
};

export default GoBackIcon;
