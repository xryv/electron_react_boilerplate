import React from 'react';

/**
 * LoadingSpinner - A reusable component that displays a loading spinner.
 * Styled with Tailwind CSS to ensure visual consistency across the application.
 *
 * Props:
 * - className (string): Tailwind CSS classes to customize the spinner's appearance.
 *
 * Example Usage:
 * <LoadingSpinner className="text-blue-500" />
 */
const LoadingSpinner = ({ className = 'text-blue-500' }) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${className}`}></div>
    </div>
  );
};

export default LoadingSpinner;
