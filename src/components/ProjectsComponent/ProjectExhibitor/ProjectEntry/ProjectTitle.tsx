import { Typography, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectTitleProps } from "../../../../typings/reactComponents";


const ProjectTitleComponent = ({ title }: ProjectTitleProps): React.ReactNode => {
  const { t } = useTranslation();

  return (
    <Typography
      variant="h2"
      gutterBottom
      sx={(theme: Theme) => ({
        alignItems: "center",
        display: "flex",
        fontSize: {
          xs: theme?.typography?.h3?.fontSize,
          md: theme?.typography?.h2?.fontSize,
        },
        fontWeight: 700,
        justifyContent: "center",
        textAlign: "center",
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
      })}
    >
      {t(title)}
    </Typography>
  );
};

export default ProjectTitleComponent;
