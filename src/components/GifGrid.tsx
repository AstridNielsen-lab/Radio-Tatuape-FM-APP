import React from 'react';
import { Radio } from 'lucide-react';

interface GifCardProps {
  title: string;
  imageUrl: string;
  category: string;
}

export function GifCard({ title, imageUrl, category }: GifCardProps) {
  const handleVisitRadio = () => {
    window.open('https://www.radiotatuapefm.com.br/', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{category}</p>
        <button 
          onClick={handleVisitRadio}
          className="mt-3 flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          <Radio size={20} />
          <span>Radio Tatuapé FM</span>
        </button>
      </div>
    </div>
  );
}
