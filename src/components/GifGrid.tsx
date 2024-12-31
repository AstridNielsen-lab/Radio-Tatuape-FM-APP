import React from 'react';
import { GifCard } from './GifCard';

// Lista de GIFs e informações de categorias
const featuredGifs = [
  {
    id: '1',
    url: 'https://github.com/AstridNielsen-lab/Radio-Tatuape-FM-APP/blob/index/card%20site%20radio%20tatuape%20fm.gif?raw=true',
    title: 'Anuncie',
    category: 'Parceiras',
    link: 'https://www.exemplo.com/anuncie' // Link fictício para "Anuncie"
  },
  {
    id: '2',
    url: 'https://help.grandchef.com.br/wp-content/uploads/2019/12/tenor-3.gif',
    title: 'Delivery 24 Horas',
    category: 'Bebidas',
    link: 'https://www.exemplo.com/delivery' // Link fictício para "Delivery 24 Horas"
  },
  {
    id: '3',
    url: 'https://i.gifer.com/LZ4n.gif',
    title: 'Radio Waves',
    category: 'Technology',
    link: 'https://www.exemplo.com/radio-waves' // Link fictício para "Radio Waves"
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    title: 'Vintage Radio',
    category: 'Classic',
    link: 'https://www.exemplo.com/vintage-radio' // Link fictício para "Vintage Radio"
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
    title: 'DJ Setup',
    category: 'Equipment',
    link: 'https://www.exemplo.com/dj-setup' // Link fictício para "DJ Setup"
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89',
    title: 'Radio Tower',
    category: 'Infrastructure',
    link: 'https://www.exemplo.com/radio-tower' // Link fictício para "Radio Tower"
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c',
    title: 'Microphone',
    category: 'Equipment',
    link: 'https://www.exemplo.com/microphone' // Link fictício para "Microphone"
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1495305379050-64540d6ee95d',
    title: 'Sound Waves',
    category: 'Technology',
    link: 'https://www.exemplo.com/sound-waves' // Link fictício para "Sound Waves"
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    title: 'Radio Station',
    category: 'Studio',
    link: 'https://www.exemplo.com/radio-station' // Link fictício para "Radio Station"
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1546708770-589dab7b22c7',
    title: 'Broadcasting',
    category: 'Live',
    link: 'https://www.exemplo.com/broadcasting' // Link fictício para "Broadcasting"
  }
];

// Componente principal para exibir a grade de GIFs
export default function GifGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {featuredGifs.map((gif) => (
        <a
          key={gif.id}
          href={gif.link} // Link associado a cada card
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Adiciona segurança ao abrir novos links
        >
          <GifCard
            title={gif.title} // Título do GIF
            imageUrl={gif.url} // URL da imagem
            category={gif.category} // Categoria
          />
        </a>
      ))}
    </div>
  );
}
