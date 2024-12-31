import React, { useState } from 'react';
import Header from './components/Header';
import GifGrid from './components/GifGrid';
import ChatBot from './components/ChatBot/ChatBot';
import Footer from './components/Footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onChatClick={() => setIsChatOpen(true)} />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Parcerias</h2>
          <GifGrid />
        </section>

        <section id="categories" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Serviços</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">+5511970603441</h3>
              <p className="text-gray-600">radiotatuapefm@gmail.com.</p>
            </div>
          </div>
        </section>

        <section id="resources" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">+5511970603441</h3>
              <p className="text-gray-600">radiotatuapefm@gmail.com.</p>
            </div>
          </div>
        </section>
      </main>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
