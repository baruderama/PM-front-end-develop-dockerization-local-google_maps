import { createSlice } from "@reduxjs/toolkit";
import { listRolesRequest } from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";

const cookies = Cookies.get();
const listRolesAsync = () => async (dispatch) => {
  try {
    const { data } = await listRolesRequest(cookies.token);
    dispatch(listRoles(data));
    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const rolesSlice = createSlice({
  name: "roles",
  initialState: [],
  reducers: {
    listRoles: (state, action) => {
      return action.payload;
    },
  },
});

export { listRolesAsync };
export const { listRoles } = rolesSlice.actions;
export default rolesSlice.reducer;
