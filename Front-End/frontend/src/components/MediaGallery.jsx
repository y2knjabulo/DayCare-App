import React, { useEffect, useState } from 'react';
import API from '../api';

export default function MediaGallery() {
  const [media, setMedia] = useState([]);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => { getMedia(); }, []);

  const getMedia = async () => {
    try {
      const res = await API.get('/media');
      if (Array.isArray(res.data) && res.data.length > 0) {
        setMedia(res.data);
      } else {
        setUseFallback(true);
      }
    } catch (err) {
      console.error('Error loading media', err);
      setUseFallback(true);
    }
  };

const fallbackImages = [
  { id: 1, src: process.env.PUBLIC_URL + "/images/gallery1.jpg", name: "Happy Kids Playing" },
  { id: 2, src: process.env.PUBLIC_URL + "/images/gallery2.jpg", name: "Creative Learning" },
  { id: 3, src: process.env.PUBLIC_URL + "/images/gallery3.jpg", name: "Story Time" },
];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-purple-100 rounded-xl shadow">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(useFallback ? fallbackImages : media).map((m) => (
          <div key={m.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
            <img
              src={useFallback ? m.src : `${API.defaults.baseURL.replace('/api', '')}/${m.path}`}
              alt={m.name || m.originalname}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-center text-sm font-medium text-gray-700">
              {m.name || m.originalname}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
