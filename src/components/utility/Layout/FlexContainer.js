import React from 'react';

/**
 * FlexContainer - A utility component for creating flex layouts with Tailwind CSS.
 * Offers a simplified interface for applying flexbox properties to a container.
 *
 * Props:
 * - direction (string): Flex direction (e.g., 'row', 'column').
 * - wrap (string): Flex wrap (e.g., 'wrap', 'nowrap').
 * - justify (string): Justification of content (e.g., 'center', 'start', 'end').
 * - align (string): Alignment of items (e.g., 'center', 'start', 'end').
 * - className (string): Additional Tailwind CSS classes for custom styling.
 * - children (node): The content to be laid out within the flex container.
 *
 * Example Usage:
 * <FlexContainer direction="row" wrap="wrap" justify="center" align="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </FlexContainer>
 */
const FlexContainer = ({ direction = 'row', wrap = 'nowrap', justify = 'start', align = 'start', className, children }) => {
  const baseClass = 'flex';
  const directionClass = `flex-${direction}`;
  const wrapClass = `flex-${wrap}`;
  const justifyContentClass = `justify-${justify}`;
  const alignItemsClass = `items-${align}`;

  // Combine all flex-related classes with any additional classes provided via props
  const flexClasses = `${baseClass} ${directionClass} ${wrapClass} ${justifyContentClass} ${alignItemsClass} ${className}`;

  return (
    <div className={flexClasses}>
      {children}
    </div>
  );
};

export default FlexContainer;
