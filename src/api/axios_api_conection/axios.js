import { API_URL_GATEWAY,API_URL_GATEWAY_RDS,API_URL_GATEWAY_EC2 } from "../../config/config";
import axios from "axios";

/**
 * @constant instance variable que almacena una instancia axios para poder conectarse al api
 * de usuarios
 */
const instance = axios.create({
  baseURL: API_URL_GATEWAY,
  withCredentials: true,
  credentials: 'include'
});

export { instance };
