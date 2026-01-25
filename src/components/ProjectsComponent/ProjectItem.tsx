import { Box, Grid, type Theme } from "@mui/material";
import React from "react";
import type { ProjectItemProps } from "../../typings/reactComponents";
import ProjectItemButtonComponent from "./ProjectItemButton";
import ProjectItemIlustration from "./ProjectItemIlustration";
import ProjectItemData from "./ProjectItemData";
import type { StackInterface } from "../../typings/types";

const ProjectItemcomponent = ( {projectItem} : ProjectItemProps): React.ReactNode => {
  const { gallery_urls,title,stack,short_description} : 
  { 
    gallery_urls: string [],
    title: string,
    stack: StackInterface[], 
    short_description: string
  } = projectItem;

  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          borderRadius: "25px",
          height: "30em",
          margin: "1em auto 1em",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        })}
      >
        <ProjectItemIlustration gallery_urls={gallery_urls}/>
        <ProjectItemData title={title} stack={stack} short_description={short_description}/>
        <ProjectItemButtonComponent />
      </Box>
    </Grid>
  );
};

export default React.memo(ProjectItemcomponent);
