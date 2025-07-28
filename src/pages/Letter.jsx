import React from "react";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const navigate = useNavigate();

  return (
    <div className="page letter">
      <style>{`
        .page.letter {
          background: linear-gradient(to right, #fbc2eb, #a18cd1);
          min-height: 100vh;
          padding: 3rem 2rem;
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .page.letter h2 {
          font-size: 2.5rem;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .page.letter p {
          font-size: 1.2rem;
          color: #fff;
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.7;
          background: rgba(255, 255, 255, 0.15);
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .page.letter button {
          padding: 12px 24px;
          font-size: 1.1rem;
          border-radius: 25px;
          background-color: #ff4d6d;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .page.letter button:hover {
          background-color: #e8435d;
        }
      `}</style>

      <h2>My Letter to You</h2>
      <p>
        Dear Love,<br /><br />
        I'm truly sorry for what happened. You mean the world to me and I can't imagine my day without talking to you.
        I am really sorry I made you cry today, but I promise it won't happen again.
        I messed up, but I want to make it right.
        <br /><br />
        Yours forever,<br />
        Naan paneer paglu 💌
      </p>

      <button onClick={() => navigate("/final")}>
        Continue ➡️
      </button>
    </div>
  );
};

export default Letter;
