import {
  AsignModules,
  CreateModules,
  CreateSubmenus,
  CreateUsers,
} from "../components/modules/ModulesExport";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage, InPage } from "../views/ViewsExport";
import { ProtectedRoute } from "./ProtectedRoute";
import { Permission } from "./Permission";
import { WelcomeModule } from "../components/modules/WelcomeModule";
import { ListPqrs } from "../components/modules/ListPqrs";
import { DetallesPqr } from "../components/modules/DetallesPqr";
import { CreateUtm } from "../components/modules/CreateUtm";
import { ListUtm } from "../components/modules/ListUtm";
import { GeoLocalization } from "../components/modules/GeoLocalization";
import { GeoLocalizationWrapper } from "../components/modules/GeoLocalizationWrapper";
import { MapaDeUsuariosRedirect } from "../components/modules/MapaDeUsuariosRedirect";
/**
 *
 * @module MyRoutes
 *
 * EXPLI: Este componente es el que se encarga de manejar todas las rutas. Le asigna a cada vista
 * de la aplicacion una url para que pueda ser consultada. Tambien con un @module ProtectedRoute el
 * cual privatiza todas la rutas que esten dentro de sus etiquetas y pide que el usuario este
 * autenticado para que puedan acceder a estas.
 */
const MyRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          exact
          path="/in"
          element={<InPage component={WelcomeModule} />}
        />

        <Route
          exact
          path="/in/crear-utm"
          element={<InPage component={CreateUtm} />}
        />

        <Route
          exact
          path="/in/listar-utm"
          element={<InPage component={ListUtm} />}
        />

        <Route
          exact
          path="/in/mapa-de-usuarios"
          element={<InPage component={MapaDeUsuariosRedirect} />}
        />
        <Route
          exact
          path="/in/geo-localization"
          element={<InPage component={GeoLocalization} />}
        />

        <Route
          exact
          path="/in/asignar-modulos"
          element={
            <Permission
              path="asignar-modulos"
              element={<InPage component={AsignModules} />}
            />
          }
        />

        <Route
          exact
          path="/in/crear-modulos"
          element={
            <Permission
              path="crear-modulos"
              element={<InPage component={CreateModules} />}
            />
          }
        />
        <Route
          exact
          path="/in/crear-submodulos"
          element={
            <Permission
              path="crear-submodulos"
              element={<InPage component={CreateSubmenus} />}
            />
          }
        />
        <Route
          exact
          path="/in/crear-usuarios"
          element={
            <Permission
              path="crear-usuarios"
              element={<InPage component={CreateUsers} />}
            />
          }
        />

        <Route
          exact
          path="/in/listar-pqrs"
          element={
            <Permission
              path="listar-pqrs"
              element={<InPage component={ListPqrs} />}
            />
          }
        />

        <Route
          exact
          path="/in/detalle-pqr/:id"
          element={<InPage component={DetallesPqr} />}
        />
      </Route>
    </Routes>
  </Router>
);

export { MyRoutes };
