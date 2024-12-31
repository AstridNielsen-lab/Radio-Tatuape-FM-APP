import React from 'react';
import { Radio, Play } from 'lucide-react';

interface GifCardProps {
  title: string;
  imageUrl: string;
  category: string;
}

export function GifCard({ title, imageUrl, category }: GifCardProps) {
  // Function to open the main website
  const handleVisitRadio = () => {
    window.open('https://www.radiotatuapefm.com.br/', '_blank');
  };

  // Function to open the stream link
  const handlePlayStream = () => {
    window.open('https://radiotatuapefm.radiostream321.com', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{category}</p>
        <div className="mt-3 space-y-2">
          <button 
            onClick={title.includes('Live') || title.includes('Studio') ? handlePlayStream : handleVisitRadio}
            className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {title.includes('Live') || title.includes('Studio') ? (
              <>
                <Play size={20} />
                <span>Play Stream</span>
              </>
            ) : (
              <>
                <Radio size={20} />
                <span>Radio Tatuapé FM</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
