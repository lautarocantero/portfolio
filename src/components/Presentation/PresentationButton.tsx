import { alpha, Box, Button, Typography, type Theme } from "@mui/material";
import type { PresentationButtonProps } from "../../typings/reactComponents";


const PresentationButtoncomponent = ({ text, icon, onClick: handleClick }: PresentationButtonProps): React.ReactNode => {

  return (
    <Button
      onClick={handleClick}
      sx={(theme: Theme) => ({
        alignItems: "center",
        background: { xs: theme?.palette?.primary?.main },
        borderRadius: "0.1em",
        boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(100px)",
        border: "1px solid rgba(119, 60, 255, 0.3)",
        display: "flex",
        gap: "0.8em",
        height: { xs: "4em" },
        justifyContent: "center",
        margin: "1.1em auto",
        padding: "0.1em",
        width: { xs: "14em" },
        "&:hover": {
          cursor: "pointer",
          background: alpha(theme.palette.primary.main, 0.90),
        },
      })}


    >
      <Box
        alt={text}
        component="img"
        src={icon}
        sx={{
          width: "1.5em",
          height: "auto",
        }}
      />
      <Typography
        sx={(theme: Theme) => ({
          color: theme?.custom?.white,
          fontSize: theme?.typography?.body2?.fontSize,
          fontWeight: 'bold'
        })}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default PresentationButtoncomponent;
