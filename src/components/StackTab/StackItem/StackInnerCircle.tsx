import { Box, type Theme } from "@mui/material";

const StackInnerCircleComponent = ({
  iconGif,
  icon,
  text,
}: {
  iconGif: string;
  icon: string;
  text: string;
}): React.ReactNode => {
  return (
    <Box
      component="div"
      sx={(theme: Theme) => ({
        fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
        color: "white",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        position: "relative",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        width: "100%",
        borderRadius: "100%",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
      })}
    >
      <Box
        component="img"
        src={iconGif !== "" ? iconGif : icon}
        alt={text}
        draggable={false}
        sx={{
          width: "80%",
          height: "80%",
          objectFit: "contain",
          filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))",
        }}
      />
      </Box>
  );
};

export default StackInnerCircleComponent;
