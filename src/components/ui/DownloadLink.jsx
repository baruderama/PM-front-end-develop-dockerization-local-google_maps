import React from "react";


/**
 * 
 * @module DownloadLink
 * 
 * EXPLI: Este componente genera un boton de descarga segun el docuemnto que se le pase
 */
const DownloadLink = ({ fileData, fileName }) => {
  const handleDownload = () => {
    console.log(fileData)
    if (fileData && fileData.data) {
      // Crear una URL de objeto de datos desde el flujo de datos
      const blobUrl = URL.createObjectURL(
        new Blob([new Uint8Array(fileData.data.data)], {
          type: fileData.data.type,
        })
      );

      // Crear un enlace temporal
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = fileName; // Nombre de archivo deseado

      // Simular un clic en el enlace para iniciar la descarga
      downloadLink.click();
      return;
    }

    if (fileData) {
      // Crear una URL de objeto de datos desde el flujo de datos
      const blobUrl = URL.createObjectURL(fileData
      );

      // Crear un enlace temporal
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = fileName; // Nombre de archivo deseado

      // Simular un clic en el enlace para iniciar la descarga
      downloadLink.click();
    }
  };

  return (
    <div>
      {/* Botón o enlace para iniciar la descarga */}
      {/* <label>{fileName}</label> */}
      <span>&nbsp;</span>
      <button type="button" className="btn btn-teal mg-r-5" onClick={handleDownload}>
        Descargar
      </button>
    </div>
  );
};

export { DownloadLink };
