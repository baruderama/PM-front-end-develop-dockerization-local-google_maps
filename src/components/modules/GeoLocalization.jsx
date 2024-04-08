import React, { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  Marker,
  StreetViewPanorama,
} from "@react-google-maps/api";
import DatePicker from "react-datepicker";
import { API_GOOGLE_KEY } from "../../config/config";
import { listGeoAsync } from "../../features/geo/geoSlice";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../ComponentsExport";
import { ListDropdown } from "../ui/ListDropdown";
// import "@react-google-maps/api/dist/styles.css";
const GeoLocalization = () => {
  const geoList = useSelector((state) => state.geos.geoList);
  const dispatch = useDispatch();
  const center = { lat: 4.6, lng: -74.08 };
  const apiKey = API_GOOGLE_KEY;
  const [loading, setLoading] = useState(true);
  const [geoLista, setGeoLista] = useState([]);
  const [FormattedGeosCampaign, setFormattedGeosCampaign] = useState([]);
  const [FormattedGeosIntencion, setFormattedGeosIntencion] = useState([]);
  const [geoListaYa, setGeoListaYa] = useState(true);
  const selectUser = "Seleccione un usuario";
  const mapOptions = {
    mapTypeControl: true, // Habilita el control de tipo de mapa
    streetViewControl: true, // Habilita el control de Street View
  };

  const handleCampaingSelect = async (selectedCampaing) => {
    console.log(selectedCampaing);
  };

  const handleIntencionSelect = async (selectedIntencion) => {
    console.log(selectedIntencion);
  };

  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCxr4gnt-NMreSccWLvpM9rQwXasqJzrtA",
  });

  useEffect(() => {
    // Aquí puedes realizar cualquier otra lógica de inicialización o carga necesaria
    // Si es necesario, puedes llamar a una acción para cargar los usuarios al montar el componente
    const loadData = async () => {
      // window.location.reload();

      try {
        
        await dispatch(listGeoAsync());
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
      const result = await geoList;
      // console.log(result);
      // console.log(apiKey)
      if (result && result.data) {
        // console.log(parseFloat(result.data.data[0].geoLatitud))
        const newFormattedGeosCampaign = result.data.data.map((geo) => ({
          id: geo.geoId,
          name: geo.geoCampaign,
        }));
        const newFormattedGeosIntencion = result.data.data.map((geo) => ({
          id: geo.geoId,
          name: geo.geoIntencion,
        }));
        const uniqueCampaigns = [];
        const campaignSet = new Set();

        newFormattedGeosCampaign.forEach((item) => {
          const { name } = item;
          if (!campaignSet.has(name)) {
            campaignSet.add(name);
            uniqueCampaigns.push(item);
          }
        });

        const uniqueIntencion = [];
        const intencionSet = new Set();

        newFormattedGeosIntencion.forEach((item) => {
          const { name } = item;
          if (!intencionSet.has(name)) {
            intencionSet.add(name);
            uniqueIntencion.push(item);
          }
        });

        setFormattedGeosCampaign(uniqueCampaigns);
        setFormattedGeosIntencion(uniqueIntencion);
        setGeoLista(result.data.data);
        console.log(geoLista);
        console.log(FormattedGeosCampaign);
        console.log(FormattedGeosIntencion);
        setGeoListaYa(false);
      }

      //Esta condicional es necesaria para que no de error de que el objeto es undefined
    };

    formatUsers();
  }, [geoList]);

  if (loading && !isLoaded && geoListaYa) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading />
      </div>
    );
  } else {
    console.log(FormattedGeosCampaign)
    console.log(FormattedGeosIntencion)
    
    return (
      
      <Map
        geoLista={geoLista}
      />
    );
    
  }

  
};

