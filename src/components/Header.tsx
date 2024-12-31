import React from 'react';
import { Search, Zap } from 'lucide-react';

interface HeaderProps {
  onChatClick: () => void;
}

export default function Header({ onChatClick }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap size={32} className="text-yellow-300" />
            <h1 className="text-2xl font-bold">Rádio Tatuapé FM</h1>
          </div>
          
         

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#categories" className="hover:text-yellow-300 transition">Serviços</a>
            <a href="#resources" className="hover:text-yellow-300 transition">Contato</a>
            <button 
              onClick={onChatClick}
              className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
            >
              Chat with Julio
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
