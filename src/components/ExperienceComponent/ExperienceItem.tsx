import { Box, Grid, type Theme } from "@mui/material";
import React, { useState } from "react";
import type { ExperienceItemProps } from "../../typings/reactComponents";
import ExperienceItemButtonComponent from "./ExperienceItemButton";
import ExperienceItemDatacomponent from "./ExperienceItemData";
import ExperienceItemIlustrationComponent from "./ExperienceItemIlustration";
import type { Stack, Task } from "../../typings/types";

const ExperienceItemcomponent = ( {experienceItem} : ExperienceItemProps): React.ReactNode => {

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { gallery_urls,title,stack,short_description, long_description, tasks} : 
    { 
      gallery_urls: string [],
      title: string,
      stack: Stack[], 
      tasks: Task[],
      short_description: string,
      long_description: string,
    } = experienceItem;


  return (
    <Grid size={{ xs: 12, sm: isExpanded ? 12 : 6 }}>
      <Box
        className={isExpanded ? "animate__animated animate__fadeInLeft" : ""}
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          borderRadius: "25px",
          height: { xs: "auto"},
          margin: "1em auto 0",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "all 0.3s ease-in-out",
        })}
      >
        <ExperienceItemIlustrationComponent gallery_urls={gallery_urls}/>
        <ExperienceItemDatacomponent 
          isExpanded={isExpanded} 
          title={title} 
          stack={stack} 
          short_description={short_description} 
          long_description={long_description} 
          tasks={tasks} 
        />
        <ExperienceItemButtonComponent isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
      </Box>
    </Grid>
  );
};

export default React.memo(ExperienceItemcomponent);
