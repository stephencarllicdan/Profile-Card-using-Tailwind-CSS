export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-6">
      {}
      <img
        src="/cd788a3a-f661-4148-a522-ba05a52eda55.jpg"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-green-400 shadow-[0_0_20px_#22c55e] transform transition-transform duration-500 hover:scale-110"
      />

      {}
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-green-400 text-center tracking-wide drop-shadow-[0_0_10px_#22c55e]">
        Licdan, Stephen Carl M.
      </h1>

      {}
      <p className="text-center md:text-left max-w-xl mt-4 px-4 text-gray-300 leading-relaxed">
        An IT student passionate about coding and design. I enjoy creating simple, responsive websites and exploring new tools to improve my skills.
      </p>

      {}
      <div className="flex flex-row items-center justify-center gap-4 mt-8 text-lg">
        <a
          href="https://www.facebook.com/poyetzniel.licdan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-green-400 hover:to-lime-400 hover:shadow-[0_0_15px_#22c55e] transform transition-all duration-300 hover:scale-110"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/itsmepoyti"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:from-emerald-400 hover:to-green-500 hover:shadow-[0_0_15px_#22c55e] transform transition-all duration-300 hover:scale-110"
        >
          Instagram
        </a>
        <a
          href="https://github.com/angelurapal-hash"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-full shadow-lg hover:from-gray-600 hover:to-gray-800 hover:shadow-[0_0_15px_#22c55e] transform transition-all duration-300 hover:scale-110"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
