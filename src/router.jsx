import { createBrowserRouter } from "react-router-dom"; 
import { Paginaprincipal } from "./pages/Paginaprincipal"; 
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Menu } from "./pages/Menu";
import { JoinRoom } from "./pages/JoinRoom";
import { CreateRoom } from "./pages/CreateRoom";
import { Lobby } from "./pages/Lobby"; 
import { Jugando } from "./pages/Jugando";
import { Ranking } from "./pages/Ranking";
import { Placas } from "./pages/Placas";

export const router = createBrowserRouter([
  {
    path: "/", // Ruta principal
    element: <Paginaprincipal />, // Componente principal
  },
  {
    path: "/login", // Ruta para Login
    element: <Login />,
  },
  {
    path: "/register", //Ruta para register
    element: <Register />,
  },
  {
    path: "/menu", // Ruta para el Menú
    element: <Menu />,
  },
  {
    path: "/joinroom",
    element: <JoinRoom />,
  },
  {
    path: "/createroom",
    element: <CreateRoom />,
  },
  {
    path: "/lobby", // Ruta para Lobby
    element: <Lobby />,
  },
  {
    path: "/jugando", // Ruta para Jugando
    element: <Jugando />,
  },
  {
    path: "/ranking", // Ruta para Ranking
    element: <Ranking />,
  },
  {
    path: "/placas", // Ruta para Placas
    element: <Placas />,
  },
]);