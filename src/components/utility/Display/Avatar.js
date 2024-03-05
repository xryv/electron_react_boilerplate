import React, { useState, useEffect } from 'react';

/**
 * Avatar - Displays an avatar image or a dynamically generated pixel-art placeholder.
 * Uses Tailwind CSS for styling.
 *
 * Props:
 * - src (string): The source URL of the avatar image.
 * - alt (string): Alternative text for the avatar.
 * - size (string): The size of the avatar, e.g., 'w-16 h-16' for Tailwind CSS classes.
 *
 * Example Usage:
 * <Avatar src="path/to/image.jpg" alt="User avatar" size="w-16 h-16" />
 */
const Avatar = ({ src, alt, size = 'w-24 h-24' }) => {
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    if (!src) {
      generatePlaceholder();
    }
  }, [src]);

  const generatePlaceholder = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 60;
    canvas.height = 60;

    for (let y = 0; y < canvas.height; y += 6) {
      for (let x = 0; x < canvas.width; x += 6) {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        context.fillStyle = `#${color}`;
        context.fillRect(x, y, 6, 6);
      }
    }

    setPlaceholder(canvas.toDataURL('image/png'));
  };

  return (
    <div className={`${size} rounded-full overflow-hidden flex justify-center items-center bg-gray-200`}>
      {src ? (
        <img src={src} alt={alt} className="object-cover" />
      ) : (
        <img src={placeholder} alt="Placeholder avatar" className="object-cover" />
      )}
    </div>
  );
};

export default Avatar;
