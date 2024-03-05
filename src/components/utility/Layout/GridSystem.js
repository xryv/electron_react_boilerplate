import React from 'react';

/**
 * GridSystem - A flexible and responsive grid layout component.
 * Leverages CSS Grid and Tailwind CSS for creating dynamic and responsive layouts.
 *
 * Props:
 * - children (node): The content to be displayed within the grid.
 * - columns (string): Tailwind CSS class for defining the number of columns.
 * - gap (string): Tailwind CSS class for defining the gap between grid items.
 *
 * Example Usage:
 * <GridSystem columns="md:grid-cols-3" gap="gap-4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   ...additional items
 * </GridSystem>
 */
const GridSystem = ({ children, columns = "grid-cols-1", gap = "gap-2" }) => {
  return (
    <div className={`grid ${columns} ${gap}`}>
      {children}
    </div>
  );
};

export default GridSystem;
