import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF, MarkerClustererF } from "@react-google-maps/api";
import { Box, Typography, Button, Container } from "@mui/material";

const conteinerStyle = {
    width: "100%",
    height: "600px"
}

const center = {
    lat: 23.2494,
    lng: -106.4111
}

const generateMarkers = () => {
    const markers = [];
    for (let i = 0; i < 100; i++) {
        markers.push({
            lat: center.lat + (Math.random() - 0.5) * 0.1,
            lng: center.lng + (Math.random() - 0.5) * 0.1,
        });
    }
    return markers;
};

const MapaConClustering = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const markers = generateMarkers();

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
                    mapContainerStyle={conteinerStyle}
                    center={center}
                    zoom={12}
                    >
                    <MarkerClustererF>
                        {(clusterer) =>
                            markers.map((marker, index) => (
                                <MarkerF key={index} position={marker} clusterer={clusterer} />
                            ))
                        }
                    </MarkerClustererF>
                </GoogleMap>
            </Box>
        </Container>
    ) : (<p>Cargando mapa</p>);
}

export default MapaConClustering;


