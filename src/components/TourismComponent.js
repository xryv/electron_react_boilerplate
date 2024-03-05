// src/components/TourismComponent.js
import React, { useEffect, useState } from 'react';
// Assuming there's a function to fetch tourism information from an API
import { fetchTourismInfo } from '../api/tourismAPI';

const TourismComponent = () => {
  const [tourismInfo, setTourismInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTourismInfo = async () => {
      setLoading(true);
      try {
        const data = await fetchTourismInfo();
        setTourismInfo(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch tourism information');
        setTourismInfo([]);
      } finally {
        setLoading(false);
      }
    };

    loadTourismInfo();
  }, []);

  if (loading) return <div className="text-center">Loading tourism information...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Explore Local Tourism</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tourismInfo.map((info, index) => (
          <div key={index} className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
            <img className="w-full" src={info.image} alt={info.title} />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{info.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{info.description}</p>
              {/* Optionally, add a "Learn More" button or link */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourismComponent;
