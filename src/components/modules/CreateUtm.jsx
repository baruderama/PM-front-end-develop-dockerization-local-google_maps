import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { ListDropdown } from "../ui/ListDropdown";
import { sourceOptions } from "../../utils/variablesVarias";
import { mediumOptions } from "../../utils/variablesVarias";
import { contentOptions } from "../../utils/variablesVarias";
import { funnelOptions } from "../../utils/variablesVarias";
import { utmCreatesAsync } from "../../features/utm/utmSlice";
import { useAuth } from "../../context/AuthContext";
import { Loading } from "../ComponentsExport";
import DatePicker from "react-datepicker";
import { PopUp } from "../ui/PopUp";
import "react-datepicker/dist/react-datepicker.css";

const CreateUtm = () => {
  const utmCreated = useSelector((state) => state.utms.createdUtm);
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const withUtm = watch("withUtm");
  const [dropdownUtmData, setdropdownUtmData] = useState({
    medio: "",
    source: "",
    contenido: "",
    faseFunnel: "",
    fecha: ""
  });
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const dispatch = useDispatch();
  const { logout, user } = useAuth();
  const mensajeUtmAviso = "Aviso";
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [mensajeUtm, setMensajeUtm] = useState("");
  const selectSource = "selecciona la fuente";
  const selectMedio = "selecciona el medio";
  const selectContenido = "selecciona el contenido";
  const selectfunnel = "selecciona el funnel";

  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = async (data) => {
    console.log(data)
    // Aquí puedes acceder a todos los valores del formulario en `data`
    // y realizar cualquier acción que necesites, como crear el enlace corto.
    console.log(showAdditionalFields);
    if (user && user.data) {
      const newData = {
        ...data,
        ...dropdownUtmData,
        user: user.data.usr_name,
        conUtm: showAdditionalFields,
      };
      console.log(newData);
      await dispatch(utmCreatesAsync(newData));
      // const utmCre = await utmCreated;
      // console.log(utmCreated);
      // if (utmCreated.succes) {
      //   setMensajeUtm(
      //     "Esta es la url corta: " +
      //       "localhost:9006/api/v1/utm/" +
      //       utmCre.data.utmShort
      //   );
      //   setPopUpOpen(true);
      // }
    }
  };

  useEffect(() => {
    // Este efecto se ejecuta cada vez que utmCre cambia
    if(utmCreated){
      console.log(utmCreated.succes)
    if (utmCreated.succes) {
      setMensajeUtm(
        "Esta es la url corta: " +
          "localhost:9006/api/v1/utm/" +
          utmCreated.data.utmShort
      );
      setPopUpOpen(true);
    }else if(!utmCreated.succes){
      setMensajeUtm(
        "No se pudo guardar, revisa que esa palabra clave no este registrada en el sistema: "
      );
      setPopUpOpen(true);
    }
  }
  }, [utmCreated]); 

  function esFecha(variable) {
    return (
      Object.prototype.toString.call(variable) === "[object Date]" &&
      !isNaN(variable.getTime())
    );
  }

  const handleClosePopUp = () => {
    setPopUpOpen(false); // Cierra el PopUp
  };
  const handleSelect = (option, identifier) => {
    // Almacena la opción seleccionada en el estado
    console.log(option);
    if (option) {
      if (esFecha(option)) {
        setdropdownUtmData({ ...dropdownUtmData, [identifier]: option });
        console.log(option);
      } else
        setdropdownUtmData({ ...dropdownUtmData, [identifier]: option.name });
    } else setdropdownUtmData({ ...dropdownUtmData, [identifier]: option });

    console.log(dropdownUtmData);
  };

  if (!user) {
    // return <div>Cargando...</div>;
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="card pd-20 pd-sm-40">
        <h6 className="card-body-title">Creación de UTM</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-layout">
            <div className="row mg-b-25">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="url" className="form-control-label">
                    URL del sitio - No incluir el / del final. Incluir toda la url, por ejemplo: "https://masmetros.com.co"
                  </label>
                  <Controller
                    name="url"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Este campo es requerido" }}
                    render={({ field }) => (
                      <div>
                        <input {...field} className="form-control" />
                        {errors.url && <span>{errors.url.message}</span>}
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label className="form-control-label">
                    Palabra clave para acortar
                  </label>
                  <Controller
                    name="short"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Este campo es requerido" }}
                    render={({ field }) => (
                      <div>
                        <input {...field} className="form-control" />
                        {errors.short && <span>{errors.short.message}</span>}
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="checkbox"
                    id="withUtm"
                    checked={!showAdditionalFields}
                    onChange={() => {
                      setShowAdditionalFields(!showAdditionalFields);
                    }}
                  />
                  <label style={{ marginLeft: 10 }}>Sin UTM</label>
                </div>
              </div>
            </div>
            {showAdditionalFields && (
              <div className="row mg-b-25">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-control-label">Source</label>
                    <ListDropdown
                      onSelect={(option) => handleSelect(option, "source")}
                      placeholder={selectSource}
                      data={sourceOptions}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-control-label">Medio</label>
                    {/* Agrega aquí el campo 'Medio' */}
                    <ListDropdown
                      onSelect={(option) => handleSelect(option, "medio")}
                      placeholder={selectMedio}
                      data={mediumOptions}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="campaing" className="form-control-label">
                      Campaña
                    </label>
                    <Controller
                      name="campaign"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Este campo es requerido" }}
                      render={({ field }) => (
                        <div>
                          <input {...field} className="form-control" />
                          {errors.campaign && (
                            <span>{errors.campaign.message}</span>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
                {["Instagram", "Facebook", "Tiktok", "Youtube"].includes(
                  dropdownUtmData.source
                ) && (
                  <div className="col-lg-3" id="dates">
                    <div className="form-group">
                      <label className="form-control-label label-top">
                        Fecha de la publicación
                      </label>
                      <div className="custom-datepicker">
                        <DatePicker
                          id="dateNumber"
                          selected={dropdownUtmData.fecha}
                          onChange={(option) => handleSelect(option, "fecha")}
                          className="form-control"
                          dateFormat="dd/MM/yyyy" // Puedes personalizar el formato de la fecha
                          isClearable={true} // Permite borrar la fecha seleccionada
                          yearDropdown // Habilita la selección de años anteriores
                          scrollableYearDropdown // Hace que la lista de años sea desplazable
                          showYearDropdown //
                        />
                      </div>
                    </div>
                  </div>
                )}
                {["Display"].includes(dropdownUtmData.medio) && (
                  <div className="col-lg-3" id="formats">
                    <div className="form-group">
                      <label className="form-control-label">
                        Tamaño de la pieza
                      </label>
                      <Controller
                        name="weight"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Este campo es requerido" }}
                        render={({ field }) => (
                          
                        
                          <div>
                            <input
                              {...field}
                              type="number"
                              id="weight"
                              className="form-control"
                              placeholder="Ancho"
                            />
                            {errors.keyword && (
                              <span>{errors.weight.message}</span>
                            )}
                          </div>
                        )}
                      />
                      
                      <br />
                      <Controller
                        name="height"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Este campo es requerido" }}
                        render={({ field }) => (
                          
                        
                          <div>
                            <input
                              {...field}
                              type="number"
                              id="height"
                              className="form-control"
                              placeholder="Alto"
                            />
                            {errors.keyword && (
                              <span>{errors.height.message}</span>
                            )}
                          </div>
                        )}
                      />
                      
                    </div>
                  </div>
                )}
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-control-label">Contenido</label>
                    {/* Agrega aquí el campo 'Contenido' */}
                    <ListDropdown
                      onSelect={(option) => handleSelect(option, "contenido")}
                      placeholder={selectContenido}
                      data={contentOptions}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-control-label">
                      Fase del funnel
                    </label>
                    {/* Agrega aquí el campo 'Fase del funnel' */}
                    <ListDropdown
                      onSelect={(option) => handleSelect(option, "faseFunnel")}
                      placeholder={selectfunnel}
                      data={funnelOptions}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-control-label">Palabra clave</label>
                    <Controller
                      name="keyword"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Este campo es requerido" }}
                      render={({ field }) => (
                        <div>
                          <input {...field} className="form-control" />
                          {errors.keyword && (
                            <span>{errors.keyword.message}</span>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="col-lg-3">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary col-auto"
                  style={{ marginTop: "20px" }}
                >
                  Crear Link Corto
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {isPopUpOpen && (
        <PopUp
          title={mensajeUtmAviso}
          message={mensajeUtm}
          onClose={handleClosePopUp}
        />
      )}
    </>
  );
};

export { CreateUtm };
