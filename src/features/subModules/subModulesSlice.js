import { createSlice } from "@reduxjs/toolkit";
import { createSubModulesRequest } from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";

const createSubModuleAsync = (submodule) => async (dispatch) => {
  try {
    const cookies = Cookies.get();
    const { data } = await createSubModulesRequest(submodule, cookies.token);
    dispatch(addSubModules(data.data));
    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const subModulesSlice = createSlice({
  name: "submodules",
  initialState: [],
  reducers: {
    listSubModules: (state, action) => {
      return action.payload;
    },
    addSubModules: (state, action) => {
      return action.payload;
    },
  },
});

export { createSubModuleAsync };
export const { listSubModules, addSubModules } = subModulesSlice.actions;
export default subModulesSlice.reducer;
