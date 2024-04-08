import { SingInUpForm } from "../components/ComponentsExport";
import { useSelector, useDispatch } from "react-redux";
import { listAccessOneAsync } from "../features/access/accesOneTime";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

/**
 * @module LoginPage esta vista se trata de un login basico con el template de
 * Amanda adaptado a el diseno de mas metros
 */

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: loginErrors } = useAuth();
  const navigate = useNavigate();
  const accessList = useSelector((state) => state.accessone);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) navigate("/in");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    await signin(values);

    dispatch(listAccessOneAsync());
  });

  useEffect(() => {}, [accessList]);

  return (
    <SingInUpForm>
      <h5 className="tx-gray-800 mg-b-25">Ingreso al Usuarios</h5>
      {loginErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-black" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <label className="form-control-label">Email:</label>
        <input
          type="email"
          id="user"
          className="form-control"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">Username is required</p>}

        <label className="form-control-label">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

        <label className="form-control-label">OTP:</label>
        <input
          type="number"
          id="otp"
          className="form-control"
          placeholder="OTP"
          {...register("otp", { required: true })}
        />
        {errors.password && <p className="text-red-500">Otp is required</p>}

        <button type="submit" id="submitBtn" className="btn btn-block">
          Ingresar
        </button>
      </form>
    </SingInUpForm>
  );
};

export { LoginPage };
