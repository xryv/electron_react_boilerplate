// src/components/TransportComponent.js
import React, { useEffect, useState } from 'react';
// Assuming there's a function to fetch transportation information from an API
import { fetchTransportInfo } from '../api/transportAPI';

const TransportComponent = () => {
  const [transportData, setTransportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTransportData = async () => {
      setLoading(true);
      try {
        const data = await fetchTransportInfo();
        setTransportData(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch transportation information');
        setTransportData([]);
      } finally {
        setLoading(false);
      }
    };

    loadTransportData();
  }, []);

  if (loading) return <div className="text-center">Loading transportation info...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Transportation Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transportData.map((item, index) => (
          <div key={index} className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-4">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{item.name}</h3>
            <p className="font-normal text-gray-700">{item.description}</p>
            {/* Additional transport details can be added here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportComponent;
