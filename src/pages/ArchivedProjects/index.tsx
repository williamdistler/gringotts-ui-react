import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import Header from "../../components/Header";
import api from "../../services/api";

interface IProject {
  projectid: number;
  name: string;
  archived: boolean;
  urlImg: string;
}

const ArchivedProjects: React.FC = () => {
  const [aProjects, setAProjects] = useState<IProject[]>([]);

  const handleGetArchivedProjects = async () => {
    const response = await api.get("/projects?archived=true");
    setAProjects(response.data.value);
  };

  const handleDeleteProjectFromAList = (projectid: number) => {
    const projectsWithoutDeletedProject = aProjects.filter(
      (project) => project.projectid != projectid
    );
    setAProjects(projectsWithoutDeletedProject);
  };

  const handleDuplicateProjectFromAList = () => {
    handleGetArchivedProjects();
  };

  useEffect(() => {
    handleGetArchivedProjects();
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
      <Header title="Arquivados" />
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
          {aProjects.map((project) => {
            return (
              <ProjectCard
                key={project.projectid}
                project={project}
                onDelete={handleDeleteProjectFromAList}
                onDuplicate={handleDuplicateProjectFromAList}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ArchivedProjects;
