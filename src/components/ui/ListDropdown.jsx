import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ListDropdown({ onSelect, placeholder, data }) {
  //   const modulesList = useSelector((state) => state.modules);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
  //     // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
  //     const loadData = async () => {
  //       try {
  //         await dispatch(listModulesAsync());
  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Error al obtener la lista de modulos:", error);
  //         setLoading(false);
  //       }
  //     };

  //     loadData();
  //   }, [dispatch]);

  const itemDataData = data ? data : [];

  const handleSelection = async (event) => {
    const itemId = event.target.value;

    const selectedItem = itemDataData.find(
      (item) => item.id === parseInt(itemId)
    );

    onSelect(selectedItem);
  };

  //TODO aqui se debe hacer la consutla de los sub-modulos que pertenecen al usuario
  return (
    <div className="form-group mg-b-10-force">
      <select
        id="userDropdown"
        className="form-control select2"
        data-placeholder={placeholder}
        onChange={handleSelection}
      >
        <option label={placeholder}></option>
        {itemDataData.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { ListDropdown };
