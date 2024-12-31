import React from 'react';
import { Download } from 'lucide-react';

const featuredGifs = [
  {
    id: '1',
    url: 'https://www.meupositivo.com.br/doseujeito/wp-content/uploads/2022/02/scooter_ride_v1_2.gif',
    title: 'Adega 24 Horas',
    category: 'Delivery'
  },
  {
    id: '2',
    url: 'https://manualdousuario.net/wp-content/uploads/2021/06/parceiro-magalu.png',
    title: 'Nature Flow',
    category: 'Nature'
  },
  // Add more sample gifs
];

export default function GifGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {featuredGifs.map((gif) => (
        <div key={gif.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img src={gif.url} alt={gif.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{gif.title}</h3>
            <p className="text-gray-600">{gif.category}</p>
            <button className="mt-3 flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              <Download size={20} />
              <span>Download</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
