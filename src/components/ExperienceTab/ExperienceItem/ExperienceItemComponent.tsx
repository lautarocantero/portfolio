import { Box, Grid, type Theme } from "@mui/material";
import React, { useState } from "react";
import type { ExperienceItemProps } from "../../../typings/reactComponents";
import ExperienceButtonComponent from "./ExperienceItemButton";
import ExperienceDetailcomponent from "./ExperienceDetails/ExperienceDetailComponent";
import CarouselComponent from "../../shared/CarouselComponent";

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
          display: "flex",
          flexDirection: "column",
          height: { xs: "auto"},
          minHeight: { sm: isExpanded ? "60em" : "47em", md: isExpanded ? "70em" : "37em" },
          margin: "1em auto 0",
          position: "relative",
          transition: "all 0.3s ease-in-out",
          width: "95%",
        })}
      >
        <CarouselComponent gallery_urls={gallery_urls} />
        <ExperienceDetailcomponent 
          isExpanded={isExpanded} experienceItem={experienceItem}
        />
        <ExperienceButtonComponent isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
      </Box>
    </Grid>
  );
};

export default React.memo(ExperienceItemcomponent);
