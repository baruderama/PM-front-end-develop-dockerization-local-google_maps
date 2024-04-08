import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listTeamsAsync } from "../../features/teams/teamsSlice";

function ListTeamsDropdown({ onTeamSelect }) {
  const teamList = useSelector((state) => state.teams);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(listTeamsAsync());
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [dispatch]);

  const TeamsDataData = teamList ? teamList.data : [];

  const handleTeamSelection = (event) => {
    const teamId = event.target.value;

    const selectedTeam = TeamsDataData.find(
      (team) => team.teamId === parseInt(teamId)
    );


    onTeamSelect(selectedTeam);
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
        data-placeholder="Seleccione un equipo"
        onChange={handleTeamSelection}
      >
        <option label="Seleccione un equipo"></option>
        {TeamsDataData.map((team) => (
          <option key={team.teamId} value={team.teamId}>
            {team.team_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ListTeamsDropdown };
