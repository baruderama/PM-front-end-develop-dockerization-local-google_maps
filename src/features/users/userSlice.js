import { createSlice } from "@reduxjs/toolkit";
import {
  listUsersRequest,
  createUserRequest,
} from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";

const cookies = Cookies.get();
const listUsersAsync = () => async (dispatch) => {
  try {
    const res = await listUsersRequest(cookies.token);
    dispatch(listUser(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const createUserAsync = (user) => async (dispatch) => {
  try {
    const { data } = await createUserRequest(user, cookies.token);
    dispatch(addUser(data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    listUser: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
      return action.payload;
    },
  },
});

export { listUsersAsync, createUserAsync };
export const { listUser, addUser } = userSlice.actions;
export default userSlice.reducer;
