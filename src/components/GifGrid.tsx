import React from 'react';
import { GifCard } from './GifCard';

const featuredGifs = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74',
    title: 'Digital Wave',
    category: 'Technology'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74',
    title: 'Nature Flow',
    category: 'Nature'
  }
];

export default function GifGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
