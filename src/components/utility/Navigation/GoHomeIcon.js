import React from 'react';
import { useHistory } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/outline'; // Use Home icon from Tailwind Icons

/**
 * GoHomeIcon - A reusable navigation component to return to the home page.
 * Utilizes Tailwind CSS for styling, ensuring consistency and flexibility.
 *
 * Props:
 * - className (string): Tailwind CSS classes to customize the icon's appearance.
 *
 * Example Usage:
 * <GoHomeIcon className="h-6 w-6 text-blue-500" />
 */
const GoHomeIcon = ({ className = 'h-5 w-5' }) => {
  const history = useHistory();

  // Handler for the click event to navigate to the home page
  const handleClick = () => {
    history.push('/'); // Assuming '/' is the path to your home page
  };

  return (
    <button onClick={handleClick} className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${className}`} aria-label="Go home">
      <HomeIcon />
    </button>
  );
};

export default GoHomeIcon;
