// src/components/LocalBusinessComponent.js
import React, { useEffect, useState } from 'react';
// Assuming you have a function to fetch local business data from an API
import { fetchLocalBusinesses } from '../api/localBusinessAPI';

const LocalBusinessComponent = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBusinesses = async () => {
      setLoading(true);
      try {
        const businessData = await fetchLocalBusinesses();
        setBusinesses(businessData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch local businesses');
        setBusinesses([]);
      } finally {
        setLoading(false);
      }
    };

    loadBusinesses();
  }, []);

  if (loading) return <div className="text-center">Loading local businesses...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Local Businesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {businesses.map((business, index) => (
          <div key={index} className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-4">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{business.name}</h3>
            <p className="font-normal text-gray-700">{business.description}</p>
            {/* Consider adding more business details like address, phone number, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalBusinessComponent;
