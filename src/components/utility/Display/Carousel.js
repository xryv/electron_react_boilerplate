import React, { useState } from 'react';

/**
 * Carousel - A simple carousel component for cycling through items.
 *
 * Props:
 * - items (Array): An array of JSX elements to display in the carousel.
 *
 * Example Usage:
 * <Carousel
 *   items={[
 *     <img src="image1.jpg" alt="First" />,
 *     <img src="image2.jpg" alt="Second" />,
 *     <img src="image3.jpg" alt="Third" />,
 *   ]}
 * />
 */
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        {items.map((item, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={prevItem} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
        Prev
      </button>
      <button onClick={nextItem} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
        Next
      </button>
    </div>
  );
};

export default Carousel;
