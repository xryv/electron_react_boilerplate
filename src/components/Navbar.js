// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// Import icons from a library such as react-icons for modern, scalable icons
import { IoNewspaper, IoCalendar, IoBusiness, IoCarSport, IoArchive, IoGlobe, IoAirplane, IoWalk } from 'react-icons/io5';

const Navbar = () => {
  const navItems = [
    { name: 'News', path: '/news', icon: <IoNewspaper className="text-4xl" /> },
    { name: 'Events', path: '/events', icon: <IoCalendar className="text-4xl" /> },
    { name: 'Business', path: '/business', icon: <IoBusiness className="text-4xl" /> },
    { name: 'Transport', path: '/transport', icon: <IoCarSport className="text-4xl" /> },
    { name: 'Archives', path: '/archives', icon: <IoArchive className="text-4xl" /> },
    { name: 'Culture', path: '/culture', icon: <IoGlobe className="text-4xl" /> },
    { name: 'Tourism', path: '/tourism', icon: <IoAirplane className="text-4xl" /> },
    { name: 'Walks', path: '/walks', icon: <IoWalk className="text-4xl" /> },
  ];

  return (
    <div className="flex justify-evenly items-center h-24 bg-gradient-to-r from-blue-500 to-teal-500">
      {navItems.map((item) => (
        <Link to={item.path} key={item.name} className="flex flex-col items-center justify-center text-white hover:text-teal-200">
          {item.icon}
          <span className="text-xs mt-2">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
