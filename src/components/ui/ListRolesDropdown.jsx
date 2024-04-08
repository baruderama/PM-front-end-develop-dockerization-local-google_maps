import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listRolesAsync } from "../../features/roles/rolesSlice";
import { Loading } from "./Loading";

function ListRolesDropdown({ onRoleSelect }) {
  const roleList = useSelector((state) => state.roles);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listRolesAsync());
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [dispatch]);

  const RolesDataData = roleList ? roleList.data : [];

  const handleRoleSelection = (event) => {
    const roleId = event.target.value;

    const selectedRole = RolesDataData.find(
      (role) => role.roleId === parseInt(roleId)
    );


    onRoleSelect(selectedRole);
  };

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">
    <Loading />
  </div>;
  }

  //TODO aqui se debe hacer la consutla de los sub-modulos que pertenecen al usuario
  return (
    <div className="form-group mg-b-10-force">
      <select
        id="userDropdown"
        className="form-control select2"
        data-placeholder="Seleccione un rol"
        onChange={handleRoleSelection}
      >
        <option label="Seleccione un rol"></option>
        {RolesDataData.map((role) => (
          <option key={role.roleId} value={role.roleId}>
            {role.rol_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ListRolesDropdown };
