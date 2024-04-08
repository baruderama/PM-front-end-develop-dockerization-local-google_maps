import React from "react";


/**
 * 
 * @module PopUp
 * 
 * EXPLI: componente que muestra un cuadro de dialogo por encima de toda la vista el cual
 * avisa de alguna accion del sistema
 */
const PopUp = ({ title, message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content bd-0 tx-14">
            <div className="modal-header pd-x-20">
              <h6 className="am-title">{title}</h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pd-20">
              <p className="mg-b-5">{message} </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary pd-x-20"
                data-dismiss="modal"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PopUp };
