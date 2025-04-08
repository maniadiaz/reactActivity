import {Box, Typography, Button, Container } from "@mui/material";
import {GoogleMap, LoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


function Mapa() {

    const containerStyle = {
        width: "100%",
        height: "400px",
    }

    const center = {
        lat: 23.269454, 
        lng: -106.389809,
      };
      
    const navigate = useNavigate();

    const [infoOpen, setInfoOpen] = useState(false);

    return (
        <Container maxWidth="md" >
            <Box
            sx={{
                p: 6,
                boxShadow: 3,
                borderRadius: 4,
                backgroundColor: "white",
            }}
            >
            <Typography variant="h4" align="center" gutterBottom>
                Mapa interactivo
            </Typography>
    
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                >
                <Marker
                    position={center}
                    onClick={() => setInfoOpen(true)}
                />
                {infoOpen && (
                    <InfoWindow position={center} onCloseClick={() => setInfoOpen(false)}>
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold" color="black" gutterBottom>
                        Ubicacion de la Universidad Autonoma de Sinaloa
                        </Typography>
                        <Typography variant="body2" color="black" gutterBottom>
                        Marcador de la facultad de Informatica Mazatlán
                        </Typography>
                        <Button
                        variant="contained"
                        size="medium"
                        onClick={() => alert("Aqui esta La Facultad de Informatica Mazatlán")}
                        >
                        Más info
                        </Button>
                    </Box>
                    </InfoWindow>
                )}
                </GoogleMap>
            </LoadScript>
            </Box>
            <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button variant="contained" onClick={() => navigate("/")}>
                    Volver al inicio
                </Button>
            </Box>
        </Container>
        );
}

export default Mapa;