import logo from "../assets/logo.png";

import reactLogo from "../assets/react.png";
import javaLogo from "../assets/java.png";
import pythonLogo from "../assets/python.png";
import firecrawlLogo from "../assets/firecrawl.png";
import socketLogo from "../assets/socket.png";
import dbLogo from "../assets/database.png";

const services = [
  { name: "Frontend Client", logo: reactLogo },
  { name: "Main API Server", logo: javaLogo },
  { name: "RAG Engine", logo: pythonLogo },
  { name: "Vector DB", logo: dbLogo },
  { name: "Firecrawl", logo: firecrawlLogo },
  { name: "Socket.IO", logo: socketLogo },
];

const AdvancedLoadingScreen = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white px-4 overflow-hidden">
      <div className="relative w-full max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:hidden">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">RAG Flow</h1>
          </div>

          <div className="relative flex flex-col items-center">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Service */}
                <div className="flex items-center gap-3">
                  <img src={service.logo} className="w-5 h-5" />
                  <span className="text-sm text-gray-300 font-medium">
                    {service.name}
                  </span>
                </div>

                {i !== services.length - 1 && (
                  <div className="relative h-10 w-0.5 bg-white/10 mt-2 mb-2 overflow-hidden">
                    <div
                      className="absolute w-full h-6 bg-linear-to-b from-green-400 via-blue-500 to-purple-500 opacity-70 animate-flow-vertical"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 flex items-center gap-2">
              <img src={logo} className="w-6 h-6" />
              <span className="text-sm font-semibold text-white">
                RAG Flow Ready
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">Initializing services...</p>

            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="animate-pulse">⏳</span>
              <span>
                Cold start in progress...
                <span className="text-gray-500"> (Render free tier)</span>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block h-105 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={service.logo} className="w-6 h-6" />

                <div className="text-sm font-semibold text-gray-200 w-44">
                  {service.name}
                </div>

                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
              </div>
            ))}
          </div>

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 420"
            fill="none"
          >
            {services.map((_, i) => {
              const y = 60 + i * 55;

              return (
                <g key={i}>
                  <path
                    d={`M 200 ${y} C 350 ${y} 450 210 600 210`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    opacity="0.5"
                    fill="none"
                  />

                  <circle r="3" fill="white">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                      path={`M 200 ${y} C 350 ${y} 450 210 600 210`}
                    />
                  </circle>
                </g>
              );
            })}

            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col items-start max-w-xs">
            <div className="flex items-center gap-3">
              <img src={logo} className="w-12 h-12" />
              <h1 className="text-3xl font-extrabold">RAG Flow</h1>
            </div>

            <div className="h-1 w-48 bg-linear-to-r from-green-400 via-blue-500 to-purple-500 mt-2 rounded-full animate-pulse" />

            <p className="text-gray-400 text-sm mt-3">
              Initializing services...
            </p>

            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="animate-pulse">⏳</span>
              <span>
                Cold start in progress...
                <span className="text-gray-500"> (Render free tier)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes flowVertical {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }

          .animate-flow-vertical {
            animation: flowVertical 1.5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AdvancedLoadingScreen;
