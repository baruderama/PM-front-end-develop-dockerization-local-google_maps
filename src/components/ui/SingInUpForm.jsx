import masmetroslogoazul from "../../assets/img/masmetros.png";

/**
 * @module SingInUpForm es un componente el cual encierra un formulario en una card
 * con el logo y los colores de mas metros
 */

const SingInUpForm = ({ children }) => (
  <div className="am-signin-wrapper">
    <div className="am-signin-box">
      <div className="row no-gutters">
        <div className="col-lg-5">
          <div>
            <img src={masmetroslogoazul} alt="" style={{ width: "80%" }} />
          </div>
        </div>
        <div className="col-lg-7">{children}</div>
      </div>
    </div>
  </div>
);

export { SingInUpForm };
