import React, { useState, useRef, useEffect } from "react";
import {GoogleMap,useLoadScript ,DirectionsRenderer,Autocomplete} from "@react-google-maps/api";
import {Box,Typography,Container,Button,ButtonGroup,TextField,} from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 23.218, 
  lng: -106.423,
};

const libraries = ["places"];

const MapRuta = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [directions, setDirections] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");

  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const [originInput, setOriginInput] = useState("Facultad de Informática, UAS");
  const [destinationInput, setDestinationInput] = useState("Centro de Mazatlán");


  useEffect(() => {
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: { lat: 23.2314459, lng: -106.4265313 }, 
          destination: { lat: 23.2051184, lng: -106.4199755 },
          travelMode: window.google.maps.TravelMode[travelMode],
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
          } else {
            console.error("Error al calcular ruta por defecto:", result);
          }
        }
      );
    }
  }, [isLoaded, travelMode]);

  const calcularRuta = () => {
    if (!originRef.current || !destinationRef.current) return;

    const origen = originRef.current.getPlace();
    const destino = destinationRef.current.getPlace();

    if (!origen || !destino) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen.formatted_address,
        destination: destino.formatted_address,
        travelMode: window.google.maps.TravelMode[travelMode],
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error al calcular la ruta:", result);
        }
      }
    );
  };

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          width: "100%",
          p: 4,
          mb: 4,
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Ruta desde la Facultad de Informática al Centro
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
          <Autocomplete onLoad={(ref) => (originRef.current = ref)}>
            <TextField
              label="Origen"
              fullWidth
              value={originInput}
              onChange={(e) => setOriginInput(e.target.value)}
            />
          </Autocomplete>
          <Autocomplete onLoad={(ref) => (destinationRef.current = ref)}>
            <TextField
              label="Destino"
              fullWidth
              value={destinationInput}
              onChange={(e) => setDestinationInput(e.target.value)}
            />
          </Autocomplete>
          <Button variant="contained" onClick={calcularRuta}>
            Calcular Ruta
          </Button>
        </Box>

        <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
          <Button
            onClick={() => setTravelMode("DRIVING")}
            variant={travelMode === "DRIVING" ? "contained" : "outlined"}
          >
            Coche
          </Button>
          <Button
            onClick={() => setTravelMode("WALKING")}
            variant={travelMode === "WALKING" ? "contained" : "outlined"}
          >
            Caminando
          </Button>
          <Button
            onClick={() => setTravelMode("BICYCLING")}
            variant={travelMode === "BICYCLING" ? "contained" : "outlined"}
          >
            Bicicleta
          </Button>
        </ButtonGroup>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </Box>
    </Container>
  );
};

export default MapRuta;