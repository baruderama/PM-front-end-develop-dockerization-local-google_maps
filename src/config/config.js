/**
 * @constant API_URL_USER contienen la url del api de usuarios
 * @constant SECRET_KEY contiene la llave secreta para desencriptar la informacion del usuario
 * guardada en el localStorage
 */
const API_URL_GATEWAY = "http://localhost:9002/api/v1/gateway";
const API_URL_GATEWAY_RDS = "http://18.231.138.8:9002/api/v1/gateway";
const API_URL_GATEWAY_EC2 = "https://trasteosymudanzas.com/api/v1/gateway";
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
const API_GOOGLE_KEY=process.env.API_GOOGLE_MAPS_KEY;

export { API_URL_GATEWAY, API_URL_GATEWAY_RDS, SECRET_KEY,API_GOOGLE_KEY,API_URL_GATEWAY_EC2 };
