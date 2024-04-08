import { createSlice } from "@reduxjs/toolkit";
import {
    createUtmRequest,
    listUtmRequest,
    updateUtmRequest
} from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";

const cookies = Cookies.get();
const utmCreatesAsync = (utm) => async (dispatch) => {
  try {
    console.log(utm)
    const res = await createUtmRequest(utm,cookies.token);
    console.log(res)
    dispatch(addUtm(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const listUtmAsync = () => async (dispatch) => {
  try {
    const data = await listUtmRequest(cookies.token);

    console.log(data)
    dispatch(listUtm(data));

    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const updateUtmAsync = (short,utm) => async (dispatch) => {
  try {
    console.log(short)
    const res = await updateUtmRequest(short,utm,cookies.token);
    console.log(res)
    dispatch(updUtm(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};


const utmSlice = createSlice({
  name: "utms",
  initialState: {
    utmList: [], // Inicialmente, la lista está vacía
    createdUtm: null,
    updatedUtm:null
  },
  reducers: {
    addUtm: (state, action) => {
      
      state.createdUtm = action.payload;
      
    },
    updUtm: (state, action) => {
      
      state.updatedUtm = action.payload;
      
    },
    listUtm: (state, action) => {
      
      state.utmList = action.payload;
      
    },
  },
});

export { utmCreatesAsync,listUtmAsync,updateUtmAsync };
export const { addUtm,listUtm,updUtm } = utmSlice.actions;
export default utmSlice.reducer;
