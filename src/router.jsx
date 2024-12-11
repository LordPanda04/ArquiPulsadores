import { createBrowserRouter } from "react-router-dom"; 
import { Paginaprincipal } from "./pages/Paginaprincipal"; 
import { Login } from "./pages/Login";
import { Menu } from "./pages/Menu";
import { Lobby } from "./pages/Lobby"; 
import { Jugando } from "./pages/Jugando";
import { Ranking } from "./pages/Ranking";

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
    path: "/menu", // Ruta para el Menú
    element: <Menu />,
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
]);
// export const router = createBrowserRouter([
//   {
//     path: "/", // Ruta principal
//     element: (
//       <>
//         <Paginaprincipal />
//         <Login />
//         <Menu />
//         <Lobby />
//         <Jugando />
//         <Ranking />
//       </>
//     ), // Renderiza ambos componentes
//   },
// ]);