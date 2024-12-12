import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMockScores } from "../utils/mockData"; // Asegúrate de que esta función esté exportada correctamente.

export const Ranking = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  // Función para actualizar el ranking
  const updateRanking = () => {
    const sortedScores = [...getMockScores()]
      .filter(player => player && player.player && player.points >= 0) // Filtra entradas no válidas
      .sort((a, b) => b.points - a.points); // Ordena en orden descendente
    setScores(sortedScores); // Actualiza el estado con la lista ordenada
  };

  useEffect(() => {
    // Carga los puntajes al montar el componente
    updateRanking();
  }, []);  // Solo ejecuta una vez al montar

  // Los 3 primeros jugadores
  const top3 = scores.slice(0, 3);
  // El resto de los jugadores
  const others = scores.slice(3);

  return (
    <div className="flex flex-col items-center bg-white h-screen py-8">
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

        {/* Los 3 primeros jugadores - simulando una carrera */}
        <div className="flex justify-between w-full mb-5">
          {top3.map((player, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 transform transition-transform duration-300"
              style={{
                flex: index === 1 ? 1 : 1.5, // Aumenta el tamaño de las barras del primer lugar
              }}
            >
              <div
                className={`w-12 ${
                  index === 0 ? "h-48" : index === 1 ? "h-40" : "h-36"
                } border-2 border-black rounded-md flex items-end justify-center overflow-hidden ${
                  index === 0
                    ? "bg-yellow-300" // El primero tendrá un color de fondo amarillo
                    : index === 1
                    ? "bg-silver-200" // El segundo tendrá un color plateado
                    : "bg-bronze-200" // El tercero tendrá un color broncíneo
                }`}
              >
                {/* Barra representando el jugador */}
                <div className="w-full h-full" />
              </div>
              <div className="text-center font-bold text-black">
                <p className="text-sm">{player.player}</p>
                <p className="text-base">{player.points}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla para el resto de los jugadores */}
        <div className="w-full mt-5">
          <table className="table-auto w-full text-sm text-center border-collapse">
            <thead>
              <tr>
                <th className="border-b border-black py-1">#</th>
                <th className="border-b border-black py-1">Nombre</th>
                <th className="border-b border-black py-1">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {others.map((player, index) => (
                <tr key={player.player}>
                  <td className="border-b border-black py-1">{index + 4}</td>
                  <td className="border-b border-black py-1">{player.player}</td>
                  <td className="border-b border-black py-1">{player.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3 mt-5">
          <button
            onClick={() => navigate("/lobby")}
            className="py-3 px-5 bg-white text-black font-bold border-2 border-black rounded-lg hover:bg-gray-100 transition"
          >
            REVANCHA
          </button>
          <button
            onClick={() => navigate("/menu")}
            className="py-3 px-5 bg-gray-300 text-black font-bold border-2 border-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            SALIR
          </button>
        </div>
      </div>
    </div>
  );
};
