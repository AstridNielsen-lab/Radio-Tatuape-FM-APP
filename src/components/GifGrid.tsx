import React from 'react';
import { GifCard } from './GifCard';

const featuredGifs = [
  {
    id: '1',
    url: 'https://github.com/AstridNielsen-lab/Radio-Tatuape-FM-APP/blob/index/card%20site%20radio%20tatuape%20fm.gif?raw=true',
    title: 'Anuncie',
    category: 'Parceiras'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491',
    title: 'Live Music',
    category: 'Concert'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17',
    title: 'Radio Waves',
    category: 'Technology'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    title: 'Vintage Radio',
    category: 'Classic'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
    title: 'DJ Setup',
    category: 'Equipment'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89',
    title: 'Radio Tower',
    category: 'Infrastructure'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c',
    title: 'Microphone',
    category: 'Equipment'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1495305379050-64540d6ee95d',
    title: 'Sound Waves',
    category: 'Technology'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    title: 'Radio Station',
    category: 'Studio'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1546708770-589dab7b22c7',
    title: 'Broadcasting',
    category: 'Live'
  }
];

export default function GifGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {featuredGifs.map((gif) => (
        <GifCard
          key={gif.id}
          title={gif.title}
          imageUrl={gif.url}
          category={gif.category}
        />
      ))}
    </div>
  );
}
