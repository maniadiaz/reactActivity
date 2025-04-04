import React from "react";
import {Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      {}
      <Box>
        <Typography variant="h2" gutterBottom>
          Contactanos
        </Typography>
        {}
        <Typography variant="body1" sx={{ mb: 3 }}>
          Si tienes alguna pregunta o comentario, no dudes en contactarnos.
        </Typography>
        {}
        <form>
          <Box sx={{ mb: 2 }}>
            <input type="text" placeholder="Nombre" required disabled/>
          </Box>
          <Box sx={{ mb: 2 }}>
            <input type="email" placeholder="Correo electrónico" required disabled/>
          </Box>
          <Box sx={{ mb: 2 }}>
            <textarea placeholder="Mensaje" required disabled></textarea>
          </Box>
          <Button variant="contained" color="primary" onClick={() => navigate("/")}>
            Regresar
          </Button>
          {}
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;