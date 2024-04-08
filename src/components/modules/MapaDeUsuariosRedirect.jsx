import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const MapaDeUsuariosRedirect = () => {
//   // Redirige a la ruta deseada
//   const navigate = useNavigate();

//   // Redirige a la ruta deseada
//   React.useEffect(() => {
//     navigate("/in/geo-localization");
//   }, [navigate]);

//   return null;
// };

const MapaDeUsuariosRedirect = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const delayRedirect = setTimeout(() => {
        navigate("/in/geo-localization");
      }, 400); // Espera 100 milisegundos antes de redirigir
  
      return () => clearTimeout(delayRedirect); // Limpia el temporizador al desmontar
    }, [navigate]);
  
    return null;
  };

export {MapaDeUsuariosRedirect};
