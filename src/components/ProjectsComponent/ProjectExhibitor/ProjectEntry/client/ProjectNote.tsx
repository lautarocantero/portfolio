import { Typography, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectNoteProps } from "../../../../../typings/reactComponents";


const ProjectNoteComponent = ({
  note,
}: ProjectNoteProps): React.ReactNode => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        sx={(theme: Theme) => ({
          color: theme.custom.fontColorTransparent,
          fontSize: theme?.typography?.body2?.fontSize,
          fontStyle: "italic",
          mb: 6,
          textAlign: "center",
        })}
      >
        {t(note)}
      </Typography>
    </>
  );
};

export default ProjectNoteComponent;
