import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listPqrsAsync } from "../../features/pqrs/pqrsSlice";
import { Loading } from "../ComponentsExport";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";


/**
 * 
 * @function ListPqrs
 * 
 * EXPLI: Este componente genera una card o tarjeta en el cual esta una tabla que contendra
 * la lista de pqrs. Las columnas representan algunas propiedades del pqr
 */
const ListPqrs = () => {

  

  //variable de redux que tiene la lista de pqrs
  const pqrsList = useSelector((state) => state.pqrs.pqrsList);
  
  //variable que representa si se muestra o no se muestra el loader
  const [loading, setLoading] = useState(true);
  const [pqrLista, setPqrLista] = useState([]);

  //variable que dice en que pagina se esta de la lista de pqrs
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  //variable que dice cuantos pqr se muestran por pagina
  const itemsPerPage = 20;
  const dispatch = useDispatch();

  //Este useEffect accede de forma asincrona a la funcion de listPqrsAsync del redux de pqrs
  useEffect(() => {
    const loadData = async () => {
      try {
        await dispatch(listPqrsAsync());
        setLoading(false);//Cuando termine de obtener la informacion se desactiva el loader
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
      const result = await pqrsList;

      console.log(result)
      //Esta condicional es necesaria para que no de error de que el objeto es undefined
      if (result && result.data) {
        setPqrLista(result.data.data);
      }
    };

    formatUsers();
  }, [pqrsList]);

  //Funcion que controla el cambio de pagina de la lista de pqrs
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  //Funcion que crea filtro segun el estado y el tipo de servicio del pqr
  const filteredPqrs = pqrLista.filter((pqr) => {
    const filterByState =
      !selectedState || pqr.pqrsEstado === parseInt(selectedState);
    const filterByService =
      !selectedService || pqr.pqrsTiposervicio === selectedService;

    return filterByState && filterByService;
  });



  const offset = currentPage * itemsPerPage;
  const paginatedData = filteredPqrs.slice(offset, offset + itemsPerPage);

  //Funcion que sorte el arreglo de pqrs del mas reciente al mas antiguo segun la fecha de 
  //registro
  const sortedData = paginatedData.slice().sort((a, b) => {
    const fechaA = new Date(a.pqrsFecharegistro);
    const fechaB = new Date(b.pqrsFecharegistro);
    return fechaB - fechaA; // Orden descendente
  });

  const handleStateChange = (event) => {
    // Manejar el cambio de estado seleccionado en el filtro
    setSelectedState(event.target.value);
    setCurrentPage(0); // Restablecer la página actual al cambiar el estado
  };

  const handleServiceChange = (event) => {
    // Manejar el cambio de estado seleccionado en el filtro
    setSelectedService(event.target.value);
    setCurrentPage(0); // Restablecer la página actual al cambiar el estado
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  }

  const handleTableRowClick = (pqrsNumradicado) => {
    // Redirigir a la vista de detalle utilizando navigate
    navigate(`/in/detalle-pqr/${pqrsNumradicado}`);
  };

  return (
    <div className="card pd-20 pd-sm-40">
      <h6 className="card-body-title">Lista de preguntas, quejas y reclamos</h6>
      <p className="mg-b-20 mg-sm-b-30">
        Aqui se listaran las preguntas quejas y reclamos que estan presentes en
        el sistema
      </p>

      <div className="table-wrapper">
        <div
          // className="datatable1_wrapper"
          className="dataTables_wrapper no-footer"
        >
          <div id="datatable1_filter" className="dataTables_filter">
            <div className="filters-container">
              <h4>Filtros:</h4>
              <div className="filter-select">
                <label>Estado:</label>
                <select
                  id="stateDropdown"
                  className="form-control select2"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="">Todos los Estados</option>
                  <option value="1">Abierto</option>
                  <option value="2">En Curso</option>
                  <option value="3">Cerrado</option>
                </select>
              </div>
              <div className="filter-select">
                <label>Servicio:</label>
                <select
                  id="serviceDropdown"
                  className="form-control select2"
                  value={selectedService}
                  onChange={handleServiceChange}
                >
                  <option value="">Todos los Servicios</option>
                  <option value="mudanza local">
                    Mudanza local
                  </option>
                  <option value="mudanza nacional">
                    Mudanza nacional
                  </option>
                  <option value="empaque">
                    Empaque
                  </option>
                  <option value="bodegas">
                    Bodegas
                  </option>
                  <option value="servicios por fachada">
                    Servicios por fachada
                  </option>
                  <option value="movimiento interno">
                    Movimiento interno
                  </option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
          </div>
          <table
            id="datatable1"
            className="table display responsive nowrap dataTable no-footer dtr-inline collapsed"
            role="grid"
            aria-describedby="datatable1_info"
          >
            <thead>
              <tr>
                <th className="wd-25p">Fecha de Registro</th>
                <th
                  className="wd-15p sorting_asc"
                  tabIndex="0"
                  aria-controls="datatable1"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="First name: activate to sort column ascending"
                  aria-sort="descending"
                >
                  Nombre
                </th>

                <th className="wd-20p">Tipo de reclamacion</th>
                <th className="wd-20p">Tipo de servicio</th>
                <th className="wd-20p">Fecha de servicio</th>
                <th className="wd-15p">Numero de radicado</th>
                <th className="wd-15p">Estado</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((pqr, index) => (
                <tr
                  key={index}
                  onClick={() => handleTableRowClick(pqr.pqrsNumradicado)}
                >
                  <td>
                    {new Date(pqr.pqrsFecharegistro).toLocaleDateString()}
                  </td>

                  <td>{`${pqr.pqrsNombretitular} ${pqr.pqrsApellidotitular}`}</td>

                  <td>{pqr.pqrsTiporeclamacion}</td>
                  <td>{pqr.pqrsTiposervicio}</td>
                  <td>
                    {new Date(pqr.pqrsFechaservicio).toLocaleDateString()}
                  </td>
                  <td>{pqr.pqrsNumradicado}</td>
                  <td>
                    {pqr.pqrsEstado === 1
                      ? "Abierto"
                      : pqr.pqrsEstado === 2
                      ? "En Curso"
                      : pqr.pqrsEstado === 3
                      ? "Cerrado"
                      : "No se sabe"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="dataTables_info"
        id="dataTable1_info"
        role="status"
        aria-live="polite"
      >
        {" "}
        Mostrando {offset + 1} -{" "}
        {Math.min(offset + itemsPerPage, pqrLista.length)} de {pqrLista.length}{" "}
        entradas
      </div>
      <div
        className="dataTables_paginate paging_simple_numbers"
        id="dataTable1_paginate"
      >
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={"..."}
          pageCount={Math.ceil(pqrLista.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export { ListPqrs };
