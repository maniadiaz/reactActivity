import { Box, Typography, Button, Container } from "@mui/material";
import {GoogleMap,Marker,InfoWindow,DirectionsService,DirectionsRenderer,useJsApiLoader
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const origen = { lat: 23.2314459, lng: -106.4265313 };
const destino = { lat: 23.1982787, lng: -106.4236722 };
const libraries = ['places', 'geometry', 'drawing'];

const MapaConRuta = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const containerStyle = {
    width: "50vw",
    height: "600px",
  };

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    } else {
      console.error('Error al obtener la ruta', response);
    }
  };

  return isLoaded ? (
    <Container maxWidth={false}>
      <Box
        sx={{
          width: "100%",
          p: 6,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Ruta desde la Facultad a otro punto
        </Typography>

        <GoogleMap
          onLoad={(mapInstance) => setMap(mapInstance)}
          mapContainerStyle={containerStyle}
          center={origen}
          zoom={13}
        >
          <DirectionsService
            options={{
              destination: destino,
              origin: origen,
              travelMode: 'DRIVING',
            }}
            callback={directionsCallback}
          />

          {directions && (
            <DirectionsRenderer options={{ directions }} />
          )}

          <Marker position={origen} label="A" />
          <Marker position={destino} label="B" />
        </GoogleMap>
      </Box>
    </Container>
  ) : (
    <div>Cargando mapa...</div>
  );
};

export default MapaConRuta;
