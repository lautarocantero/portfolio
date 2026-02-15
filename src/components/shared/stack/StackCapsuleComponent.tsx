import { Box, Typography, type Theme } from "@mui/material";
import type { StackCapsuleProps } from "../../../typings/reactComponents";
import { useContext } from "react";
import { StackContext } from "../../StackTab/context/StackContext";

const StackCapsuleComponent = ({ stack, flat }: StackCapsuleProps): React.ReactNode => {
  const { filteredStacks } = useContext(StackContext)!;
  const { text, icon }: { text: string; icon: string } = stack;

  const isSelected = filteredStacks.includes(text);

  return (
    <Box
      sx={(theme: Theme) => ({
        width: "fit-content",
        backgroundColor: isSelected
          ? theme.palette.primary.main
          : theme?.custom?.backgroundLigth,
        borderRadius: flat ? "none" : "10em",
        display: "flex",
        flexDirection: "row",
        gap: { xs: "0.2em" },
        maxHeight: "1.5em",
        padding: "0.2em 0.8em",
        transition: "background-color 0.3s ease-in-out",
      })}
    >
      <Box
        alt={text}
        component="img"
        src={icon}
        sx={{
          margin: "auto",
          maxHeight: "1em",
          width: "1.2em",
        }}
      />
      <Typography
        sx={(theme: Theme) => ({
          alignContent: "center",
          color: theme?.custom?.fontColor,
          fontSize: theme?.typography?.body2?.fontSize,
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default StackCapsuleComponent;
