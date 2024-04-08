import React, { useState } from "react";
import { ListIcons } from "../ComponentsExport";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { createModulesAsync } from "../../features/modules/modulesSlice";
import { useDispatch } from "react-redux";
import { PopUp } from "../ui/PopUp";

/**
 *
 * @returns
 */
function CreateModules() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mensajeModuloAviso = "Aviso";
  const dispatch = useDispatch();

  const { errors: createErrors } = useAuth();

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [mensajeModule, setMensajeModule] = useState(false);
  const [selectedIconTitle, setSelectedIconTitle] = useState("");

  const onSubmit = handleSubmit(async (values) => {
    values.icon = selectedIconTitle;
    await dispatch(createModulesAsync(values));
    setPopUpOpen(true);
    setMensajeModule(`El modulo ha sido creado `);
  });

  const handleClosePopUp = () => {
    setPopUpOpen(false); // Cierra el PopUp
  };

  const handleIconSelect = (title) => {
    setSelectedIconTitle(title);
  };

  return (
    <>
      <div className="card pd-20 pd-sm-40">
        <h6 className="card-body-title">
          Creación de módulos de primer nivel en el sistema
        </h6>
        <p className="mg-b-20 mg-sm-b-30">
          Crear un módulo implica desarrollo, no trabajar el módulo si no esta
          desarrollado
        </p>
        {createErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-black" key={i}>
            {error}
          </div>
        ))}
        <form>
          <div className="form-layout">
            <div className="row mg-b-25">
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">
                    Nombre del módulo:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="createModuleName"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-red-500">Name is required</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-control-label">Icono </label>
                  <input
                    className="form-control"
                    type="text"
                    id="createModuleIcon"
                    value={selectedIconTitle}
                    readOnly
                    {...register("icon", { required: false })}
                  />
                  {errors.icon && (
                    <p className="text-red-500">Icon is required</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="hidden"
                    id="createModuleSlug"
                    placeholder="Enter lastname"
                  />
                </div>
              </div>
            </div>
            <div className="pd-40 bg-gray-100">
              <p>Seleccione un icono para asignar al módulo</p>
              <ul
                id="icons"
                className="row icon-list list-unstyled tx-32 mg-b-0"
              >
                <ListIcons onIconSelect={handleIconSelect} />
              </ul>
            </div>
            <div className="form-layout-footer">
              <button
                className="btn btn-info mg-r-5"
                id="btnCrearModulo"
                type="button" // Cambiamos el tipo de botón a "button"
                onClick={handleSubmit(onSubmit)}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
      {isPopUpOpen && (
        <PopUp
          title={mensajeModuloAviso}
          message={mensajeModule}
          onClose={handleClosePopUp}
        />
      )}
    </>
  );
}

export { CreateModules };
