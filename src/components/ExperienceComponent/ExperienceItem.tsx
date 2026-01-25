import { Box, Grid, type Theme } from "@mui/material";
import React, { useState } from "react";
import type { ExperienceItemProps } from "../../typings/reactComponents";
import ExperienceItemButtonComponent from "./ExperienceItemButton";
import ExperienceItemDatacomponent from "./ExperienceItemData";
import ExperienceItemIlustrationComponent from "./ExperienceItemIlustration";

const ExperienceItemcomponent = ( {experienceItem} : ExperienceItemProps): React.ReactNode => {

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { gallery_urls} : { gallery_urls: string [] } = experienceItem;


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
          isExpanded={isExpanded} experienceItem={experienceItem}
        />
        <ExperienceItemButtonComponent isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
      </Box>
    </Grid>
  );
};

export default React.memo(ExperienceItemcomponent);
