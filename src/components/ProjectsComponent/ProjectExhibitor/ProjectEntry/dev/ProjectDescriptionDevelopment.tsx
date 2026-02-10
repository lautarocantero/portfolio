import { Box, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import type { ProjectLongDescriptionDevProps } from "../../../../../typings/reactComponents";
import ProjectTitleComponent from "../ProjectTitle";
import ProjectObjectiveComponent from "../ProjectObjective";
import ProjectRoadMap from "./ProjectRoadMap";


const ProjectDescriptionDevelopment = ({ long_description }: ProjectLongDescriptionDevProps ) : React.ReactNode => {
  const theme = useTheme();
  const { t } = useTranslation();

  
  return (
    <Box
      sx={{
        backgroundColor: theme.custom.background,
        color: theme.custom.fontColor,
        minHeight: "100vh",
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      <ProjectTitleComponent title={`${t(long_description.title)} – ${t("projects.kiosco.long.historyDev")} 🛠️`} />


      <ProjectObjectiveComponent objective={t(long_description.objectiveDev)} development/>

      <ProjectRoadMap long_description={long_description}/>

    </Box>
  );
};

export default ProjectDescriptionDevelopment;
