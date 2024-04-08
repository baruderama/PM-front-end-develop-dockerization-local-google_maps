import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listAccessOneAsync } from "../features/access/accesOneTime";
import React, { useState, useEffect } from "react";

const Permission = ({ path, element }) => {
  const accessList = useSelector((state) => state.accessone);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listAccessOneAsync());
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
      }
    };

    loadData();
  }, [dispatch]);

  useEffect(() => {
    // Verificar si los datos de los módulos se han cargado

    // Actualizar el estado con los datos de los módulos
    setModulesData(accessList.access_data);
  }, [accessList]);

  const modulesDataData = accessList ? accessList : [];

  const [modulesData, setModulesData] = useState(modulesDataData.access_data);
  // const [selectedCheckboxes, setSelectedCheckboxes] = useState("");
  if (!modulesData) {
    //   // Muestra un indicador de carga o un mensaje de "Cargando"
    return <div>Cargando...</div>;
  }

  const matchingSubmodule = modulesData.find((module) =>
    module.Sub_Modules.some((submodule) => submodule.submodules_slug === path)
  );

  // Si encontramos un submódulo con el slug igual al path
  if (matchingSubmodule) {
    const hasPermission = matchingSubmodule.Sub_Modules.find(
      (submodule) => submodule.submodules_slug === path
    ).submodules_access;

    if (hasPermission) {
      // Si el usuario tiene permiso, mostramos el componente Route con la ruta protegida
      return element;
    }
  }

  return <Navigate to="/in" />;
};

export { Permission };
