import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { createUserAsync } from "../../features/users/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { PopUp } from "../ui/PopUp";
import { listRolesAsync } from "../../features/roles/rolesSlice";
import { listTeamsAsync } from "../../features/teams/teamsSlice";
import { ListDropdown } from "../ui/ListDropdown";

/**
 *
 * @returns
 */
function CreateUsers() {
  const roleList = useSelector((state) => state.roles);
  const teamList = useSelector((state) => state.teams);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mensajeModuloAviso = "Aviso";
  const selectRole = "Seleccione un rol";
  const selectTeam = "Seleccione un equipo";
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [mensajeModule, setMensajeModule] = useState(false);

  const { errors: createErrors } = useAuth();
  const userCreated = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const [formattedRoles, setFormattedRoles] = useState([]);
  const [formattedTeams, setFormattedTeams] = useState([]);

  const handleRoleSelect = async (selectedRole) => {
    const result = await roleList;
    if (result && result.data && selectedRole) {
      const selectedItem = result.data.find(
        (item) => item.roleId === parseInt(selectedRole.id)
      );
      setSelectedRole(selectedItem);
    } else {
      setSelectedRole("");
    }
  };

  const handleTeamSelect = async (selectedTeam) => {
    const result = await teamList;
    if (result && result.data && selectedTeam) {
      const selectedItem = result.data.find(
        (item) => item.teamId === parseInt(selectedTeam.id)
      );
      setSelectedTeam(selectedItem);
    } else {
      setSelectedTeam("");
    }
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listRolesAsync());
        await dispatch(listTeamsAsync());
        // setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
      }
    };

    loadData();
  }, [dispatch]);

  const onSubmit = handleSubmit(async (values) => {
    values.rol = selectedRole.roleId;
    values.active = 2;
    values.team = selectedTeam.teamId;
    await dispatch(createUserAsync(values));
    setPopUpOpen(true);
    setMensajeModule(`El usuario ha sido creado `);
  });

  const handleClosePopUp = () => {
    setPopUpOpen(false); // Cierra el PopUp
  };

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que el estado userCreated cambie.
    // Cuando userCreated cambie, imprimiremos su valor en la consola
    const formatRoles = async () => {
      try {
        const result = await roleList;
        if (result && result.data) {
          const newFormattedRoles = result.data.map((role) => ({
            id: role.roleId,
            name: role.rol_name,
          }));
          setFormattedRoles(newFormattedRoles);
        }
      } catch (error) {
        console.error("Error al obtener la lista de roles:", error);
      }
    };

    formatRoles();
  }, [roleList]);

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que el estado userCreated cambie.
    // Cuando userCreated cambie, imprimiremos su valor en la consola
    const formatTeams = async () => {
      try {
        const result = await teamList;
        if (result && result.data) {
          const newFormattedTeams = result.data.map((team) => ({
            id: team.teamId,
            name: team.team_name,
          }));
          setFormattedTeams(newFormattedTeams);
        }
      } catch (error) {
        console.error("Error al obtener la lista de roles:", error);
      }
    };

    formatTeams();
  }, [teamList]);

  return (
    <>
      <div className="card pd-20 pd-sm-40">
        <h6 className="card-body-title">Creación de usuarios en el sistema</h6>
        {createErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-black" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <div className="form-layout">
            <div className="row mg-b-25">
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">
                    Nombre del usuario:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="createModuleName"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-red-500">Name is required</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">Usuario:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="createModuleUsr"
                    {...register("user", { required: true })}
                  />
                  {errors.user && (
                    <p className="text-red-500">Username is required</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">E-mail:</label>
                  <input
                    className="form-control"
                    type="email"
                    id="createModuleMail"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-red-500">Email is required</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">Rol:</label>
                  {/* <ListRolesDropdown onRoleSelect={handleRoleSelect} /> */}
                  <ListDropdown
                    onSelect={handleRoleSelect}
                    placeholder={selectRole}
                    data={formattedRoles}
                  />

                  {!selectedRole && (
                    <p className="text-red-500">Rol is required</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">Equipo:</label>
                  {/* <ListTeamsDropdown onTeamSelect={handleTeamSelect} /> */}
                  <ListDropdown
                    onSelect={handleTeamSelect}
                    placeholder={selectTeam}
                    data={formattedTeams}
                  />
                  {!selectedTeam && (
                    <p className="text-red-500">Team is required</p>
                  )}
                </div>
              </div>
            </div>
            <div className="form-layout-footer">
              <button
                className="btn btn-info mg-r-5"
                id="btnGuardarModulo"
                disabled={!selectedRole || !selectedTeam}
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

export { CreateUsers };
