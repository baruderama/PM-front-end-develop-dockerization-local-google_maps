import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../features/users/userSlice";
import roleReducer from "../features/roles/rolesSlice";
import teamReducer from "../features/teams/teamsSlice";
import moduleReducer from "../features/modules/modulesSlice";
import submoduleReducer from "../features/subModules/subModulesSlice";
import accessReducer from "../features/access/accessSlice";
import accessOneReducer from "../features/access/accesOneTime";
import pqrsReducer from "../features/pqrs/pqrsSlice";
import utmsReducer from "../features/utm/utmSlice"
import geoReducer from "../features/geo/geoSlice"

const store = configureStore({
  reducer: {
    users: userReducer,
    roles: roleReducer,
    teams: teamReducer,
    modules: moduleReducer,
    submodules: submoduleReducer,
    access: accessReducer,
    accessone: accessOneReducer,
    pqrs: pqrsReducer,
    utms: utmsReducer,
    geos: geoReducer
  },
  middleware: [thunk],
});

export { store };
