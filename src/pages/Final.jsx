import React, { useState } from "react";

const Final = () => {
  const [response, setResponse] = useState("");

  return (
    <div className="page final">
      <style>{`
        .page.final {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #ffdde1, #ee9ca7);
          padding: 2rem;
          font-family: 'Segoe UI', sans-serif;
        }

        .final-box {
          text-align: center;
          max-width: 600px;
          background: #fff;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .final-box h2 {
          font-size: 2.3rem;
          color: #ff4d6d;
          margin-bottom: 1.5rem;
        }

        .final-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .final-buttons button {
          padding: 12px 20px;
          border-radius: 30px;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: white;
        }

        .yes-btn {
          background-color: #ff4d6d;
        }

        .no-btn {
          background-color: #999;
        }

        .final-buttons button:hover {
          transform: scale(1.05);
        }

        .response-box {
          font-size: 1.5rem;
          color: #333;
          background: #fdfdfd;
          padding: 1rem 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>

      <div className="final-box">
        <h2>Will You Forgive Me? 🥺</h2>
        <div className="final-buttons">
          <button className="yes-btn" onClick={() => setResponse("Yay! Let's fix this together 💖")}>
            ❤️ I forgive you
          </button>
          <button className="no-btn" onClick={() => setResponse("Sad... 😢")}>
            💔 Still mad
          </button>
        </div>
        {response && <div className="response-box">{response}</div>}
      </div>
    </div>
  );
};

export default Final;
