import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/amanda.css";
import "./assets/css/loading.css";
import "./assets/css/generalStyles.css";
import "./assets/css/Ionicons/css/ionicons.css";
import "./assets/css/font-awesome/css/font-awesome.css";
import "./assets/css/perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/css/jquery-toggles/toggles-full.css";
import 'react-quill/dist/quill.snow.css';
// import "@reach/combobox/styles.css";
// import "@react-google-maps/api/styles.css";

//import "./assets/scss/amanda.scss"
import { App } from "./App";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./app/store";
import { Provider } from "react-redux";

/**
 *
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

//reportWebVitals();
