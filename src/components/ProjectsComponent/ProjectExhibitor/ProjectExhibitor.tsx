import { Box, type Theme } from "@mui/material";
import type { ProjectEntryType } from "../../../typings/types";
import ProjectEntry from "./ProjectEntry/ProjectEntry";
import React from "react";
import { useProjectEntrys } from "../../../helpers/Projects/useProjectItems";

const renderProjectEntries = (projects: ProjectEntryType[]) =>
  projects.map((project: ProjectEntryType) => (
    <Box
      key={project?._id}
      component="div"
      sx={(theme: Theme) => ({
        backgroundColor: theme?.custom?.backgroundLigth,
        borderRadius: "0.1em",
        height: "auto",
        margin: "2em auto 2em",
        width: "95%",
        boxShadow: `12px 12px 5px ${theme?.custom?.backgroundDark}`,
      })}
    >
      <ProjectEntry projectSelected={project} />
    </Box>
  ));

const ProjectExhibitorcomponent = (): React.ReactNode => {
  const projectsEntries: ProjectEntryType[] = useProjectEntrys();

  return <>{renderProjectEntries(projectsEntries)}</>;
};

export default React.memo(ProjectExhibitorcomponent);
