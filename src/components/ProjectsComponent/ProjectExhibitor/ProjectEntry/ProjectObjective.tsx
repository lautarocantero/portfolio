import { Typography, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectObjectiveProps } from "../../../../typings/reactComponents";


const ProjectObjectiveComponent = ({
  objective,
  development
}: ProjectObjectiveProps): React.ReactNode => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="body1"
        sx={(theme: Theme) => ({
          borderLeft: !development ? `0.1em solid ${theme?.palette?.primary?.main}` : 'none',
          borderRight: development ? `0.1em solid ${theme?.palette?.primary?.main}` : 'none',
          borderRadius: "1em",
          boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
          color: theme.custom.fontColor,
          fontSize: theme?.typography?.body1?.fontSize,
          m: { xs: "2em auto", sm: "3em auto" },
          maxWidth: "800px",
          p: 1,
          textAlign: "center",
        })}
      >
        {t(objective)}
      </Typography>
    </>
  );
};

export default ProjectObjectiveComponent;
