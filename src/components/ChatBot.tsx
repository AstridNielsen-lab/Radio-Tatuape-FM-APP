import React, { useState } from 'react';
import { MessageSquare, Volume2 } from 'lucide-react';

export default function ChatBot() {
  const [message, setMessage] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  React.useEffect(() => {
    const synth = window.speechSynthesis;
    const updateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices.filter(voice => voice.lang.startsWith(navigator.language)));
      
      // Select default male voice
      const maleVoice = availableVoices.find(voice => voice.lang.startsWith(navigator.language) && voice.name.toLowerCase().includes('male'));
      if (maleVoice) setSelectedVoice(maleVoice);
    };

    synth.addEventListener('voiceschanged', updateVoices);
    updateVoices();

    return () => synth.removeEventListener('voiceschanged', updateVoices);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer AIzaSyC9_tWhLz-XE-dS_b_GaNFm3jqnrei7TBY`
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }]
        })
      });

      const data = await response.json();
      const answer = data.candidates[0].content.parts[0].text;

      if (selectedVoice) {
        const utterance = new SpeechSynthesisUtterance(answer);
        utterance.voice = selectedVoice;
        window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <MessageSquare className="text-purple-600" />
          <h3 className="font-semibold">Chat with Julio</h3>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Voice Selection</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            onChange={(e) => setSelectedVoice(voices[parseInt(e.target.value)])}>
            {voices.map((voice, index) => (
              <option key={index} value={index}>{voice.name}</option>
            ))}
          </select>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
          />
          <button
            type="submit"
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <MessageSquare size={20} />
          </button>
          <button
            type="button"
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Volume2 size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}