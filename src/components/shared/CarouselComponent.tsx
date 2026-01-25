import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, type Theme } from "@mui/material";
import React, { useCallback, useState } from "react";
import { handleNext, handlePrev } from "../../helpers/shared/handleCarouselNavigation";
import type { CarouselProps } from "../../typings/reactComponents";

const CarouselComponent = ({ gallery_urls } : CarouselProps ): React.ReactNode => {
  const [imageNumber, setImageNumber] = useState<number>(0);

    const memoizedHandlePrev = useCallback( 
        () => handlePrev({ setImageNumber, gallery_urls }
    )
    ,[setImageNumber, gallery_urls]); 
    
    const memoizedHandleNext = useCallback( 
        () => handleNext({ setImageNumber, gallery_urls })
    ,[setImageNumber, gallery_urls]);

  return (
    <Box
      sx={{
        alignItems: "center",
        borderRadius: "10px",
        display: "flex",
        height: "auto",
        justifyContent: "center",
        margin: "0.5em auto 0.1em",
        position: "relative",
        width: "90%",
      }}
    >
      <Box
        component="img"
        src={gallery_urls[imageNumber]}
        sx={{
          borderRadius: "10px",
          height: "13em",
          maxHeight: "13em",
          objectFit: "contain",
          width: "100%",
        }}
      />

      {/* Flecha izquierda */}
      <IconButton
        onClick={memoizedHandlePrev}
        sx={(theme: Theme) => ({
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
          backgroundColor: theme?.palette?.primary.main,
          color: "white",
          left: "0.5em",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        })}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Flecha derecha */}
      <IconButton
        onClick={memoizedHandleNext}
        sx={(theme: Theme) => ({
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
          backgroundColor: theme?.palette?.primary.main,
          color: "white",
          position: "absolute",
          right: "0.5em",
          top: "50%",
          transform: "translateY(-50%)",
        })}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(CarouselComponent);
