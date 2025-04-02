import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
