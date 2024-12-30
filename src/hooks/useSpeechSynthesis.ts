import { useState, useEffect } from 'react';

interface UseSpeechSynthesisReturn {
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (voice: SpeechSynthesisVoice) => void;
  speak: (text: string) => void;
}

export function useSpeechSynthesis(): UseSpeechSynthesisReturn {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    
    const updateVoices = () => {
      const availableVoices = synth.getVoices();
      const languageVoices = availableVoices.filter(
        voice => voice.lang.startsWith(navigator.language)
      );
      setVoices(languageVoices);
      
      // Select default male voice
      const maleVoice = languageVoices.find(
        voice => voice.name.toLowerCase().includes('male')
      );
      if (maleVoice && !selectedVoice) {
        setSelectedVoice(maleVoice);
      }
    };

    synth.addEventListener('voiceschanged', updateVoices);
    updateVoices();

    return () => synth.removeEventListener('voiceschanged', updateVoices);
  }, []);

  const speak = (text: string) => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  return {
    voices,
    selectedVoice,
    setSelectedVoice,
    speak
  };
}