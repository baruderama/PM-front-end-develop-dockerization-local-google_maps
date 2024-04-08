import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listUsersAsync } from "../../features/users/userSlice";

function ListUsersDropdown({ onUserSelect }) {
  const usersList = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listUsersAsync());
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [dispatch]);

  const usersDataData = usersList ? usersList.data : [];

  const handleUserSelection = (event) => {
    const userId = event.target.value;

    const selectedUser = usersDataData.find(
      (user) => user.usrId === parseInt(userId)
    );
    onUserSelect(selectedUser);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  //TODO aqui se debe hacer la consutla de los sub-modulos que pertenecen al usuario
  return (
    <div className="form-group mg-b-10-force">
      <select
        id="userDropdown"
        className="form-control select2"
        data-placeholder="Seleccione un usuario"
        onChange={handleUserSelection}
      >
        <option label="Seleccione un usuario"></option>
        {usersDataData.map((user) => (
          <option key={user.usrId} value={user.usrId}>
            {user.usr_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ListUsersDropdown };
