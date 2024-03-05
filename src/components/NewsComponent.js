// src/components/NewsComponent.js
import React, { useEffect, useState } from 'react';
// Assuming you have a function to fetch news data from an API
import { fetchNews } from '../api/newsAPI';

const NewsComponent = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const newsData = await fetchNews();
        setNewsItems(newsData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch news');
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {newsItems.map((newsItem, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img className="w-full" src={newsItem.image} alt="News" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{newsItem.title}</div>
            <p className="text-gray-700 text-base">
              {newsItem.summary}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
