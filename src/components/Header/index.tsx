import { AppBar, Fab, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "../../hooks/useRouter";
import logo from "../../favicon.png";

interface HeaderProps {
  title?: string;
}

interface IProject {
  projectid: number;
  name: string;
  archived: boolean;
}

interface IProjectsList {
  items: IProject[];
}

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();

  return (
    <Box id="app-bar-box">
      <AppBar
        id="app-bar-box"
        position="static"
        sx={{
          backgroundColor: "#000000",
        }}
      >
        <Toolbar
          id="app-tool-bar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Fab
              size="small"
              color="primary"
              onClick={() => router.navigate("/")}
              sx={{ marginRight: "20px" }}
            >
              <img src={logo} alt="Logo" width="40px" />
            </Fab>
            <Typography variant="h4" color="inherit" component="div">
              {props.title}
            </Typography>
          </Box>
          <Box>{props.children}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
