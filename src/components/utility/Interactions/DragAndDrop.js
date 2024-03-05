import React, { useCallback, useState } from 'react';

/**
 * DragAndDrop - A component to facilitate drag and drop interactions.
 * Can be used for reordering items, moving items between containers, or as part of a file upload UI.
 *
 * Props:
 * - onDrop (function): Action to perform when an item or file is dropped onto the target.
 * - onDragOver (function): (Optional) Action to perform when an item is dragged over the target.
 * - className (string): Tailwind CSS classes for customizing the appearance of the drop zone.
 * - children (node): Elements to render inside the drop zone.
 *
 * Example Usage:
 * <DragAndDrop
 *   onDrop={handleFileDrop}
 *   className="border-2 border-dashed border-gray-300 rounded p-4"
 * >
 *   Drop files here
 * </DragAndDrop>
 */
const DragAndDrop = ({ onDrop, onDragOver, className, children }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    if (onDragOver) {
      onDragOver(e);
    }
  }, [onDragOver]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    if (onDrop) {
      onDrop(e);
    }
  }, [onDrop]);

  return (
    <div
      className={`${className} ${isDragging ? 'bg-gray-100' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default DragAndDrop;
