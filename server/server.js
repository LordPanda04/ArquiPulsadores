const express = require('express');
const app = express();

let scores = [
  { player: 'Alice', points: 10 },
  { player: 'Bob', points: 15 },
  { player: 'Charlie', points: 20 },
];

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  setInterval(() => {
    // Simula la actualización de las puntuaciones
    scores = scores.map((score) => ({
      ...score,
      points: score.points + Math.floor(Math.random() * 5),
    }));

    res.write(`data: ${JSON.stringify(scores)}\n\n`);
  }, 2000);

  req.on('close', () => {
    console.log('Cliente desconectado');
  });
});

app.listen(3000, () => console.log('Servidor SSE corriendo en el puerto 3000'));
