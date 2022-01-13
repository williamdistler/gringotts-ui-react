import React, { useEffect, useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import Header from "../../components/Header";
import { Box, Button, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Tables: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      id="app-page"
      sx={{
        height: "100%",
        maxHeight: "100%",
        width: "100%",
      }}
    >
      <Header title="Tabelas">
        <Fab size="small" color="primary" sx={{ margin: "10px" }}>
          <AddIcon />
        </Fab>
      </Header>
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
            height: "80vh",
            overflowY: "scroll",
            width: "96vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "25px",
            border: "inset 5px",
            borderRadius: "1em",
          }}
        >
          <Typography variant="h4">mc_assetmaster</Typography>
          <Typography sx={{ margin: "10px", width: "1000px" }}>
            Harry Potter é um garoto órfão que vive infeliz com seus tios, os
            Dursleys. Ele recebe uma carta contendo um convite para ingressar em
            Hogwarts, uma famosa escola especializada em formar jovens bruxos.
            Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo
            recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para
            levá-lo até a escola. Harry adentra um mundo mágico que jamais
            imaginara, vivendo diversas aventuras com seus novos amigos, Rony
            Weasley e Hermione Granger.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Colunas</Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "red",
              }}
            >
              coluna 1
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: "50px", marginBottom: "10px" }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{ borderRadius: "50px", marginBottom: "10px" }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{ borderRadius: "50px", marginBottom: "10px" }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "green",
              }}
            >
              coluna 1
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "green",
              }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "green",
              }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "green",
              }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "yellow",
              }}
            >
              coluna 1
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "yellow",
              }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "yellow",
              }}
            >
              coluna 1
            </Button>{" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                marginBottom: "10px",
                backgroundColor: "yellow",
              }}
            >
              coluna 1
            </Button>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tables;
