import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listModulesAsync } from "../../features/modules/modulesSlice";
import { Loading } from "./Loading";

function ListModulesDropdown({ onModuleSelect }) {
  const modulesList = useSelector((state) => state.modules);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listModulesAsync());
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de modulos:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [dispatch]);

  const modulesDataData = modulesList ? modulesList.data : [];

  const handleModuleSelection = (event) => {
    const moduleId = event.target.value;

    const selectedModule = modulesDataData.find(
      (module) => module.modulesId === parseInt(moduleId)
    );

    onModuleSelect(selectedModule);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  }

  //TODO aqui se debe hacer la consutla de los sub-modulos que pertenecen al usuario
  return (
    <div className="form-group mg-b-10-force">
      <select
        id="userDropdown"
        className="form-control select2"
        data-placeholder="Seleccione un módulo"
        onChange={handleModuleSelection}
      >
        <option label="Seleccione un módulo"></option>
        {modulesDataData.map((module) => (
          <option key={module.modulesId} value={module.modulesId}>
            {module.modules_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ListModulesDropdown };
