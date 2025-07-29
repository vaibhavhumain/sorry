import React, { useState } from "react";
import confetti from "canvas-confetti";

const Games = () => {
  const [emoji, setEmoji] = useState("😐");
  const [answer, setAnswer] = useState(null);

  const randomEmoji = () => {
    const emojis = [
  "😆", "😂", "😘", "😎", "🥺", "😍", "🤪", "😛", "🤩", "😊", "😁", "😋", "😚", "😜", "😇", "😉", "😌", "🥰", "😅", "🤭",
  "🤗", "😈", "😏", "🙃", "😺", "😻", "😽", "🙈", "🙉", "🙊", "👀", "👅", "👄", "💋", "💘", "💝", "💖", "💗", "💓", "💞",
  "💟", "❣️", "💕", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "🎉", "🎊", "🎈", "🌟", "✨", "💫", "🌈", "🔥",
  "🌹", "🌺", "🌻", "🌼", "🌸", "🌷", "🌞", "🌝", "🪷", "🌙", "🌌", "🪄", "🎶", "🎵", "🎧", "🎤", "🎷", "🎹", "🎸", "🎻",
  "🥁", "💃", "🕺", "🫶", "👩‍❤️‍👨", "👩‍❤️‍👩", "👨‍❤️‍👨", "👫", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "💑", "💏", "💍", "💌", "💒", "🫂", "🥳", "🤍", "😹", "🐱"
];

    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  const handleAnswer = (option) => {
    setAnswer(option);
    if (option === "C") {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div className="page games p-4 text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Little Fun Time 🎮</h2>

      {/* Emoji Game */}
      <div className="my-8 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">😊 Emoji Mood Game</h3>
        <p className="text-6xl mb-4">{emoji}</p>
        <button
          onClick={randomEmoji}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition"
        >
          Change Mood
        </button>
      </div>

      {/* Multiple Choice Game */}
      <div className="my-8 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">❤️ Choose the Right Answer</h3>
        <p className="mb-4 text-lg">Who do you love the most? 😏</p>
        <ul className="space-y-2 text-left max-w-md mx-auto">
          {["A", "B", "C"].map((opt) => {
            const optionsText = {
              A: "Your Best Friend",
              B: "Your Mom",
              C: "Your Paglu 😘",
            };
            return (
              <li
                key={opt}
                className={`cursor-pointer p-2 rounded transition ${
                  answer === opt
                    ? opt === "C"
                      ? "bg-green-100 text-pink-600 font-semibold"
                      : "bg-red-100 text-gray-600 line-through"
                    : "hover:bg-pink-50"
                }`}
                onClick={() => handleAnswer(opt)}
              >
                {opt}. {optionsText[opt]}
              </li>
            );
          })}
        </ul>
        {answer && (
          <p className="mt-4 text-xl font-semibold text-pink-500 animate-pulse">
            {answer === "C"
              ? "Yay! You chose the right one 💖"
              : "No! You didn't get this right 😭"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Games;
