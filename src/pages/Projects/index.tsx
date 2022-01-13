import { Fab, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import api from "../../services/api";
import InboxIcon from "@mui/icons-material/Inbox";
import { useRouter } from "../../hooks/useRouter";

interface IProject {
  projectid: number;
  name: string;
  archived: boolean;
  urlImg: string;
}

const Projects: React.FC = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<IProject[]>([]);

  const handleGetProjects = async () => {
    const response = await api.get("/projects");
    setProjects(response.data.value);
  };

  const handleAddProject = async () => {
    const response = await api.post("/projects");
    const array = [...projects, response.data.value];
    setProjects(array);
  };

  const handleDeleteProjectFromList = (projectid: number) => {
    const projectsWithoutDeletedProject = projects.filter(
      (project) => project.projectid != projectid
    );
    setProjects(projectsWithoutDeletedProject);
  };

  const handleDuplicateProjectFromList = () => {
    handleGetProjects();
  };

  useEffect(() => {
    handleGetProjects();
  }, []);

  return (
    <Box
      id="app-page"
      sx={{
        height: "100%",
        maxHeight: "100%",
        width: "100%",
      }}
    >
      <Header title="Projetos">
        <Fab
          size="small"
          color="primary"
          onClick={() => router.navigate("/archived")}
          sx={{ margin: "10px" }}
        >
          <InboxIcon />
        </Fab>
        <Fab
          size="small"
          color="primary"
          onClick={handleAddProject}
          sx={{ margin: "10px" }}
        >
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
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            padding: "25px",
          }}
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.projectid}
                project={project}
                onDelete={handleDeleteProjectFromList}
                onDuplicate={handleDuplicateProjectFromList}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
