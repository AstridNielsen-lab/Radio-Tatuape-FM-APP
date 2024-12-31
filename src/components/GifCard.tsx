import React from 'react';
import { Radio, Play } from 'lucide-react';

interface GifCardProps {
  title: string;
  imageUrl: string;
  category: string;
  onClick: () => void; // Adiciona a função de clique para cada card
}

// Componente do card individual
export function GifCard({ title, imageUrl, category, onClick }: GifCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{category}</p>
        <div className="mt-3 space-y-2">
          <button 
            onClick={onClick} 
            className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {category === 'Live' || category === 'Studio' ? (
              <>
                <Play size={20} />
                <span>Play Stream</span>
              </>
            ) : (
              <>
                <Radio size={20} />
                <span>Visit Website</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente do grid com os cards
const featuredGifs = [
  {
    id: '1',
    url: 'https://github.com/AstridNielsen-lab/Radio-Tatuape-FM-APP/blob/index/card%20site%20radio%20tatuape%20fm.gif?raw=true',
    title: 'Anuncie',
    category: 'Parceiras',
    link: 'https://api.whatsapp.com/send?phone=5511970603441&text=Eu%20gostaria%20de%20Anunciar%20,%20podem%20me%20ajudar%20?%20Cheguei%20pelo%20anuncio%20do%20site%20.'
  },
  {
    id: '2',
    url: 'https://help.grandchef.com.br/wp-content/uploads/2019/12/tenor-3.gif',
    title: 'Delivery 24 Horas',
    category: 'Bebidas',
    link: 'https://delivery.exemplo.com'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17',
    title: 'Radio Waves',
    category: 'Technology',
    link: 'https://tecnologia.exemplo.com'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    title: 'Vintage Radio',
    category: 'Classic',
    link: 'https://classicos.exemplo.com'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
    title: 'DJ Setup',
    category: 'Equipment',
    link: 'https://equipamentos.exemplo.com'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89',
    title: 'Radio Tower',
    category: 'Infrastructure',
    link: 'https://infraestrutura.exemplo.com'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c',
    title: 'Microphone',
    category: 'Equipment',
    link: 'https://microfones.exemplo.com'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1495305379050-64540d6ee95d',
    title: 'Sound Waves',
    category: 'Technology',
    link: 'https://ondas.exemplo.com'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    title: 'Radio Station',
    category: 'Studio',
    link: 'https://estudio.exemplo.com'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1546708770-589dab7b22c7',
    title: 'Broadcasting',
    category: 'Live',
    link: 'https://live.exemplo.com'
  }
];

// Grid dos cards
export default function GifGrid() {
  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {featuredGifs.map((gif) => (
        <GifCard
          key={gif.id}
          title={gif.title}
          imageUrl={gif.url}
          category={gif.category}
          onClick={() => handleCardClick(gif.link)} // Função dinâmica para cada link
        />
      ))}
    </div>
  );
}
