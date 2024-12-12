import React from "react";
import { useNavigate } from "react-router-dom";

export const Ranking = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="w-11/12 max-w-md text-center">
        {/* Header */}
        <header className="mb-5">
          <img
            src="/src/images/BUTTONBLINK.png"
            alt="Logo"
            className="w-12 h-auto mx-auto"
          />
        </header>

        {/* Título */}
        <h1 className="text-xl font-bold text-black mb-5">PUNTUACIONES</h1>

        {/* Barras de puntuación */}
        <div className="flex justify-around mb-5">
          {[
            { name: "aaa", score: 1524, img: "images/character1.png", highlighted: false },
            { name: "añañin", score: 1752, img: "images/character2.png", highlighted: true },
            { name: "bbb", score: 1276, img: "images/character3.png", highlighted: false },
          ].map((player, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 transform transition-transform duration-300 hover:scale-110"
            >
              <div
                className={`w-12 h-36 border-2 border-black rounded-md flex items-end justify-center overflow-hidden ${
                  player.highlighted ? "bg-yellow-200" : "bg-gray-200"
                }`}
              >
                <img
                  src={player.img}
                  alt={`Character ${index + 1}`}
                  className="w-full h-auto opacity-60"
                />
              </div>
              <div className="text-center font-bold text-black">
                <p className="text-sm">{player.name}</p>
                <p className="text-base">{player.score}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3">
          <button
            onClick={()=> navigate("/lobby")}
            className="py-3 px-5 bg-white text-black font-bold border-2 border-black rounded-lg hover:bg-gray-100 transition"
          >
            REVANCHA
          </button>
          <button
            onClick={()=> navigate("/me")}
            className="py-3 px-5 bg-gray-300 text-black font-bold border-2 border-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            SALIR
          </button>
        </div>
      </div>
    </div>
  );
};
