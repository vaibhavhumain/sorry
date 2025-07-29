import React from "react";
import { useNavigate } from "react-router-dom";
const Memories = () => {
  const navigate = useNavigate();

  const memories = [
    { src: "/Mendhakoooo1.jpg", caption: "That peaceful moment 😌" },
    { src: "/Mendhakoooo2.jpg", caption: "My first gift 😘" },
    { src: "/Mendhakooooo3.jpg", caption: "My best gift ❤️" }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col items-center px-4 py-10 overflow-x-hidden">
      <h2 className="text-4xl font-bold text-pink-600 mb-8 text-center">Our Memories</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">
        {memories.map((mem, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 w-[220px] hover:scale-105 transition duration-300"
          >
            <img src={mem.src} alt={`memory-${i}`} className="rounded-md w-full h-auto" />
            <p className="text-center text-gray-700 mt-3">{mem.caption}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/letter")}
        className="mt-10 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-lg transition-all shadow-md"
      >
        Read My Letter 💌
      </button>
    </div>
  );
};

export default Memories;
