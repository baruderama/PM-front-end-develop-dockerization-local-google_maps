import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listAccessAsync } from "../../features/access/accessSlice";
import { ButtonLink } from "./ButtonLink";
import { Loading } from "./Loading";

/**
 *
 * @returns
 */
function LeftSection() {
  const [openModuleIndex, setOpenModuleIndex] = useState(null);
  const handleClick = (event) => {
    event.preventDefault();
    const navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    event.target.classList.add("active");
  };

  const accessList = useSelector((state) => state.access);

  const dispatch = useDispatch();

  // Función para alternar la visualización de la sublistas
  const toggleFormSubList = (event, moduleIndex) => {
    event.preventDefault();

    if (openModuleIndex === moduleIndex) {
      setOpenModuleIndex(null);
    } else {
      setOpenModuleIndex(moduleIndex);
    }
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listAccessAsync());
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

  if (!modulesData) {
    //   // Muestra un indicador de carga o un mensaje de "Cargando"
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  }

  return (
    <div className="am-sideleft">
      <ul className="nav am-sideleft-tab">
        <li className="nav-item">
          <a href="" className="nav-link active" onClick={handleClick}>
            <i className="icon ion-ios-home-outline tx-24"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link" onClick={handleClick}></a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link" onClick={handleClick}></a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link" onClick={handleClick}></a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="mainMenu" className="tab-pane active">
          <ul className="nav am-sideleft-menu">
            {modulesData.map((module, moduleIndex) => {
              const hasAccessibleSubmodule = module.Sub_Modules.some(
                (submodule) => submodule.submodules_access
              );

              const updatedModulesActive = hasAccessibleSubmodule ? 2 : 1;
              const iconName = `icon ${module.modules_icon}`;

              return (
                <li className="nav-item" key={moduleIndex}>
                  {updatedModulesActive === 2 && (
                    <a
                      href="#"
                      className={`nav-link with-sub ${
                        openModuleIndex === moduleIndex ? "show-sub" : ""
                      }`}
                      onClick={(event) => toggleFormSubList(event, moduleIndex)}
                    >
                      <i className={iconName}></i>
                      <span>{module.modules_name}</span>
                    </a>
                  )}
                  {updatedModulesActive === 2 && (
                    <ul
                      className={`nav-sub ${
                        openModuleIndex === moduleIndex ? "slide" : ""
                      }`}
                    >
                      {module.Sub_Modules.map(
                        (submodule, subIndex) =>
                          submodule.submodules_access && (
                            <li className="nav-item" key={subIndex}>
                              <ButtonLink
                                to={`/in/${submodule.submodules_slug}`}
                                children={
                                  <span className="nav-link">
                                    {submodule.submodules_name}
                                  </span>
                                }
                              />
                            </li>
                          )
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { LeftSection };
