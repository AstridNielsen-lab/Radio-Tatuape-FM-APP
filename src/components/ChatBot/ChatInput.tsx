import React from 'react';
import { MessageSquare, Volume2 } from 'lucide-react';

interface ChatInputProps {
  message: string;
  onMessageChange: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSpeak: () => void;
  isLoading: boolean;
}

export function ChatInput({ 
  message, 
  onMessageChange, 
  onSubmit, 
  onSpeak,
  isLoading 
}: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="Ask me anything..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50">
        <MessageSquare size={20} />
      </button>
      <button
        type="button"
        onClick={onSpeak}
        disabled={isLoading}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
        <Volume2 size={20} />
      </button>
    </form>
  );
}