import ChatSection from "../components/apiKey/ChatSection.jsx";
import { useLocation } from "react-router-dom";

const TryPage = () => {
  const location = useLocation();
  const apiKey = location.state?.apiKey || null;

  return (
    <div className="h-screen bg-[#020617] text-white p-4 sm:p-6">
      <div className="max-w-4xl mx-auto h-full">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Try Your API 💬</h1>
          <p className="text-gray-400 text-sm">
            Chat with your uploaded documents
          </p>
        </div>

        <div className="h-[85%] bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4">
          <ChatSection externalApiKey={apiKey} />
        </div>
      </div>
    </div>
  );
};

export default TryPage;
