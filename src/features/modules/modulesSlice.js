import { createSlice } from "@reduxjs/toolkit";
import { listModulesRequest } from "../../api/endpoints/endpoints";
import {
  accessUserRequest,
  accessUpdateRequest,
  accessUserUpdateRequest,
  createModulesRequest,
} from "../../api/endpoints/endpoints";

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const listModulesAsync = () => async (dispatch) => {
  try {
    const cookies = Cookies.get();
    const { data } = await listModulesRequest(cookies.token);
    dispatch(listModules(data));
    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const createModulesAsync = (module) => async (dispatch) => {
  try {
    const cookies = Cookies.get();
    const { data } = await createModulesRequest(module, cookies.token);
    dispatch(addModules(data.data));
    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const updateAccessAsync =
  (accessDataId, accessUpdateOnlyData) => async (dispatch) => {
    try {
      const accessUpdateJson = {
        access_data: accessUpdateOnlyData,
      };
      const { data } = await accessUserUpdateRequest(
        accessDataId,
        accessUpdateJson
      );
      dispatch(listModules(data));
      //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
    } catch (error) {
      // Manejar errores aquí si es necesario
    }
  };
const listModulesAccessAsync = (selectedUser) => async (dispatch) => {
  try {
    let searchUserId = 0;
    const cookies = Cookies.get();
    if (!selectedUser) {
      // Decodificar el JWT para obtener el payload

      const payload = jwtDecode(cookies.token);
      searchUserId = payload.id;
    } else {
      searchUserId = selectedUser.usrId;
    }
    // searchUserId=selectedUser.usrId;

    const access = await accessUserRequest(searchUserId);
    const accessData = access.data.data[0].access_data;
    const accessDataId = access.data.data[0].accessId; // Aquí tendrás el objeto payload del token
    const { data } = await listModulesRequest(cookies.token);
    const updatedAccessData = updateAccessData(accessData, data.data);
    //TODO actualizar el access data de la tabla access de cada usuario
    const accessUpdateOnlyData = {
      access_data: updatedAccessData,
    };
    const accessDataUpdated = await accessUpdateRequest(
      accessDataId,
      accessUpdateOnlyData
    );

    dispatch(listModules(accessDataUpdated.data.data));

    //   dispatch(listRoles(res.data)); // Despachar la acción para actualizar el estado con los datos recibidos
  } catch (error) {
    // Manejar errores aquí si es necesario
  }
};

const updateAccessData = (accessData, modulesList) => {
  modulesList.forEach((updatedModule) => {
    const existingModule = accessData.find(
      (module) => module.modulesId === updatedModule.modulesId
    );

    if (existingModule) {
      existingModule.modules_name = updatedModule.modules_name;
      existingModule.modules_active = updatedModule.modules_active;

      updatedModule.Sub_Modules.forEach((updatedSubModule) => {
        const existingSubModule = existingModule.Sub_Modules.find(
          (subModule) =>
            subModule.submodules_id === updatedSubModule.submodules_id
        );
        if (existingSubModule) {
          existingSubModule.submodules_name = updatedSubModule.submodules_name;
          existingSubModule.submodules_active =
            updatedSubModule.submodules_active;
          existingSubModule.submodules_slug = updatedSubModule.submodules_slug;
        } else {
          existingModule.Sub_Modules.push(updatedSubModule);
        }
      });
    } else {
      accessData.push(updatedModule);
    }
  });
  return accessData;
};

const modulesSlice = createSlice({
  name: "modules",
  initialState: [],
  reducers: {
    listModules: (state, action) => {
      return action.payload;
    },
    addModules: (state, action) => {
      return action.payload;
    },
  },
});

export {
  listModulesAsync,
  listModulesAccessAsync,
  updateAccessAsync,
  createModulesAsync,
};
export const { listModules, addModules } = modulesSlice.actions;
export default modulesSlice.reducer;
