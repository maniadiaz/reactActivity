import React from "react";
import {Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
    return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h2" gutterBottom>
        Acerca de Nosotros
      </Typography>
      {}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Creado por : Alexis Diaz
      </Typography>
      {}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Fecha creada : 02 de abril del 2025
      </Typography>
      {}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Universidad : Universidad Autonoma de Sinaloa
      </Typography>
      {}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Materia  : Geografia
      </Typography>
      {}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Profesor  : Ing. Erick Iván Sánchez Valdez
      </Typography>
      {}
      <Button 
          variant="contained" 
          color="primary"
          onClick={() => navigate("/Contact")}
        >
          Contactanos
        </Button>
    </Container>
    );
  }

  export default About;