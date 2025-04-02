import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate = useNavigate(); 

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      {}
      <Typography variant="h3" gutterBottom>
        Bienvenido a mi Proyecto
      </Typography>

      {}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Explora nuestras secciones y descubre todo lo que tenemos para ofrecerte.
      </Typography>

      {}
      <Box component="img" 
        src="https://i.pinimg.com/736x/39/97/eb/3997eb06057902de14a542b15ffc37e4.jpg" 
        alt="Bienvenida"
        sx={{ width: "100%", maxHeight: "300px", mb: 3, borderRadius: 2 }}
      />

      {}
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate("/about")}
      >
        Conócenos
      </Button>
    </Container>
  );
}

export default Home;