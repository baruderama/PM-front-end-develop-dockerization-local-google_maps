import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import GridLoader from "react-spinners/GridLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

/**
 * 
 * @module Loading 
 * 
 * EXPLI: componente que representa un loader o spinner el cual esta animado, y se muestra al 
 * usuario para avisar que el sistema esta cargando la informacion
 */
function Loading() {
  const [loading, setLoading] = useState(true);
  // const [color, setColor] = useState("#252850");
  const [color, setColor] = useState("#EB5D1D");

  return (
    <div className="sweet-loading">
      <GridLoader
        color={color}
        loading={loading}
        css={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export { Loading };