function Map(geoLista) {
  // window.location.reload();
  const center = { lat: 4.6, lng: -74.08 };//bogota
  const selectUser = "Seleccione un usuario";
  const [filterGeoData, setFilterGeoData] = useState({
    intencion:"",
    campana:"",
    fechaDesde: "",
    fechaHasta: "",
  });

  function esFecha(variable) {
    return (
      Object.prototype.toString.call(variable) === "[object Date]" &&
      !isNaN(variable.getTime())
    );
  }

  console.log(geoLista.geoLista);
  const mapOptions = {
    mapTypeControl: true, // Habilita el control de tipo de mapa
    streetViewControl: true, // Habilita el control de Street View
  };

  const handleSelect = (option, identifier) => {
    // Almacena la opción seleccionada en el estado
    console.log(option);
    console.log(identifier)
    if (option) {
      if (esFecha(option)) {
        setFilterGeoData({ ...filterGeoData, [identifier]: option });
        console.log(option);
      } else
      setFilterGeoData({ ...filterGeoData, [identifier]: option.name });
    } else setFilterGeoData({ ...filterGeoData, [identifier]: option });

    console.log(filterGeoData);
  };

  const filteredMarkers = geoLista.geoLista.filter((location) => {
    const fechaLocation = new Date(location.geoDate); // Reemplaza "fecha" con el nombre real del campo de fecha en tu objeto geo
    const fechaDesdeFilter = filterGeoData.fechaDesde ? new Date(filterGeoData.fechaDesde) : null;
    const fechaHastaFilter = filterGeoData.fechaHasta ? new Date(filterGeoData.fechaHasta) : null;
  
    if (fechaDesdeFilter && fechaLocation < fechaDesdeFilter) {
      return false; // No mostrar marcadores anteriores a "Desde"
    }
  
    if (fechaHastaFilter && fechaLocation > fechaHastaFilter) {
      return false; // No mostrar marcadores posteriores a "Hasta"
    }
  
    
    if (filterGeoData.campana && location.geoCampaign !== filterGeoData.campana) {
      return false; // No mostrar marcadores que no coincidan con la campaña seleccionada
    }
  
    // Filtrar por intención seleccionada
    if (filterGeoData.intencion && location.geoIntencion !== filterGeoData.intencion) {
      return false; // No mostrar marcadores que no coincidan con la intención seleccionada
    }
    return true; // Mostrar marcadores que cumplen con los criterios de fecha
  });

  const newFormattedGeosCampaign = geoLista.geoLista.map((geo) => ({
    id: geo.geoId,
    name: geo.geoCampaign,
  }));
  const newFormattedGeosIntencion = geoLista.geoLista.map((geo) => ({
    id: geo.geoId,
    name: geo.geoIntencion,
  }));
  const uniqueCampaigns = [];
  const campaignSet = new Set();

  newFormattedGeosCampaign.forEach((item) => {
    const { name } = item;
    if (!campaignSet.has(name)) {
      campaignSet.add(name);
      uniqueCampaigns.push(item);
    }
  });

  const uniqueIntencion = [];
  const intencionSet = new Set();

  newFormattedGeosIntencion.forEach((item) => {
    const { name } = item;
    if (!intencionSet.has(name)) {
      intencionSet.add(name);
      uniqueIntencion.push(item);
    }
  });
  console.log(uniqueIntencion)

  const handleCampaingSelect = async (selectedCampaing) => {
    console.log(selectedCampaing);
  };

  const handleIntencionSelect = async (selectedIntencion) => {
    console.log(selectedIntencion);
  };
  return (
    <div className="card pd-20 pd-sm-40">
      <form action="/in/mapa-de-usuarios" method="post">
        <div className="form-layout">
          <div className="row mg-b-25">
            <div className="col-lg-4">
              <div className="form-group">
                <label className="form-control-label">Desde: </label>
                <div className="custom-datepicker">
                        <DatePicker
                          id="dateNumber"
                          selected={filterGeoData.fechaDesde}
                          onChange={(option) => handleSelect(option, "fechaDesde")}
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
            <div className="col-lg-4">
              <div className="form-group">
                <label className="form-control-label">Hasta: </label>
                <div className="custom-datepicker">
                        <DatePicker
                          id="dateNumber"
                          selected={filterGeoData.fechaHasta}
                          onChange={(option) => handleSelect(option, "fechaHasta")}
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
            <div className="col-lg-4">
              <div className="form-group">
                <label className="form-control-label">Campañas: </label>
                {/* Renderiza tu select aquí */}
                <ListDropdown
                  // onSelect={handleCampaingSelect}
                  onSelect={(option) => handleSelect(option, "campana")}
                  placeholder={selectUser}
                  data={uniqueCampaigns}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label className="form-control-label">Intención: </label>
                {/* Renderiza tu select aquí */}
                <ListDropdown
                  
                  onSelect={(option) => handleSelect(option, "intencion")}
                  placeholder={selectUser}
                  data={uniqueIntencion}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <hr />
      <div className="form-layout">
        <div className="row mg-b-25">
          <div className="col-lg-12">
            <div className="form-group">
              <strong>{/* Coloca tu mensaje aquí */}</strong>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-group">
              <img src="https://bi.masmetros.co/img/iconMaps/pin1.png" alt="" />
              Tráfico directo o orgánico
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-group">
              <img src="https://bi.masmetros.co/img/iconMaps/pin2.png" alt="" />
              Ads
            </div>
          </div>
          <div className="col-lg-2">
            <div className="form-group">
              <img src="https://bi.masmetros.co/img/iconMaps/pin3.png" alt="" />
              Instagram
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <LoadScript googleMapsApiKey={"AIzaSyCxr4gnt-NMreSccWLvpM9rQwXasqJzrtA"}> */}

      <GoogleMap
        zoom={10.5}
        center={center}
        mapContainerStyle={{ width: "100%", height: "800px" }}
        options={mapOptions}
      >
        {filteredMarkers.map((location, index) => (
          <Marker
            key={index}
            position={{
              lat: parseFloat(location.geoLatitud),
              lng: parseFloat(location.geoLongitud),
            }}
            icon={
              "https://bi.masmetros.co/img/iconMaps/pin" +
              location.geoPin +
              ".png"
            }
            title={location.geoSource}
          />
        ))}
        <StreetViewPanorama position={center} visible={false} />
      </GoogleMap>

      {/* </LoadScript> */}
    </div>
  );
}

export {GeoLocalization} ;
// export default GeoLocalization ;