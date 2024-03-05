import React from 'react';

/**
 * VisibilityController - A component to conditionally render children based on visibility criteria.
 *
 * Props:
 * - isVisible (boolean): Determines if the children should be displayed or not.
 * - fallback (JSX.Element | null): Optional fallback content to display when isVisible is false.
 * - children (JSX.Element | JSX.Element[]): The content to be conditionally rendered.
 *
 * Example Usage:
 * <VisibilityController isVisible={true} fallback={<div>Not available</div>}>
 *   <div>This content is visible</div>
 * </VisibilityController>
 */
const VisibilityController = ({ isVisible, fallback = null, children }) => {
  if (!isVisible) return fallback;
  return <>{children}</>;
};

export default VisibilityController;
