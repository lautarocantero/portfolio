import { Box, Grid, Typography, type Theme } from "@mui/material";
import React, { useState } from "react";

const EmptyProjectItemcomponent = (): React.ReactNode => {

  const [isExpanded] = useState<boolean>(false);

  return (
    <Grid size={{ xs: 12, sm: isExpanded ? 12 : 6 }}>
      <Box
        className={isExpanded ? "animate__animated animate__fadeInLeft" : ""}
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column",
          height: { xs: "auto"},
          minHeight: { xs: "100em" },
          margin: "1em auto 0",
          boxShadow: `12px 12px 5px ${theme?.custom?.backgroundDark}`,
          position: "relative",
          transition: "all 0.3s ease-in-out",
          width: "95%",
        })}
      >
        <Typography
            sx={(theme: Theme) => ({
                color: theme?.custom?.white,
                textAlign: 'center',
                marginTop: { xs: '2em', sm: '0'},
                fontSize: { 
                    xs: theme?.typography?.body2?.fontSize, 
                    sm: theme?.typography?.h6?.fontSize
                },
            })}
        >
            Tu selección no coincide con ningún proyecto. Probá con otro stack!
        </Typography>
        <Box
            component={"img"}
            src="/images/experience/shared/empty-folder.png"
            sx={{
                width: { xs: '50%', sm: '20%'},
                rotate: '15deg',
                filter: 'invert(1) brightness(2) grayscale(1)',
            }}
        />
      </Box>
    </Grid>
  );
};

export default React.memo(EmptyProjectItemcomponent);
