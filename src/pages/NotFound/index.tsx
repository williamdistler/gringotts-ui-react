import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const NotFound: React.FC = () => (
  <Box
    id="app-page"
    sx={{
      height: "100%",
      maxHeight: "100%",
      width: "100%",
    }}
  >
    <Header title="" />
    <Box
      id="page-container"
      sx={{
        minHeight: "100%",
        width: "100%",
      }}
      maxWidth="xl"
    >
      <Box
        id="main-content-container"
        component="main"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          padding: "25px",
        }}
      >
        <Typography>
          Sinto muito. Não encontramos o que você procurava.
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default NotFound;
