import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateRoom = () => {
  const navigate = useNavigate();
  // Estado para almacenar la dificultad seleccionada
  const [difficulty, setDifficulty] = useState(null);

  // Función para manejar la selección de dificultad
  const handleDifficultySelect = (level) => {
    setDifficulty(level);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
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
          src="/src/images/BUTTONBLINK.png"
          alt="ButtonBlink Logo"
          className="w-10 h-auto"
        />
      </div>

      {/* Creating Game */}
      <h2 className="text-xl font-bold text-black mb-4">CREATING GAME...</h2>
      <div className="border-2 border-black rounded-md px-6 py-2 mb-6">
        <p className="text-lg font-bold">SALA #0001</p>
      </div>

      {/* Game Settings */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold flex items-center justify-center gap-2">
          <span>⚙️</span> GAME SETTINGS <span>⚙️</span>
        </h3>
        <div className="mt-4">
          {/* Código de Placa */}
          <p className="font-bold mb-2">CÓDIGO DE PLACA</p>
          <div className="border-2 border-black rounded-md px-4 py-2 text-lg">
            TM-1243
          </div>
        </div>

        {/* Modalidad */}
        <div className="mt-6">
          <p className="font-bold mb-2">MODALIDAD</p>
          <div className="flex gap-4 justify-center">
            <button className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
              👥
            </button>
            <button className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
              👤
            </button>
          </div>
        </div>

        {/* Dificultad */}
        <div className="mt-6">
          <p className="font-bold mb-2">DIFICULTAD</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleDifficultySelect(1)} // Selección de dificultad 1
              className={`border-2 border-black rounded-md w-10 h-10 flex items-center justify-center ${
                difficulty === 1 ? 'bg-rose-200' : ''
              }`}
            >
              1
            </button>
            <button
              onClick={() => handleDifficultySelect(2)} // Selección de dificultad 2
              className={`border-2 border-black rounded-md w-10 h-10 flex items-center justify-center ${
                difficulty === 2 ? 'bg-rose-200' : ''
              }`}
            >
              2
            </button>
            <button
              onClick={() => handleDifficultySelect(3)} // Selección de dificultad 3
              className={`border-2 border-black rounded-md w-10 h-10 flex items-center justify-center ${
                difficulty === 3 ? 'bg-rose-200' : ''
              }`}
            >
              3
            </button>
          </div>
        </div>
      </div>

      {/* Ingresar al Lobby */}
      <button
        onClick={() => navigate('/lobby')}
        className="px-6 py-3 bg-rose-200 text-black font-bold rounded-md shadow-lg hover:bg-rose-300 transition"
        disabled={!difficulty} // Deshabilitar si no se selecciona dificultad
      >
        CREAR LOBBY
      </button>
    </div>
  );
};
