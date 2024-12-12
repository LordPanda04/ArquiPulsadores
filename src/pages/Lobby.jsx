import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Lobby = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center bg-white h-screen">
      <div className="w-11/12 max-w-md text-center">
        {/* Header */}
        <Link to="/menu" className="block mb-6">
          <header className="flex items-center justify-center">
            <img
              src="/src/images/BUTTONBLINK.png"
              alt="ButtonBlink Logo"
              className="w-10 h-auto mr-3"
            />
            <h1 className="text-lg font-bold text-teal-700">BUTTONBLINK</h1>
          </header>
        </Link>

        {/* Sala */}
        <div className="border-2 border-black rounded-lg p-4 mb-6">
          <p className="text-base font-bold text-black">SALA #0001</p>
          <p className="text-sm text-gray-600">10 SEGUNDOS PARA INICIAR PARTIDA</p>
        </div>

        {/* Lista de Jugadores */}
        <div className="border-2 border-black rounded-lg p-4 mb-6 text-left">
          <ol className="list-decimal pl-5 text-sm text-black space-y-1">
            <li>aaaa</li>
            <li>bbbb</li>
            <li>cccc</li>
            <li>dddd</li>
            <li>eeee</li>
          </ol>
        </div>

        {/* Dificultad */}
        <div className="mb-6">
          <p className="text-base font-bold mb-3">DIFICULTAD</p>
          <div className="flex justify-between gap-4">
            <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center font-bold text-base cursor-pointer hover:bg-gray-200">
              1
            </div>
            <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center font-bold text-base cursor-pointer hover:bg-gray-200">
              2
            </div>
            <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center font-bold text-base cursor-pointer hover:bg-gray-200">
              3
            </div>
            <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center font-bold text-base cursor-pointer hover:bg-gray-200">
              4
            </div>
          </div>
        </div>

        {/* Botón Blink */}
        <button
          onClick={()=> navigate("/jugando")}
          className="inline-block py-2 px-6 bg-gray-300 text-black font-bold border-2 border-gray-300 rounded-lg shadow cursor-pointer hover:bg-gray-400 transition"
        >
          BLINK!
        </button>
      </div>
    </div>
  );
};
