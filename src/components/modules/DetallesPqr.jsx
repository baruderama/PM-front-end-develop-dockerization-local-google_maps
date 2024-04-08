import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../ComponentsExport";
import { DownloadLink } from "../ui/DownloadLink";
import { useSelector, useDispatch } from "react-redux";
import { OnePqrsAsync } from "../../features/pqrs/pqrsSlice";
import { updatePqr } from "../../api/endpoints/endpoints";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { PopUp } from "../ui/PopUp";
import { fireEvent } from "@testing-library/react";

const DetallesPqr = () => {
  const pqrsListOne = useSelector((state) => state.pqrs.onePqr);
  const [loading, setLoading] = useState(true);
  const [pqrOne, setPqrOne] = useState([]);
  const [richText, setRichText] = useState("");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const mensajePqrsAviso = "Aviso";
  const [mensajePqrs, setMensajePqrs] = useState(false);

  const [pqrData, setPqrData] = useState({
    conductor: "",
    auxiliar: "",
    auxiliares: [],
    clienteReporto: "No",
    reportoOperaciones: "No",
    tieneChecklist: "No",
    checklistFirmado: "No",

    estado: "1",
    aceptarObjetar: "aceptar",
    documentos: [],
    documentosSubidosName: [],
  });

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"], // Negrita, cursiva, subrayado y tachado
      ["link"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }], // Color de texto y fondo
      ["blockquote"], // Cita y bloque de código
      [{ size: ["small", false, "large", "huge"] }],
      [{ indent: "-1" }, { indent: "+1" }], // Opciones de sangría
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "list",
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "align",
    "color",
    "background",
    "blockquote",
    "size", // Añadir 'size' a los formatos
    "indent", // Agregar sangría a los formatos
    "clean",
  ];

  const handleRichTextChange = (value) => {
    setRichText(value);
  };

  const handleInputChange = (e) => {
    // const { name, value } = e.target;

    // setPqrData({ ...pqrData, [name]: value });
    
    if (e.target && e.target.value !== 'null') {
      const { name, value } = e.target;
      setPqrData({ ...pqrData, [name]: value });
    }else{
      console.log('palabra invalidad')
    }
  };

  const handleClosePopUp = () => {
    setPopUpOpen(false); // Cierra el PopUp
  };

  const handleAuxiliarChange = (e, index) => {
    const auxiliaresCopy = [...pqrData.auxiliares];
    auxiliaresCopy[index] = e.target.value;
    setPqrData({ ...pqrData, auxiliares: auxiliaresCopy });
  };

  const addAuxiliar = () => {
    if (pqrData.auxiliar.trim() !== "") {
      console.log("hola");
      setPqrData({
        ...pqrData,
        auxiliar: "", // Limpiar el campo del nombre del auxiliar
        auxiliares: [...pqrData.auxiliares, pqrData.auxiliar],
      });
    }
  };

  const removeAuxiliar = (index) => {
    const auxiliaresCopy = [...pqrData.auxiliares];
    auxiliaresCopy.splice(index, 1); // Eliminar el auxiliar en el índice especificado
    setPqrData({ ...pqrData, auxiliares: auxiliaresCopy });
  };

  function handleFileUpload(event) {
    const selectedFiles = event.target.files; // Lista de archivos seleccionados
    console.log(selectedFiles);
    // Crear una copia del arreglo actual de documentos y agregar los nuevos
    const nuevosDocumentos = [...pqrData.documentos];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      nuevosDocumentos.push(file);
    }

    // Actualizar el estado con los nuevos documentos
    setPqrData({ ...pqrData, documentos: nuevosDocumentos });
  }
  function removeDocumento(index) {
    const newDocumentos = [...pqrData.documentos];
    newDocumentos.splice(index, 1);

    setPqrData({
      ...pqrData,
      documentos: newDocumentos,
    });
  }

  const handleSubmit = async (e) => {
    const { name } = e.nativeEvent.submitter;
    console.log(name);
    e.preventDefault();

    const formData = new FormData();
    formData.append("idNumRadicado", pqrOne.pqrsNumradicado);
    formData.append("tipoBtn", name);

    formData.append("resultadoInvestigacion", richText);

    const nombresDeEvidencia = pqrOne.pqrsEvidencia.map(
      (file) => file.filename
    );
    console.log(nombresDeEvidencia);

    for (let key in pqrOne) {
      if (key === "pqrsEvidencia") {
        // Agregar los nombres de los archivos al formData
        for (let i = 0; i < nombresDeEvidencia.length; i++) {
          formData.append("pqrsEvidencia", nombresDeEvidencia[i]);
        }
      } else {
        formData.append(key, pqrOne[key]);
      }
    }

    // const nuevoArreglo = pqrData[documentos].filter((elemento) => {
    //   if (elemento.data) {
    //   return !elemento.data || elemento.data.type !== 'Buffer';
    //   }
    // });

    for (let key in pqrData) {
      if (key === "documentos") {
        // Manejar el campo 'documentos' como un array de archivos
        // const filesOnly = pqrData[key].filter((item) => item instanceof File)[0];
        // console.log(filesOnly)
        // filesOnly.forEach((fileItem) => {
        //   console.log(fileItem)
        //   formData.append("documentos", fileItem);
        // });
        // console.log(pqrData[key])
        for (let i = 0; i < pqrData[key].length; i++) {
          const fileItem = pqrData[key][i];
          // console.log(fileItem)
          if (fileItem instanceof File) {
            console.log(fileItem);

            formData.append("documentos", fileItem);
          } else {
            pqrData.documentosSubidosName.push(fileItem.name);
            formData.append("documentosSubidosName", fileItem.name);
          }
        }
      } else if (key === "auxiliares") {
        // Manejar el campo 'documentos' como un array de archivos
        
        for (let i = 0; i < pqrData[key].length; i++) {
          formData.append("auxiliares", pqrData[key][i]);
        }
      } else {
        formData.append(key, pqrData[key]);
      }
    }

    //pqrData.documentosSubidosName = [];

    // for (let i = 0; i < pqrData.documentosSubidosName.length; i++) {
    //   console.log(pqrData.documentosSubidosName[i])
    //   formData.append("documentosSubidosName", pqrData.documentosSubidosName[i]);

    // }

    console.log(pqrData);
    const res = await updatePqr(formData);
    console.log(res);
    if (res.data.succes) {
      setMensajePqrs("El pqrs se ha actualizado");
      // window.location.reload();
      setPopUpOpen(true);
      
    } else {
      setMensajePqrs("No se ha podido actualizar");
      setPopUpOpen(true);
    }
    // Lógica para enviar el formulario
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      try {
        await dispatch(OnePqrsAsync(id));
        setLoading(false);
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
      const result = await pqrsListOne;
      console.log(result);
      //Esta condicional es necesaria para que no de error de que el objeto es undefined
      if (result && result.data) {
        setPqrOne(result.data.data);
        setRichText(result.data.data.pqrsResultado);
        
        // Se inicializan los campos del formulario dependiendo de lo que se traiga de la bd
        setPqrData({
          ...pqrData,
          conductor: result.data.data.pqrsConductorServicio,
          auxiliares:
            result.data.data.pqrsAuxiliares === null
              ? []
              : result.data.data.pqrsAuxiliares,
          estado: result.data.data.pqrsEstado.toString(),
          aceptarObjetar: result.data.data.pqrsAceptarObjetar,
          clienteReporto: result.data.data.pqrsReportoDano,
          reportoOperaciones: result.data.data.pqrsReportoDanoOperaciones,
          tieneChecklist: result.data.data.pqrsTieneChecklist,
          checklistFirmado: result.data.data.pqrsTieneChecklistFirmado,
          documentos: result.data.data.pqrsDocumentosRespuesta,
        });
      
      }
    };

    formatUsers();
  }, [pqrsListOne]);

  if (loading) {
    // return <div>Cargando...</div>;
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  }

  const msg = `Aqui iria el detalle de la PQRS con ID: ${pqrOne.pqrsNumradicado}`;
  const descMsg = "Si tienes alguna inquitud contacta a el equipo de ITM";
  return (
    <>
      <div className="card pd-20 pd-sm-40">
        <h1 style={{ color: "#284673" }}>PQRS # {pqrOne.pqrsNumradicado}</h1>
        <h2 className="card-body-title">Detalles del PQR</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <strong>Fecha de Registro:</strong>{" "}
              {new Date(pqrOne.pqrsFecharegistro).toLocaleDateString()}
            </div>
            <div className="mb-3">
              <strong>Número de Radicado:</strong> {pqrOne.pqrsNumradicado}
            </div>
            <div className="mb-3">
              <strong>Tipo de Reclamación:</strong> {pqrOne.pqrsTiporeclamacion}
            </div>
            <div className="mb-3">
              <strong>Tipo de Documento:</strong> {pqrOne.pqrsTipodocumento}
            </div>
            <div className="mb-3">
              <strong>Número de Documento:</strong> {pqrOne.pqrsNodocumento}
            </div>
            <div className="mb-3">
              <strong>Nombre del Titular:</strong>{" "}
              {`${pqrOne.pqrsNombretitular} ${pqrOne.pqrsApellidotitular}`}
            </div>
            <div className="mb-3">
              <strong>Email:</strong> {pqrOne.pqrsEmail}
            </div>
            <div className="mb-3">
              <strong>Teléfono:</strong> {pqrOne.pqrsTelefono}
            </div>
            <div className="mb-3">
              <strong>Tipo de Servicio:</strong> {pqrOne.pqrsTiposervicio}
            </div>
            <div className="mb-3">
              <strong>Fecha de Servicio:</strong>{" "}
              {new Date(pqrOne.pqrsFechaservicio).toLocaleDateString()}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <strong>Origen:</strong> {pqrOne.pqrsOrigen}
            </div>
            <div className="mb-3">
              <strong>Destino:</strong> {pqrOne.pqrsDestino}
            </div>
            <div className="mb-3">
              <strong>Asesor:</strong> {pqrOne.pqrsAsesor}
            </div>
            <div className="mb-3">
              <strong>¿Informó?:</strong> {pqrOne.pqrsInformo}
            </div>
            <div className="mb-3">
              <strong>Costo Estimado:</strong> {pqrOne.pqrsCostoestimado}
            </div>
            <div className="mb-3">
              <strong>Mercancía:</strong> {pqrOne.pqrsMercancia}
            </div>

            <div className="mb-3">
              <strong>Estado:</strong>{" "}
              {pqrOne.pqrsEstado === 1
                ? "Abierto"
                : pqrOne.pqrsEstado === 2
                ? "En Curso"
                : pqrOne.pqrsEstado === 3
                ? "Cerrado"
                : "No se sabe"}
            </div>
          </div>
        </div>
        <div style={{ borderBottom: "4px solid #ddd", margin: "30px 0" }}></div>

        <div className="mb-3" style={{ width: "100%" }}>
          <h5 className="card-body-title">Observaciones:</h5>
          {pqrOne.pqrsObservaciones}
        </div>

        <div style={{ borderBottom: "4px solid #ddd", margin: "30px 0" }}></div>
        <div className="mb-4">
          <h5 className="card-body-title">Evidencia:</h5>

          {pqrOne.pqrsEvidencia.map((evidence, evidenceIndex) => (
            <div key={evidenceIndex} className="documento-item">
              <span>{evidence.filename}</span>
              <div className="documento-buttons">
                <DownloadLink
                  fileData={evidence}
                  fileName={evidence.filename}
                />
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderBottom: "4px solid #ddd", margin: "30px 0" }}></div>
        <h5 className="card-body-title">Aceptar u Objetar PQRS:</h5>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-layout">
            <div className="row mg-b-25">
              <div className="col-lg-4">
                <div className="form-group">
                  <div className="mb-3">
                    <strong>Conductor del Servicio:</strong>{" "}
                    <input
                      className="form-control"
                      type="text"
                      name="conductor"
                      value={pqrData.conductor}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <div className="mb-3">
                    <strong>Auxiliares:</strong>{" "}
                    {pqrData.auxiliares.map((auxiliar, index) => (
                      <div key={index} className="auxiliar-input-container">
                        <input
                          className="form-control auxiliar-input"
                          type="text"
                          readOnly
                          name={`auxiliares[${index}]`}
                          value={auxiliar}
                          onChange={(e) => handleAuxiliarChange(e, index)}
                        />
                        <button
                          type="button"
                          onClick={() => removeAuxiliar(index)}
                          className="remove-auxiliar-button"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    ))}
                    <div className="auxiliar-input-container">
                      <input
                        className="form-control auxiliar-input"
                        type="text"
                        name="auxiliar"
                        value={pqrData.auxiliar}
                        onChange={handleInputChange}
                        placeholder="Nombre del auxiliar"
                      />
                      <button
                        type="button"
                        onClick={addAuxiliar}
                        className="add-auxiliar-button"
                      >
                        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="radio-group-container">
            <div className="form-group form-group-with-radio">
              <div className="mb-3">
                <strong>Cliente Reportó el Daño:</strong> <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    name="clienteReporto"
                    className="radio-input"
                    value="Si"
                    checked={pqrData.clienteReporto === "Si"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">Si</span>
                </div>
                <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    name="clienteReporto"
                    className="radio-input"
                    value="No"
                    checked={pqrData.clienteReporto === "No"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">No</span>
                </div>
              </div>
            </div>

            <div className="form-group form-group-with-radio">
              <div className="mb-3">
                <strong>Reportó el Daño a Operaciones:</strong> <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    name="reportoOperaciones"
                    className="radio-input"
                    value="Si"
                    checked={pqrData.reportoOperaciones === "Si"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">Si</span>
                </div>
                <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    name="reportoOperaciones"
                    className="radio-input"
                    value="No"
                    checked={pqrData.reportoOperaciones === "No"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">No</span>
                </div>
              </div>
            </div>

            <div className="form-group form-group-with-radio">
              <div className="mb-3">
                <strong>Tiene Checklist:</strong> <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="radio-input"
                    name="tieneChecklist"
                    value="Si"
                    checked={pqrData.tieneChecklist === "Si"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">Si</span>
                </div>
                <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    name="tieneChecklist"
                    className="radio-input"
                    value="No"
                    checked={pqrData.tieneChecklist === "No"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">No</span>
                </div>
              </div>
            </div>

            <div className="form-group form-group-with-radio">
              <div className="mb-3">
                <strong>Checklist Firmado por Ambos Lados:</strong> <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    name="checklistFirmado"
                    className="radio-input"
                    value="Si"
                    checked={pqrData.checklistFirmado === "Si"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">Si</span>
                </div>
                <br />
                <div className="custom-radio">
                  <input
                    type="radio"
                    name="checklistFirmado"
                    className="radio-input"
                    value="No"
                    checked={pqrData.checklistFirmado === "No"}
                    onChange={handleInputChange}
                  />{" "}
                  <div className="radio-control"></div>
                  <span className="radio-label">No</span>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <strong>Resultado de la Investigación:</strong> <br />
              {/* <textarea
              className="form-control"
              style={{
                width: "100%", // Ocupar todo el ancho disponible
                minHeight: "150px", // Altura mínima deseada
              }}
                value={pqrData.resultadoInvestigacion}
                name="resultadoInvestigacion"
                onChange={handleInputChange}
              /> */}
              <div
              // style={{
              //   width: "8.5in", // Centra el contenido horizontalmente
              //   padding: "20px",
              // }}
              >
                <ReactQuill
                  value={richText}
                  // name="resultadoInvestigacion"
                  onChange={handleRichTextChange}
                  modules={quillModules}
                  formats={quillFormats}
                />
              </div>
            </div>
          </div>

          <div className="documentos-container">
            <div className="mb-3 documentos-section">
              <strong>Cargar Documentos:</strong>{" "}
              <input
                name="documentos"
                type="file"
                onChange={handleFileUpload}
                multiple
              />
            </div>

            <div className="mb-3 documentos-section">
              {pqrData.documentos.map((documento, index) => (
                <div key={index} className="documento-item">
                  <span>{documento.name}</span>
                  <div className="documento-buttons">
                    <DownloadLink
                      fileData={documento}
                      fileName={documento.name}
                    />
                    <button
                      className="btn btn-danger mg-b-10"
                      type="button"
                      onClick={() => removeDocumento(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-layout">
            <div className="row mg-b-25">
              <div className="col-lg-4">
                <div className="form-group">
                  <div className="mb-3">
                    <strong>Estado:</strong>{" "}
                    <select
                      className="form-control select2"
                      name="estado"
                      value={pqrData.estado}
                      onChange={handleInputChange}
                    >
                      <option value="1">Abierto</option>
                      <option value="2">En Curso</option>
                      <option value="3">Cerrado</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <div className="mb-3">
                    <strong>Aceptar u Objetar:</strong>{" "}
                    <select
                      name="aceptarObjetar"
                      className="form-control select2"
                      value={pqrData.aceptarObjetar}
                      onChange={handleInputChange}
                    >
                      <option value="aceptar">Aceptar</option>
                      <option value="objetar">Objetar</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-layout-footer d-flex justify-content-center">
            <button
              className="btn btn-info  mg-r-5"
              id="btnCrearSubModulo"
              name="guardar"
              type="submit"
              disabled={!pqrData.auxiliares}
            >
              Guardar
            </button>
            <button
              className="btn btn-info  mg-r-5"
              id="btnCrearSubModulo"
              name="enviar"
              type="submit"
              disabled={!pqrData.auxiliares}
            >
              Guardar y enviar
            </button>
          </div>
        </form>
      </div>
      {isPopUpOpen && (
        <PopUp
          title={mensajePqrsAviso}
          message={mensajePqrs}
          onClose={handleClosePopUp}
        />
      )}
    </>
  );
};

export { DetallesPqr };
