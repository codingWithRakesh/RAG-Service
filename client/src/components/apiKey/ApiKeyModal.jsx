import { useState } from "react";

const ApiKeyModal = ({ onSave }) => {
  const [key, setKey] = useState("");

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 w-[90%] max-w-md space-y-4">
        <h2 className="text-lg font-semibold text-white">Enter API Key 🔑</h2>

        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Paste your API key..."
          className="w-full bg-[#020617] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white"
        />

        <button
          onClick={() => onSave(key)}
          className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ApiKeyModal;
