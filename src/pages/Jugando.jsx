import React from "react";

export const Jugando = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="w-11/12 max-w-md text-center">
        {/* Header */}
        <header className="flex items-center justify-center mb-5">
          <img
            src="images/buttonBlinkLogo.png"
            alt="Logo"
            className="w-10 h-auto mr-3"
          />
          <h1 className="text-lg font-bold text-teal-700">BUTTONBLINK</h1>
        </header>

        {/* Sala */}
        <div className="border-2 border-black rounded-lg p-4 mb-5 font-bold text-black">
          <p>SALA #0001</p>
        </div>

        {/* Lista de Puntuaciones */}
        <div className="mb-5">
          {[
            { name: "aaaaa", score: 723 },
            { name: "bbbb", score: 655 },
            { name: "cccc", score: 402 },
            { name: "dddd", score: 212 },
            { name: "eeee", score: 201 },
          ].map((player, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-2 border-black rounded-md p-3 mb-3 bg-gray-300"
            >
              <p className="text-base font-bold text-black">{player.name}</p>
              <p className="text-base font-bold text-black">{player.score}</p>
            </div>
          ))}
        </div>

        {/* Botón Resultados */}
        <Link
          to="/ranking"
          className="inline-block py-3 px-6 bg-gray-300 text-black font-bold border-2 border-gray-300 rounded-lg hover:bg-gray-400 transition"
        >
          RESULTADOS
        </Link>
      </div>
    </div>
  );
};
