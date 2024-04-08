import { createSlice } from "@reduxjs/toolkit";
import { listPqrsRequest, OnePqrRequest } from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";

const cookies = Cookies.get();
const listPqrsAsync = () => async (dispatch) => {
  try {
    const data = await listPqrsRequest(cookies.token);

    
    dispatch(listPqrs(data));

    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const OnePqrsAsync = (idNumRadicado) => async (dispatch) => {
  try {
    const data = await OnePqrRequest(idNumRadicado, cookies.token);
    dispatch(onePqr(data));

    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const pqrsSlice = createSlice({
  name: "pqrs",
  initialState: {
    pqrsList: [], // Inicialmente, la lista está vacía
    onePqr: null,
  },
  reducers: {
    listPqrs: (state, action) => {
      // return action.payload;
      state.pqrsList = action.payload;
    },
    onePqr: (state, action) => {
      // return action.payload;
      state.onePqr = action.payload;
    },
  },
});

export { listPqrsAsync, OnePqrsAsync };
export const { listPqrs, onePqr } = pqrsSlice.actions;
export default pqrsSlice.reducer;
