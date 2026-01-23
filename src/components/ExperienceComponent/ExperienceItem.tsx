import { Box, Grid, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemProps } from "../../typings/reactComponents";
import ExperienceItemButtonComponent from "./ExperienceItemButton";
import ExperienceItemDatacomponent from "./ExperienceItemData";
import ExperienceItemIlustrationComponent from "./ExperienceItemIlustration";
import type { Stack } from "../../typings/types";

const ExperienceItemcomponent = ( {experienceItem} : ExperienceItemProps): React.ReactNode => {
  const { gallery_urls,title,stack,short_description} : 
    { 
      gallery_urls: string [],
      title: string,
      stack: Stack[], 
      short_description: string
    } = experienceItem;

  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          borderRadius: "25px",
          height: { xs: "33em", sm: "32em"},
          margin: "1em auto 0",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        })}
      >
        <ExperienceItemIlustrationComponent gallery_urls={gallery_urls}/>
        <ExperienceItemDatacomponent title={title} stack={stack} short_description={short_description}/>
        <ExperienceItemButtonComponent />
      </Box>
    </Grid>
  );
};

export default React.memo(ExperienceItemcomponent);
