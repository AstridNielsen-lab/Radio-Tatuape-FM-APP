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
  <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Service Desk</h3>
      <p className="text-gray-600">
        Foque no seu core business enquanto nossa equipe de especialistas atendem suas demandas de forma centralizada e profissional, permitindo assim que sua empresa mantenha o foco e reduza custos.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Alocação</h3>
      <p className="text-gray-600">
        Alocação de profissionais especializados, com experiência, qualificações e certificações, de acordo com as necessidades específicas de nossos clientes. Disponibilizamos equipe para atendimentos sazonais ou de médio e longo prazo. Atendemos alocação full ou part time.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Field Support</h3>
      <p className="text-gray-600">
        Uma equipe técnica especializada e constantemente treinada, pronta para atender suas necessidades in loco. Monitoramento constante do nível de serviço e da satisfação do cliente mantém um alto nível de feedbacks positivos.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Cabling</h3>
      <p className="text-gray-600">
        Cabeamento inteligente e normatizado por organizações técnicas internacionais, o que garante ao usuário utilizar o que há de melhor em tecnologia e segurança para sua rede.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Projetos</h3>
      <p className="text-gray-600">
        Transições de ativos de informática e execução de tarefas de grandes volumes com tempo reduzido. Site survey, inventário, rollout e demais projetos on demand realizados de forma integrada e profissional.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Sob Medida</h3>
      <p className="text-gray-600">
        Possui alguma demanda? Consulte-nos! Possuímos uma equipe especializada e uma rede de parceria, para avaliar e ofertar a solução adequada.
      </p>
    </div>
  </div>
</section>


<section id="resources" className="mb-12">
  <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
  <p className="text-gray-700 mb-6">
    Entre em contato conosco e descubra como podemos atender às necessidades do seu negócio com soluções sob medida. Nossa equipe está pronta para responder suas dúvidas, oferecer orçamentos e garantir que você tenha o suporte necessário para alcançar seus objetivos.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Telefone</h3>
      <p className="text-gray-600">
        Ligue para nós e fale diretamente com um de nossos especialistas. Estamos disponíveis para tirar suas dúvidas e auxiliar em suas solicitações.
      </p>
      <p className="text-gray-600 font-bold">+55 11 97060-3441</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">E-mail</h3>
      <p className="text-gray-600">
        Envie-nos um e-mail com sua solicitação, dúvida ou projeto. Responderemos o mais rápido possível para ajudá-lo a alcançar seus objetivos.
      </p>
      <p className="text-gray-600 font-bold">radiotatuapefm@gmail.com</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Orçamentos</h3>
      <p className="text-gray-600">
        Solicite um orçamento personalizado agora mesmo! Clique no botão abaixo e descreva sua demanda. Nossa equipe retornará em breve com a melhor solução para você.
      </p>
      <a 
        href="/orcamentos" 
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Solicitar Orçamento
      </a>
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
