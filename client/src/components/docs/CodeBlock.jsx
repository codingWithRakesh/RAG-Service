import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative bg-[#0f172a] border border-gray-700 rounded-xl p-4 text-sm text-gray-300 overflow-x-auto">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 transition"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>

      <pre className="whitespace-pre-wrap">{code}</pre>
    </div>
  );
};

export default CodeBlock;
