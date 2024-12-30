import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getGeminiResponse } from '../../services/api';
import { useSpeechSynthesis } from '../../hooks/useSpeechSynthesis';
import { VoiceSelector } from './VoiceSelector';
import { ChatInput } from './ChatInput';
import { DEFAULT_CHAT_MESSAGE } from '../../config/constants';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ type: 'bot', text: DEFAULT_CHAT_MESSAGE }]);
  const [isLoading, setIsLoading] = useState(false);
  const { voices, selectedVoice, setSelectedVoice, speak } = useSpeechSynthesis();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage('');
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      speak(response);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Sorry, I had trouble understanding that. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="text-purple-600" />
          <h3 className="font-semibold">Chat with Julio</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4 flex flex-col h-[500px]">
        <VoiceSelector
          voices={voices}
          selectedVoice={selectedVoice}
          onVoiceSelect={setSelectedVoice}
        />
        
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                msg.type === 'user' 
                  ? 'bg-purple-100 ml-8' 
                  : 'bg-gray-100 mr-8'
              }`}
            >
              <p className="text-sm text-gray-700">{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-pulse text-purple-600">...</div>
            </div>
          )}
        </div>

        <ChatInput
          message={message}
          onMessageChange={setMessage}
          onSubmit={handleSubmit}
          onSpeak={() => messages.length > 0 && speak(messages[messages.length - 1].text)}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}