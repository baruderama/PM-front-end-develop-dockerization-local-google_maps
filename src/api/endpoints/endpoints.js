import { instance } from "../axios_api_conection/axios";

/**
 *
 * @function loginRequest
 *
 * EXPLI: esta funcion accede a un metodo post por la ruta /login el cual requiere una respuesta por
 * parte del servidor sobre si el usuario puede ingresar
 */
const loginRequest = async (user) => instance.post(`/user-login`, user);

const verifyTokenRequest = async (token) =>
  instance.get(`/user-verify`, {
    headers: {
      Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
    },
  });

const listUsersRequest = async () => instance.get(`/user-list`);

const createUserRequest = async (user) => instance.post(`/user-create`, user);

const listRolesRequest = async () => instance.get(`/role-list`);

const listTeamsRequest = async () => instance.get(`/team-list`);

const listModulesRequest = async () => instance.get(`/module-submodule-list`);

const accessUserRequest = async (userId) =>
  instance.get(`/access-user/${userId}`);

const accessUserUpdateRequest = async (userId, accessData) =>
  instance.put(`/access-user/${userId}`, accessData);

const accessUpdateRequest = async (accessId, accessData) =>
  instance.put(`/access-update/${accessId}`, accessData);

const createModulesRequest = async (module) =>
  instance.post(`/module-create`, module);

const createSubModulesRequest = async (submodule) =>
  instance.post(`/sub-module-create`, submodule);

const listPqrsRequest = async () => instance.get(`/pqr-list`);

const OnePqrRequest = async (pqrNumRadicado) =>
  instance.get(`/one-pqr/${pqrNumRadicado}`);

const updatePqr = async (pqrsUpdated) =>
  instance.put(`/update-pqr`, pqrsUpdated, {
    headers: {
      "Content-Type": "multipart/form-data", // Ajusta el tipo de contenido según sea necesario
      // Agrega aquí tus otros encabezados si es necesario
    },
  });

const createUtmRequest = async (utm) => instance.post(`/utm-create`,utm);

const listUtmRequest = async () => instance.get(`/utm-list`);

const updateUtmRequest= async (utm)=>instance.put(`/utm-update`,utm) 

const listGeoRequest = async ()=>instance.get(`/geo-list`)

export {
  loginRequest,
  createModulesRequest,
  createSubModulesRequest,
  accessUserUpdateRequest,
  accessUserRequest,
  accessUpdateRequest,
  listModulesRequest,
  listTeamsRequest,
  verifyTokenRequest,
  listUsersRequest,
  createUserRequest,
  listRolesRequest,
  listPqrsRequest,
  OnePqrRequest,
  updatePqr,
  createUtmRequest,
  listUtmRequest,
  updateUtmRequest,
  listGeoRequest
};
