import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Collapse, IconButton } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import useHover from "../../hooks/useHover";
import api from "../../services/api";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useRouter } from "../../hooks/useRouter";

interface IProject {
  projectid: number;
  name: string;
  archived: boolean;
  urlImg: string;
}

interface ProjectCardProps {
  project: IProject;
  onDelete: (projectid: number) => void;
  onDuplicate: (projectid: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("test");
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const handleArchiveProject = async () => {
    try {
      await api.put(`/projects/${props.project.projectid}/archive`);
      props.onDelete(props.project.projectid);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnarchiveProject = async () => {
    try {
      await api.put(`/projects/${props.project.projectid}/unarchive`);
      props.onDelete(props.project.projectid);
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = async () => {
    try {
      await api.delete("/projects/" + props.project.projectid);
      props.onDelete(props.project.projectid);
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  };

  const handleDeleteProject = () => {
    handleClickOpen();
  };

  const handleDuplicateProject = async () => {
    try {
      await api.post("/projects/" + props.project.projectid + "/duplicate");
      props.onDuplicate(props.project.projectid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box sx={{ height: "250px" }}>
        <Card
          ref={hoverRef}
          sx={{
            marginRight: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.project.urlImg}
              alt={props.project.name}
              onClick={() => router.navigate("/tables")}
            />
            <CardContent sx={{ padding: "7px 16px" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                sx={{ margin: "0px" }}
              >
                {props.project.name}
              </Typography>
            </CardContent>
            <Collapse
              in={isHovered}
              collapsedSize="40px"
              timeout={200}
              unmountOnExit
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  marginBottom: "7px",
                }}
              >
                {props.project.archived == false ? (
                  <IconButton>
                    <ImageIcon sx={{ color: "white" }} />
                  </IconButton>
                ) : null}
                {props.project.archived == false ? (
                  <IconButton onClick={handleDuplicateProject}>
                    <ContentCopyIcon sx={{ color: "white" }} />
                  </IconButton>
                ) : null}
                {props.project.archived == false ? (
                  <IconButton onClick={handleArchiveProject}>
                    <ArchiveIcon sx={{ color: "white" }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleUnarchiveProject}>
                    <UnarchiveIcon sx={{ color: "white" }} />
                  </IconButton>
                )}
                <IconButton onClick={handleDeleteProject}>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Box>
            </Collapse>
          </CardActionArea>
        </Card>
      </Box>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Excluir projeto"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tem certeza que deseja excluir permanentemente este projeto, todas
              suas tabelas e relacionamentos?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseDelete}
              autoFocus
              variant="contained"
              color="error"
            >
              Sim
            </Button>
            <Button onClick={handleClose}>Não</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default ProjectCard;
