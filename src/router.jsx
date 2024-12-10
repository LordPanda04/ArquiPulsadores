import { createBrowserRouter } from "react-router-dom"; // Importa createBrowserRouter
import { Paginaprincipal } from "./pages/Paginaprincipal"; // Importa el componente
import { Login } from "./pages/login";
import { Menu } from "./pages/menu";
import { Lobby } from "./pages/Lobby"; // Importa el componente
import { Jugando } from "./pages/jugando";
import { Ranking } from "./pages/ranking";

export const router = createBrowserRouter([
  {
    path: "/", // Ruta principal
    element: (
      <>
        <Paginaprincipal />
        <Login />
        <Menu />
        <Lobby />
        <Jugando />
        <Ranking />
      </>
    ), // Renderiza ambos componentes
  },
]);
