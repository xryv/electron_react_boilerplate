// src/components/PublicServicesComponent.js
import React, { useEffect, useState } from 'react';
// Assuming you have a function to fetch public services data from an API
import { fetchPublicServices } from '../api/publicServicesAPI';

const PublicServicesComponent = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      try {
        const servicesData = await fetchPublicServices();
        setServices(servicesData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch public services');
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) return <div className="text-center">Loading public services...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Public Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md p-4">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{service.name}</h3>
            <p className="font-normal text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicServicesComponent;
