import { RouterProvider } from 'react-router-dom'; // Asegúrate de importar esto
import { router } from './router'; // Tu configuración de rutas

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
