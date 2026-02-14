import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectLongDescriptionClientProps } from "../../../../../typings/reactComponents";
import type { BenefitType } from "../../../../../typings/types";
import ProjectBenefitsComponent from "./ProjectBenefits";
import ProjectNoteComponent from "./ProjectNote";
import ProjectObjectiveComponent from "../ProjectObjective";
import ProjectReasonsComponent from "./ProjectReasons";
import ProjectSummaryComponent from "./ProjectSummary";
import ProjectTitleComponent from "../ProjectTitle";
import React from "react";

const ProjectDescriptionClient = ({ long_description } : ProjectLongDescriptionClientProps ) => {
  const { t } = useTranslation();
  const theme = useTheme();
  
  const 
    { title,note, benefits = [], reasons = [], tasksDescription } : 
    { title: string,note: string, benefits?: BenefitType[] | undefined, reasons?: string[] | undefined, tasksDescription: string } 
    = long_description;

  return (
    <Box
      component={'div'}
      sx={{
        backgroundColor: theme.custom.background,
        color: theme.custom.fontColor,
        minHeight: "100vh",
        px: { xs: 1, md: 6 },
        py: 6,
      }}
    >
      <ProjectTitleComponent title={t(title)} />

      <ProjectObjectiveComponent objective={t(long_description.objective)} />

      <ProjectNoteComponent note={t(note)} />

      <ProjectBenefitsComponent benefits={benefits}/>

      <ProjectReasonsComponent title={title} reasons={reasons}/>

      <ProjectSummaryComponent tasksDescription={tasksDescription}/>
    </Box>
  );
};

export default React.memo(ProjectDescriptionClient);
