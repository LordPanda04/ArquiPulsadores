import scoresData from '../data/mockScores.json';

// Función para simular obtener los datos del JSON
export const getMockScores = () => {
  return [...scoresData]; // Retorna una copia de los datos para evitar mutaciones
};

// Función para actualizar manualmente un jugador
export const updateMockScore = (playerName, newPoints) => {
  const player = scoresData.find((score) => score.player === playerName);
  if (player) {
    player.points = newPoints;
  }
};
