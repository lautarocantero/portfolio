import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import React, { lazy, useCallback, useState } from "react";
import { handleNext, handlePrev } from "../../../../../helpers/Experience/handleExperienceNavigation";
import type { ExperienceItemSwitcherProps } from "../../../../../typings/reactComponents";

const ExperienceItemStackExpositure = lazy(() => import("../../ExperienceItemStackExpositure")); 
const ExperienceItemTaskExpositure = lazy(() => import("../../ExperienceItemTaskExpositure"));

const ExperienceItemSwitcherComponent = ({ stack, tasks }: ExperienceItemSwitcherProps): React.ReactNode => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const components = [
    <ExperienceItemStackExpositure stack={stack} />,
    <ExperienceItemTaskExpositure tasks={tasks} />,
  ];

  const memoizedHandlePrev = useCallback( 
      () => handlePrev({ setCurrentIndex, components }
  )
  ,[setCurrentIndex, components]); 
  
  const memoizedHandleNext = useCallback( 
      () => handleNext({ setCurrentIndex, components })
  ,[setCurrentIndex, components]);

  return (
    <Box
      sx={{
        alignItems: "center",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        margin: "0.5em auto",
        position: "relative",
      }}
    >
      {components[currentIndex]}

      <IconButton
        onClick={memoizedHandlePrev}
        sx={() => ({
          color: "white",
          display: currentIndex === 0 ? "none" : "block",
          left: "-0.3em",
          position: "absolute",
          top: "1.3em",
          transform: "translateY(-50%)",
        })}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={memoizedHandleNext}
        sx={() => ({
          color: "white",
          display: currentIndex === 0 ? "block" : "none",
          position: "absolute",
          right: "-0.3em",
          top: "1.3em",
          transform: "translateY(-50%)",
        })}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(ExperienceItemSwitcherComponent);
