import { loginRequest, verifyTokenRequest } from "../api/endpoints/endpoints";
import { createContext, useState, useContext, useEffect } from "react";
import { SECRET_KEY } from "../config/config";
import { AES } from "crypto-js";
import Cookies from "js-cookie";

/**
 * *AuthContext.jsx
 * @author Juan Sebastian Valderrama-mas-metros
 * @version 0.1.0
 * EXPLI: En este .jsx se crea un contexto con el cual se implementan funciones para ser usadas
 * en toda la aplicacion y variables que pueden ser consultadas y modificadas en toda la
 * aplicacion tambien. Estas son consideradas coomo varaibles de sesion. Tambien, se implementan
 * varios useEffect los cuales estan escuchando a cualquier modificacion de la apliacion o
 * a una variable en especifico
 *
 */

/*----------------------------------------------------------------------------*/
/**
 * @function useAuth
 * @returns context
 * EXPLI: Esta funcion utiliza la variable AuthContext para inicializar el contexto
 *
 */
const AuthContext = createContext();
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
/*----------------------------------------------------------------------------*/

/**
 * @function AuthProvider
 * @constant user variable de estado que hace de variable de sesion porque contiene y contendra
 * la informacion del usuario logueado
 * @constant isAuthenticated variable de estado que verifica si el usuario esta autenticado
 * @constant errors variable de estado que contendra todos lo errores que se obtengan de las
 * diferentes funciones de la aplicacion
 * @constant loading variable de estado que detiene la apliacion hasta que se pueda autenticar o
 * no el usuario
 * @returns <AuthContext.Provider /> componente con todas las funciones y variables de este context, que se pueden usar
 * y revisar globalmente
 *
 * EXPLI: En esta funcion se recibe un componente children y retorna otro <AuthContext.Provider />.
 * Contiene variables de sesion, funciones de logueo y verificacion, y useEffect para escuchar
 * cambios especificos de la aplicacion
 *
 *
 */
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * @function signin
   * @param {*} user variable que contiene la informacion ingresada por el usuario
   * @returns setErrors
   * @constant encryptedData variable que contiene la informacion encriptada del usuario con
   * el algoritmo AES
   *
   * EXPLI: Esta funcion tiene la finalidad de loguear al usuario y de persisitir el token en
   * las cookies; la informacion del usuario en el localStorage o de retornar errores segun
   * corresponda
   */
  const signin = async (user) => {
    try {
      const { data, token } = await loginRequest(user);
      //al documentar esta linea de abajo se vuelve a las cookies de dockerization
      //cuando se descomenta se vuelve a la version fargate
      Cookies.set("token", data.token, {
        path: "http://localhost:3000",
        sameSite: "Lax",
      });
      localStorage.setItem("token", Cookies.get().token);

      setIsAuthenticated(true);
      setUser(data);

      const encryptedData = AES.encrypt(
        JSON.stringify(data),
        SECRET_KEY
      ).toString();

      // localStorage.setItem("user", encryptedData);
      await new Promise((resolve) => {
        localStorage.setItem("user", encryptedData);
        resolve();
      });
      return;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      return setErrors([error.response.data.message]);
    }
  };

  /**
   * @function logout
   *
   * EXPLI: Esta funcion tiene la finalidad de hacer logout del usuario en sesion, y borra el token
   * de las cookies, el localStorage y los datos del usuario
   */
  const logout = () => {
    Cookies.remove("token");
    localStorage.clear();
    setUser(null);
    setIsAuthenticated(false);
    return;
  };

  /**
   * *useEffect de errores
   * @constant timer variable que contiene un timer de 5 segundos de duracion
   *
   * EXPLI: En este useEffect verifica si hay errores en la aplicacion y los remueve despues de 5 seg
   */
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  /**
   * *useEffect chequear logueo
   * @function checkLogin
   * @constant cookies variable que almacena las cookies actuales del navegador
   * @constant storedData variable que almacena los datos del localStorage del navegador del usuario
   * en sesion. Esta esta encriptada
   * @constant decryptedData variable que almacena los datos del usuario desencriptados
   *
   * EXPLI: Esta funcion tiene la finalidad de verificar si la cookie todavia existe en el navegador.
   * Si esta la cookie,esta autenticado ,lo que significa que se agrega la info a la
   * variable de sesion user, la informacion desencriptada del localStorage del navegador
   *
   * EXPLI: Este useEffect esta escuchando cada vez que haya un cambio en la aplicacion para
   * verificar que el usuario esta autenticado
   *
   */
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      const token = cookies.token;

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }

      setIsAuthenticated(true);
      setLoading(false);
      // const storedData = localStorage.getItem("user");
      // const decryptedData = AES.decrypt(storedData, SECRET_KEY).toString(
      //   enc.Utf8
      // );
      // const parsedData = JSON.parse(decryptedData);
      // setUser(parsedData);

      try {
        const res = await verifyTokenRequest(token, cookies);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signin,
        logout,
        user,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
