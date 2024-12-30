import React from 'react';

interface VoiceSelectorProps {
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  onVoiceSelect: (voice: SpeechSynthesisVoice) => void;
}

export function VoiceSelector({ voices, selectedVoice, onVoiceSelect }: VoiceSelectorProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Voice Selection</label>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        value={voices.indexOf(selectedVoice!)}
        onChange={(e) => onVoiceSelect(voices[parseInt(e.target.value)])}>
        {voices.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
}