import { Box, Tooltip, type Theme } from "@mui/material";
import React, { useContext } from "react";
import type { StackSkillProps } from "../../../typings/reactComponents";
import { StackContext } from "../context/StackContext";
import StackContentComponent from "./StackContent";
import MorphingBlobComponent from "./StackMorphingBlob";
import { SnackBarContext } from "../../shared/snackbar/SnackBarContext";
import { useTranslation } from "react-i18next";
import { AlertColor } from "../../../typings/types/enums";

const StackSkillComponent = ({ stack }: StackSkillProps): React.ReactNode => {
  const { t } = useTranslation();
  const { showSnackBar } = useContext(SnackBarContext)!;
  const { text, icon, iconGif }: { text: string; icon: string; iconGif: string } = stack;
  const { filteredStacks, setFilteredStacks } = useContext(StackContext)!;

  const handleClick = () => {
    setFilteredStacks((prev: string[]) => {
      const newStacks = prev.includes(stack.text)
        ? prev.filter((s) => s !== stack.text)
        : [...prev, stack.text];

      const message =
        newStacks.length > 0
          ? t("skills.message.filtered", { stacks: newStacks.join(", ") })
          : t("skills.message.noFilters");

      showSnackBar(message, AlertColor.Success);

      return newStacks;
    });
  };

  return (
    <Tooltip title={text}>
      <Box
        component="div"
        onClick={handleClick}
        sx={(theme: Theme) => ({
          alignItems: "center",
          aspectRatio: "1",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: "2em",
          position: "relative",
          transition: "transform 0.3s ease",
          width: "100%",
          "&:hover": {
            transform: "scale(1.05)",
            "& .blob-shape": {
              animationPlayState: "paused",
              boxShadow: `0 25px 80px ${theme?.palette?.primary?.main}CC`,
            },
          },
        })}
      >
        {/* Morphing Blob Background */}
        <MorphingBlobComponent isSelected={filteredStacks?.includes(text)} />
        {/* Content */}
        <StackContentComponent icon={icon} iconGif={iconGif} text={text} />
      </Box>
    </Tooltip>
  );
};

export default React.memo(StackSkillComponent);
