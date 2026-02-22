import { Box, type Theme } from "@mui/material";
import type { PortfolioLayoutInterface } from "../typings/reactComponents";


const PortfolioLayout = ( {children} : PortfolioLayoutInterface ) => {
    return (
      <Box
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.background,
          height: "100%",
          width: "100vw",
          position: "relative",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: '120em',
            left: "50%",
            width: "200vw",
            height: "20em",
            backgroundColor: theme?.palette?.primary?.main,
            transform: "translateX(-50%) rotate(20deg)",
            transformOrigin: "center",
          },
        })}
      >
        {children}
      </Box>
    )
};

export default PortfolioLayout;