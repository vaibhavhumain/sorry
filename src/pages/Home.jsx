import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .page.home {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0 1rem;
            box-sizing: border-box;
            background: linear-gradient(to right, #fbc2eb, #a6c1ee);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            animation: fadeIn 1s ease-in;
          }

          .page.home h1 {
            font-size: 3.2rem;
            color: #d63384;
            margin-bottom: 1rem;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          }

          .page.home p {
            font-size: 1.3rem;
            color: #333;
            max-width: 600px;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .page.home button {
            padding: 0.9rem 2rem;
            font-size: 1.2rem;
            background: linear-gradient(to right, #ff4d6d, #ff8a80);
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }

          .page.home button:hover {
            background-color: #e8435d;
            transform: scale(1.05);
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="page home">
        <h1>I'm Sorry, My Love 💔</h1>
        <p>
          I know I made a mistake... and I hope this little site makes you smile again.
        </p>
        <button onClick={() => navigate("/memories")}>
          Start the Journey 💖
        </button>
      </div>
    </>
  );
};

export default Home;
