import { createSlice } from "@reduxjs/toolkit";
import { listTeamsRequest } from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";

const cookies = Cookies.get();
const listTeamsAsync = () => async (dispatch) => {
  try {
    const { data } = await listTeamsRequest(cookies.token);
    dispatch(listTeams(data));
    //   dispatch(listTeams(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const teamsSlice = createSlice({
  name: "teams",
  initialState: [],
  reducers: {
    listTeams: (state, action) => {
      return action.payload;
    },
  },
});

export { listTeamsAsync };
export const { listTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
