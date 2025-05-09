import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h6" >
          Mi Proyecto en React
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Sobre Nosotros
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contacto
        </Button>
        <Button color="inherit" component={Link} to="/mapa">
          Mapa
        </Button>
        <Button color="inherit" component={Link} to="/mapaRuta">
          UAS Hasta Plaza Machado
        </Button>
        <Button color="inherit" component={Link} to="/mapaConClustering">
          Mapa con Marcadores
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
