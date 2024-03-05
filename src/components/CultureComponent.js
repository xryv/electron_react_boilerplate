// src/components/CultureComponent.js
import React, { useEffect, useState } from 'react';
// Assuming you have a function to fetch cultural activities data from an API
import { fetchCulturalActivities } from '../api/cultureAPI';

const CultureComponent = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadActivities = async () => {
      setLoading(true);
      try {
        const data = await fetchCulturalActivities();
        setActivities(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch cultural activities');
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  if (loading) return <div className="text-center">Loading cultural activities...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Local Cultural Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
            <img className="w-full" src={activity.image} alt={activity.title} />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{activity.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{activity.description}</p>
              {/* Add more details or a link/button for more information */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureComponent;
