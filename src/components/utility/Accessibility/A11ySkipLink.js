import React from 'react';

/**
 * A11ySkipLink - An accessibility component that provides a "Skip to Content" link.
 * This allows keyboard and screen reader users to bypass repetitive navigation and jump directly to the main content.
 *
 * Props:
 * - contentId (string): The ID of the main content container that the link should skip to.
 *
 * Example Usage:
 * <A11ySkipLink contentId="mainContent" />
 */
const A11ySkipLink = ({ contentId }) => {
  return (
    <a href={`#${contentId}`} className="skip-link">
      Skip to Content
    </a>
  );
};

export default A11ySkipLink;
