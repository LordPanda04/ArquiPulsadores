import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateRoom = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null); // Estado para modalidad seleccionada

  const handleDifficultySelect = (level) => {
    setDifficulty(level);
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/src/images/background.png')" }}
    >
      {/* Contenedor principal transparente */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-6 w-10/12 max-w-lg text-center">
        {/* Parte superior con retorno y logo */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/menu')}
            className="flex items-center gap-2 text-black font-bold"
          >
            <span className="text-lg">←</span>
          </button>
          <img
            src="/src/images/BUTTONBLINK.png"
            alt="ButtonBlink Logo"
            className="w-10 h-auto"
          />
        </div>

        {/* Título */}
        <h2 className="text-xl font-bold text-black mb-4">CREATING ROOM...</h2>

        {/* Número de sala */}
        <div className="border-2 border-black rounded-md px-6 py-2 mb-6 bg-green-200">
          <p className="text-lg font-bold">SALA #0001</p>
        </div>

        {/* Game Settings */}
        <h3 className="text-lg font-bold flex items-center justify-center gap-2 mb-6">
          <span>⚙️</span> GAME SETTINGS <span>⚙️</span>
        </h3>

        {/* Select */}
        <div className="mb-4">
          <select
            className="w-full px-4 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
          >
            <option value="esp">SELECT ESP</option>
            <option value="eng">SELECT ENG</option>
          </select>
        </div>

        {/* Modalidad */}
        <div className="mb-6">
          <p className="font-bold mb-2">MODALIDAD</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleModeSelect('single')}
              className={`border-2 border-black rounded-full w-12 h-12 flex items-center justify-center ${
                selectedMode === 'single' ? 'bg-green-200' : 'bg-white hover:bg-gray-200'
              } transition`}
            >
              👤
            </button>
            <button
              onClick={() => handleModeSelect('multi')}
              className={`border-2 border-black rounded-full w-12 h-12 flex items-center justify-center ${
                selectedMode === 'multi' ? 'bg-green-600' : 'bg-white hover:bg-gray-200'
              } transition`}
            >
              👥
            </button>
          </div>
        </div>

        {/* Dificultad */}
        <div className="mb-6">
          <p className="font-bold mb-2">DIFICULTAD</p>
          <div className="flex gap-4 justify-center">
            {[1, 2, 3].map((level) => (
              <button
                key={level}
                onClick={() => handleDifficultySelect(level)}
                className={`border-2 border-black rounded-full w-10 h-10 flex items-center justify-center ${
                  difficulty === level ? 'bg-green-600' : 'bg-white hover:bg-gray-200'
                } transition`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Botón Crear */}
        <button
          onClick={() => navigate('/lobby')}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
          disabled={!difficulty || !selectedMode} // Habilitar solo si se selecciona dificultad y modalidad
        >
          CREATE ROOM
        </button>
      </div>
    </div>
  );
};
