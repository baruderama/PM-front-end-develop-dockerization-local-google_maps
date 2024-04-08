import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { createSubModuleAsync } from "../../features/subModules/subModulesSlice";
import { PopUp } from "../ui/PopUp";
import { ListDropdown } from "../ui/ListDropdown";
import { listModulesAsync } from "../../features/modules/modulesSlice";

/**
 *
 * @returns
 */

function CreateSubmenus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mensajeModuloAviso = "Aviso";
  const selectModule = "Seleccione un módulo";
  const dispatch = useDispatch();
  const { errors: createErrors } = useAuth();
  const submoduleCreated = useSelector((state) => state.submodules);
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [mensajeModule, setMensajeModule] = useState(false);

  const modulesList = useSelector((state) => state.modules);
  const [formattedModules, setFormattedModules] = useState([]);

  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleSelect = async (selectedModule) => {
    // setSelectedModule(selectedModule);
    const result = await modulesList;
    if (result && result.data && selectedModule) {
      const selectedItem = result.data.find(
        (item) => item.modulesId === parseInt(selectedModule.id)
      );
      setSelectedModule(selectedItem);
    } else {
      setSelectedModule("");
    }
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listModulesAsync());
        // setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de modulos:", error);
      }
    };

    loadData();
  }, [dispatch]);

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que el estado userCreated cambie.
    // Cuando userCreated cambie, imprimiremos su valor en la consola
    const formatModules = async () => {
      try {
        const result = await modulesList;
       
        if (result && result.data) {
          const newFormattedModules = result.data.map((module) => ({
            id: module.modulesId,
            name: module.modules_name,
          }));
          setFormattedModules(newFormattedModules);
        }
      } catch (error) {
        console.error("Error al obtener la lista de roles:", error);
      }
    };

    formatModules();
  }, [modulesList]);

  const onSubmit = handleSubmit(async (values) => {
    values.moduleId = selectedModule.modulesId;
    await dispatch(createSubModuleAsync(values));
    setPopUpOpen(true);
    setMensajeModule(`El sub-modulo ha sido creado `);
  });

  const handleClosePopUp = () => {
    setPopUpOpen(false); // Cierra el PopUp
  };

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que el estado userCreated cambie.
    // Cuando userCreated cambie, imprimiremos su valor en la consola.
  }, [submoduleCreated]);
  return (
    <>
      <div className="card pd-20 pd-sm-40">
        <h6 className="card-body-title">
          Creación de Sub menús que sera asignado a un módulo padre
        </h6>
        <p className="mg-b-20 mg-sm-b-30">
          Crear un sub ménu implica desarrollo, no trabajar el módulo si no esta
          desarrollado
        </p>
        {createErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-black" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <div className="form-layout">
            <div className="row mg-b-25">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label">
                    Seleccionar el módulo al cúal sera asignado el menú:{" "}
                  </label>
                  {/* <ListModulesDropdown onModuleSelect={handleModuleSelect} /> */}
                  <ListDropdown
                    onSelect={handleModuleSelect}
                    placeholder={selectModule}
                    data={formattedModules}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label">Nombre del menú </label>
                  <input
                    className="form-control"
                    type="text"
                    id="createSubModuleName"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-red-500">Name is required</p>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="hidden"
                    id="submenuSlug"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="form-layout-footer">
              <button
                className="btn btn-info mg-r-5"
                id="btnCrearSubModulo"
                disabled={!selectedModule}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
      {isPopUpOpen && (
        <PopUp
          title={mensajeModuloAviso}
          message={mensajeModule}
          onClose={handleClosePopUp}
        />
      )}
    </>
  );
}

export { CreateSubmenus };
