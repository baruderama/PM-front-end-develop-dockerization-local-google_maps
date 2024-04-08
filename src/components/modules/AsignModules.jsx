import React, { useState, useEffect } from "react";
import { CheckmarkModulesSubmodules } from "../ui/CheckmarkModulesSubmodules";
import { useSelector, useDispatch } from "react-redux";
import { listUsersAsync } from "../../features/users/userSlice";
import { ListDropdown } from "../ui/ListDropdown";
import { PopUp } from "../ui/PopUp";

/**
 *
 * @returns
 */

function AsignModules() {
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [formattedUsers, setFormattedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModules, setShowModules] = useState(false);
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [mensajeModule, setMensajeModule] = useState(false);
  const mensajeModuloAviso = "Aviso";
  const selectUser = "Seleccione un usuario";

  const handleRecharge = () => {
    setPopUpOpen(true);
    setMensajeModule(`Permisos actualizados`);
    setShowModules(false);
  };

  const handleUserSelect = async (selectedUser) => {
    const result = await usersList;
    if (result && result.data && selectedUser) {
      const selectedItem = result.data.find(
        (item) => item.usrId === parseInt(selectedUser.id)
      );
      setSelectedUser(selectedItem);
      setShowModules(false);
    } else {
      setSelectedUser("");
      setShowModules(false);
    }
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listUsersAsync());
        // setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
        // setLoading(false);
      }
    };

    loadData();
  }, [dispatch]);

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que el estado userCreated cambie.
    // Cuando userCreated cambie, imprimiremos su valor en la consola
    const formatUsers = async () => {
      try {
        const result = await usersList;
        if (result && result.data) {
          const newFormattedUsers = result.data.map((user) => ({
            id: user.usrId,
            name: user.usr_name,
          }));
          setFormattedUsers(newFormattedUsers);
        }
      } catch (error) {
        console.error("Error al obtener la lista de roles:", error);
      }
    };

    formatUsers();
  }, [usersList]);

  const handlerModulesList = () => {
    if (selectedUser) {
      /**
       * TODO aquí se debe poner el método que trae los módulos y submódulos del usuario seleccionado
       */
      // const modules = await listModulesRequest(selectedUser.id);
      // Hacer la llamada a la API para obtener los módulos y submódulos del usuario

      // Después de obtener los datos, mostrar el componente

      setShowModules(true);
    }
  };

  const handleClosePopUp = () => {
    setPopUpOpen(false);
    // window.location.reload();// Cierra el PopUp
  };

  return (
    <>
      <div className="card pd-20 pd-sm-40">
        <h6 className="card-body-title">
          Asignación de módulos a los usuarios
        </h6>
        <div className="form-layout">
          <div className="row mg-b-25">
            <div className="col-lg-4">
              <div className="form-group">
                <label className="form-control-label">Usuario: </label>
                {/* <ListUsersDropdown onUserSelect={handleUserSelect} /> */}
                <ListDropdown
                  onSelect={handleUserSelect}
                  placeholder={selectUser}
                  data={formattedUsers}
                />
                {!selectedUser && (
                  <p className="text-red-500">User is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="form-layout-footer">
            <button
              className="btn btn-info mg-r-5"
              id="btnConsultarModulo"
              onClick={handlerModulesList}
              disabled={!selectedUser}
            >
              Consultar
            </button>
          </div>
        </div>
      </div>
      {showModules && (
        <CheckmarkModulesSubmodules
          selectedUser={selectedUser}
          onUpdate={handleRecharge}
        />
      )}
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

export { AsignModules };
