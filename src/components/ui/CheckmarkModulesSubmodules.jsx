import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  listModulesAccessAsync,
  updateAccessAsync,
} from "../../features/modules/modulesSlice";
import { Loading } from "./Loading";

const CheckmarkModulesSubmodules = ({ selectedUser, onUpdate }) => {
  const moduleList = useSelector((state) => state.modules);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listModulesAccessAsync(selectedUser));
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
      }
    };

    loadData();
  }, [dispatch, selectedUser]);

  useEffect(() => {
    // Verificar si los datos de los módulos se han cargado

    // Actualizar el estado con los datos de los módulos
    setModulesData(moduleList.access_data);
  }, [moduleList]);

  const modulesDataData = moduleList ? moduleList : [];

  const [modulesData, setModulesData] = useState(modulesDataData.access_data);
  if (!modulesData) {
    //   // Muestra un indicador de carga o un mensaje de "Cargando"
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  }

  const handlerUpdateAccess = async () => {
    await dispatch(updateAccessAsync(selectedUser.usrId, modulesData));
    onUpdate();
  };

  return (
    <>
      <div className="card pd-20 pd-sm-40 mg-t-10">
        <h6 className="card-body-title">MÓDULOS</h6>
        {modulesData.map((module, index) => (
          <div key={index}>
            <h6 className="mg-b-20 mg-sm-b-30">{module.modules_name}</h6>
            <div className="row">
              {module.Sub_Modules.map((submodule, subIndex) => (
                <div key={subIndex} className="col-lg-3">
                  <label className="ckbox">
                    <input
                      type="checkbox"
                      // checked={selectedCheckboxes[index]?.[subIndex]}
                      checked={submodule.submodules_access}
                      onChange={
                        () => {
                          const updatedModulesData = modulesData.map((mod, i) =>
                            i === index
                              ? {
                                  ...mod,
                                  Sub_Modules: mod.Sub_Modules.map(
                                    (submod, j) =>
                                      j === subIndex
                                        ? {
                                            ...submod,
                                            submodules_access:
                                              !submod.submodules_access,
                                          }
                                        : submod
                                  ),
                                }
                              : mod
                          );
                          setModulesData([...updatedModulesData]);
                        }
                        // handleCheckboxChange(
                        //   module.modulesId,
                        //   submodule.submodules_id
                        // )
                      }
                    />
                    <span>{submodule.submodules_name}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="form-layout-footer">
          <button
            className="btn btn-info mg-r-5"
            id="btnConsultarModulo"
            onClick={handlerUpdateAccess}
          >
            Actualizar
          </button>
        </div>
      </div>
    </>
  );
};

export { CheckmarkModulesSubmodules };
