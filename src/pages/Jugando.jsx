import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMockScores } from '../utils/mockData';

export const Jugando = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  // Función para ordenar y actualizar los puntajes
  const updateRanking = () => {
    const sortedScores = [...getMockScores()].filter(player => player && player.player && player.points >= 0) // Filtra entradas no válidas
      .sort((a, b) => b.points - a.points); // Ordena en orden descendente
    setScores(sortedScores); // Actualiza el estado con la lista ordenada
  };

  useEffect(() => {
    // Inicializa los puntajes al montar el componente
    updateRanking();

    // Simula la actualización periódica de los datos
    const interval = setInterval(() => {
      updateRanking();
    }, 2000); // Actualiza cada 2 segundos para reflejar cambios

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white px-4 pt-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/src/images/BUTTONBLINK.png"
          alt="ButtonBlink Logo"
          className="w-12 h-auto"
        />
      </div>

      {/* Sala Info */}
      <div className="text-center mb-4">
        <div className="border-2 border-black rounded-md px-6 py-2 mb-2">
          <p className="text-lg font-bold">SALA #0001</p>
        </div>
        <div className="flex justify-center gap-6 mb-2">
          <button className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
            👥
          </button>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">1 MINUTO PARA FIN DE PARTIDA...</p>
      </div>

      {/* Tabla de puntuaciones */}
      <div className="border-2 border-black rounded-md px-4 py-2 mb-6 w-full max-w-xs">
        <table className="table-auto w-full text-sm text-center">
          <thead>
            <tr>
              <th className="border-b border-black py-1">#</th>
              <th className="border-b border-black py-1">Nombre</th>
              <th className="border-b border-black py-1">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((player, index) => (
              <tr key={player.player}> {/* Usa el nombre del jugador como clave única */}
                <td className="border-b border-black py-1">{index + 1}</td>
                <td className="border-b border-black py-1">{player.player}</td>
                <td className="border-b border-black py-1">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => navigate('/ranking')}
        className="px-6 py-3 bg-rose-200 text-black font-bold rounded-md shadow-lg hover:bg-rose-300 transition"
      >
        RESULTADOS
      </button>
    </div>
  );
};
