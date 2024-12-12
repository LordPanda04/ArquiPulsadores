import React from 'react';
import { useNavigate } from 'react-router-dom';

export const JoinRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white px-4 pt-4">
      {/* Parte superior */}
      <div className="flex items-center justify-between w-full mb-6">
        {/* Return to menu */}
        <button
          onClick={() => navigate('/menu')}
          className="flex items-center gap-2 text-black font-bold"
        >
          <span className="text-lg">←</span> Return to menu
        </button>
        {/* Logo */}
        <img
          src="images/buttonBlinkLogo.png"
          alt="ButtonBlink Logo"
          className="w-10 h-auto"
        />
      </div>

      {/* Título */}
      <h2 className="text-xl font-bold text-black mb-4">JOINING GAME...</h2>

      {/* Sala Input */}
      <div className="flex items-center border-2 border-black rounded-md px-4 py-2 mb-6 w-full max-w-xs">
        <span className="font-bold">SALA #</span>
        <input
          type="text"
          placeholder=""
          className="ml-2 border-l-2 border-black pl-2 w-full focus:outline-none"
        />
      </div>

      {/* Game Settings */}
      <div className="text-center mb-6 w-full max-w-xs">
        <h3 className="text-lg font-bold flex items-center justify-center gap-2 mb-4">
          <span>⚙️</span> GAME SETTINGS <span>⚙️</span>
        </h3>
        {/* Modalidad */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <p className="font-bold">MODALIDAD</p>
          <button className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
            👥
          </button>
        </div>
        {/* Dificultad */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">DIFICULTAD</p>
          <div className="flex gap-2">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
        </div>
      </div>

      {/* Ingresar al Lobby */}
      <button
        onClick={() => navigate('/lobby')}
        className="px-6 py-3 bg-rose-200 text-black font-bold rounded-md shadow-lg hover:bg-rose-300 transition w-full max-w-xs"
      >
        Ingresar al lobby
      </button>
    </div>
  );
};
