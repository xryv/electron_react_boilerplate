// src/components/LocalArchivesComponent.js
import React, { useEffect, useState } from 'react';
// Assuming there's a function to fetch archive information from an API
import { fetchArchives } from '../api/archivesAPI';

const LocalArchivesComponent = () => {
  const [archives, setArchives] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArchives = async () => {
      setLoading(true);
      try {
        const data = await fetchArchives(searchTerm);
        setArchives(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch archives');
        setArchives([]);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      loadArchives();
    }
  }, [searchTerm]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Local Archives</h2>
      <input
        type="text"
        placeholder="Search archives..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered input-primary w-full mb-4"
      />
      {loading && <div className="text-center">Loading archives...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archives.map((archive, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{archive.title}</h3>
                <p>{archive.summary}</p>
                {/* Additional details or a link/button to view the document */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocalArchivesComponent;
