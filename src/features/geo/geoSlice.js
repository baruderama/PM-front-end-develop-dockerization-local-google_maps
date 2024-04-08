import { createSlice } from "@reduxjs/toolkit";
import {
    createUtmRequest,
    listUtmRequest,
    updateUtmRequest,
    listGeoRequest
} from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";

const cookies = Cookies.get();
// const geoCreatesAsync = (geo) => async (dispatch) => {
//   try {
//     console.log(utm)
//     const res = await createUtmRequest(utm,cookies.token);
//     console.log(res)
//     dispatch(addUtm(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
//   } catch (error) {
//     // Manejar errores aquí si es necesario
//   }
// };

const listGeoAsync = () => async (dispatch) => {
  try {
    const data = await listGeoRequest(cookies.token);

    console.log(data.data)
    dispatch(listGeo(data));

    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

// const updateUtmAsync = (short,utm) => async (dispatch) => {
//   try {
//     console.log(short)
//     const res = await updateUtmRequest(short,utm,cookies.token);
//     console.log(res)
//     dispatch(updUtm(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
//   } catch (error) {
//     // Manejar errores aquí si es necesario
//   }
// };


const geoSlice = createSlice({
  name: "geos",
  initialState: {
    geoList: [], // Inicialmente, la lista está vacía
    createdGeo: null,
    updatedGeo:null
  },
  reducers: {
    
    listGeo: (state, action) => {
      
      state.geoList = action.payload;
      
    },
  },
});

export { listGeoAsync};
export const { listGeo } = geoSlice.actions;
export default geoSlice.reducer;
