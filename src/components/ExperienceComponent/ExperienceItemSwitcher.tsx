import { Box, IconButton, type Theme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import ExperienceItemStackExpositure from "./ExperienceItemStackExpositure";
import ExperienceItemTaskExpositure from "./ExperienceItemTaskExpositure";
import type { ExperienceItemSwitcherProps } from "../../typings/reactComponents";

const ExperienceItemSwitcherComponent = ({ stack, tasks }: ExperienceItemSwitcherProps): React.ReactNode => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const components = [
    <ExperienceItemStackExpositure stack={stack} />,
    <ExperienceItemTaskExpositure tasks={tasks} />,
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? components.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === components.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        margin: "0.5em auto",
        position: "relative",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {components[currentIndex]}

      <IconButton
        onClick={handlePrev}
        sx={() => ({
          position: "absolute",
          top: "1.3em",
          left: "-0.3em",
          transform: "translateY(-50%)",
          color: "white",
          display: currentIndex === 0 ? "none" : "block",
        })}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={() => ({
          position: "absolute",
          top: "1.3em",
          right: "-0.3em",
          transform: "translateY(-50%)",
          color: "white",
          display: currentIndex === 0 ? "block" : "none",
        })}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(ExperienceItemSwitcherComponent);
