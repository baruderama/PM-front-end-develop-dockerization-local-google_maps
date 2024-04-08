import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

//Creacion de un protector de ruta para solo usuarios autenticados

/**
 * @module ProtectedRoute
 * @returns <Outlet />
 *
 * EXPLI: Este componenete verifica si el usuario esta autenticado. Si esta autenticado, deja
 * al usuario acceder a las rutas. Si no esta autenticado lo devuelve a la ruta que represente
 * la url "/" que en este caso es la vista de @module LoginPage
 */
const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

export { ProtectedRoute };
