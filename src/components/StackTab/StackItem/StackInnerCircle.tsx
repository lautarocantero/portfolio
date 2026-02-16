import { Box, type Theme } from "@mui/material";
import type { StackInnerCircleProps } from "../../../typings/reactComponents";

const StackInnerCircleComponent = ({iconGif,icon,text,}: StackInnerCircleProps): React.ReactNode => {
  return (
    <Box
      component="div"
      sx={() => ({
        alignItems: "center",
        borderRadius: "100%",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
        boxSizing: "border-box",
        color: "white",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
        height: "250px",
        justifyContent: "center",
        margin: 0,
        overflow: "hidden",
        padding: 0,
        position: "relative",
        width: "100%",
      })}
    >
      <Box
        component="img"
        src={iconGif !== "" ? iconGif : icon}
        alt={text}
        draggable={false}
        sx={(theme: Theme) => ({
          filter: `drop-shadow(0 2px 8px ${theme?.custom?.backgroundDark})`,
          height: "80%",
          objectFit: "contain",
          width: "80%",
        })}
      />
      </Box>
  );
};

export default StackInnerCircleComponent;
