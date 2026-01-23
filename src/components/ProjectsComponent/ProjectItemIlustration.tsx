import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import type { ProjectItemIlustrationProps } from "../../typings/reactComponents";

const ProjectItemIlustrationComponent = ({gallery_urls}: ProjectItemIlustrationProps ):React.ReactNode => {

    const [imageNumber, setImageNumber] = useState<number>(1);

    const handlePrev = () => {
      setImageNumber((prev) => (prev === 0 ? gallery_urls.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setImageNumber((prev) => (prev === gallery_urls.length - 1 ? 0 : prev + 1));
    };


    return(
        <Box
          sx={{
            width: "90%",
            height: "15em",
            margin: "0.1em auto",
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <Box
            component={"img"}
            src={gallery_urls[imageNumber]}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />

          {/* Flecha izquierda */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0.5em",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.4)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Flecha derecha */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0.5em",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.4)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
    )
};
        
export default React.memo(ProjectItemIlustrationComponent);