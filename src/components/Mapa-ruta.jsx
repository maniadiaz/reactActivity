import {Box, Typography, Button, Container } from "@mui/material";
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const origen = { lat: 19.4326, lng: -99.1332 };
const destino = { lat: 19.7036, lng: -99.1013 };

const MapaConRuta = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    });

    const [directions, setDirections] = useState(null); 
    const containerStyle = {
        width: "50vw",
        height: "600px",
    }

    const directionsCallback = (response) => {
        if (response !== null && response.status === 'OK') {
            setDirections(response);
        } else {
            console.error('Error al obtener la ruta', response);
        }
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={origen}
            zoom={10}
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
                <DirectionsRenderer options={{
                    directions: directions
                }} />
            )}

            <Marker position={origen} label="A" />
            <Marker position={destino} label="B" />

        </GoogleMap>
    ) : (
        <div>Cargando mapa...</div>
    )
};

export default MapaConRuta;
