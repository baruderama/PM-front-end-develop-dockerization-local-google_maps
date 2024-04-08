import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listUtmAsync,updateUtmAsync } from "../../features/utm/utmSlice";
import { Loading } from "../ComponentsExport";
import { PopUp } from "../ui/PopUp";

function ListUtm() {
  const utmList = useSelector((state) => state.utms.utmList);
  const utmUpdated = useSelector((state) => state.utms.updatedUtm);
  const [loading, setLoading] = useState(true);
  const [utmLista, setUtmLista] = useState([]);
  const [activas, setActivas] = useState("");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [mensajeUtm, setMensajeUtm] = useState("");
  const mensajeUtmAviso = "Aviso";
  const dispatch = useDispatch();

  function formatFecha(fecha) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(fecha).toLocaleDateString(undefined, options);
  }

const handleClosePopUp = () => {
    setPopUpOpen(false); // Cierra el PopUp
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        await dispatch(listUtmAsync());
        setLoading(false); //Cuando termine de obtener la informacion se desactiva el loader
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [dispatch]);

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que el estado userCreated cambie.
    // Cuando userCreated cambie, imprimiremos su valor en la consola
    const formatUsers = async () => {
      const result = await utmList;
      console.log(result);

      //Esta condicional es necesaria para que no de error de que el objeto es undefined
      if (result && result.data) {
        const filteredResult = result.data.data.filter(item => item.utmActive === 0);
    //     const fechaNueva = new Date(filteredResult.utmDate);

    // const dia = fechaNueva.getDate();
    // // Obtiene el día del mes (1-31)
    // const mes = fechaNueva.getMonth() + 1; // Meses en JavaScript se cuentan desde 0, así que sumamos 1
    // const anio = fechaNueva.getFullYear(); // Obtiene el año

    // // Formatea el resultado como "dd/mm/yyyy"
    // const fechaFormateada = `${dia}-${mes}-${anio}`;
  
        setUtmLista(filteredResult);
        setActivas(filteredResult.length);
      }
    };

    formatUsers();
  }, [utmList]);

  useEffect(() => {
    // Este efecto se ejecuta cada vez que utmCre cambia
    if(utmUpdated){
      console.log(utmUpdated.succes)
    if (utmUpdated.succes) {
      setMensajeUtm(
        "Se ha desactivado la url: " +
          "localhost:9006/api/v1/utm/" +
          utmUpdated.data.utmShort
      );
      setPopUpOpen(true);
    }
  }
  }, [utmUpdated]); 

  const handleIconClick = (id) => {
    // Realiza acciones en función del ID u otra lógica aquí
    const utmToUpdate={
      id:id,
      active:1
    }
    dispatch(updateUtmAsync(utmToUpdate));
    // Puedes agregar aquí tu lógica para eliminar la fila o realizar cualquier otra acción necesaria.
  };
  

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  }
  return (
    <>
    <div className="card pd-20 pd-sm-40">
      <h6 className="card-body-title">UTM activas en el sistema:{activas}</h6>
      <div className="form-layout">
        <div className="row mg-b-25">
          {/* <div className="table-responsive" style={{ width: '100%', overflow: 'auto !important' }}> */}
          <table
            id="datatable1"
            className="table display responsive nowrap dataTable no-footer dtr-inline collapsed"
            role="grid"
            aria-describedby="datatable1_info"
          >
            <thead>
              <tr>
                <th>URL corta</th>
                <th>URL larga</th>
                <th>Hits</th>
                <th>Creada por</th>
                <th>Fecha</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {utmLista.map((row) => (
                <tr key={row.utmId}>
                  <td>{row.utmShort}</td>
                  <td>{row.utmUtm}</td>
                  <td>{row.utmHits}</td>
                  <td>{row.utmBy}</td>
                  <td>{formatFecha(row.utmDate)}</td>
                  <td
                    className="eraseUtm"
                    id={row.id}
                    style={{ textAlign: "center" }}
                  >
                    <i
                      className="ion-trash-b icon-hover"
                      onClick={() => handleIconClick(row.utmId)}
                      style={{ fontSize: "25px" }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
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
}

export { ListUtm };
