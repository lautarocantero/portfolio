import { Box, Typography, type Theme } from "@mui/material";
import AboutLinksButtonsExhibitorComponent from "./AboutLinksButtontsExhibitor";
import { useTranslation } from "react-i18next";

const AboutDescriptionComponent = (): React.ReactNode => {
  const { t } = useTranslation();

  return (
    <Box sx={{ margin: "1em" }}>
      <Typography
        sx={(theme: Theme) => ({
          color: theme?.custom?.fontColor,
          fontSize: theme?.typography?.body2.fontSize,
          mt: "2em",
          textAlign: "center",
        })}
      >
        {t("about.greeting")}
      </Typography>

      <Typography
        sx={(theme: Theme) => ({
          color: theme?.palette?.primary?.main,
          fontSize: theme?.typography?.h4.fontSize,
          textAlign: "center",
        })}
      >
        {t("about.name")}
      </Typography>

      <Typography
        sx={(theme: Theme) => ({
          color: theme?.custom?.fontColor,
          fontSize: theme?.typography?.body2.fontSize,
          textAlign: "center",
          fontStyle: "italic",
        })}
      >
        {t("about.role")}
      </Typography>

      <AboutLinksButtonsExhibitorComponent />

      <Typography
        sx={(theme: Theme) => ({
          color: theme?.custom?.fontColor,
          fontSize: theme?.typography?.body2.fontSize,
          mt: "3em",
          textAlign: "center",
        })}
      >
        {t("about.experience")} {t("about.focus")}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={(theme: Theme) => ({
          color: theme.palette.primary.main,
          fontWeight: "bold",
          textAlign: "center",
          fontSize: theme?.typography?.body2.fontSize,
          mt: "2em",
        })}
      >
        {t("about.contact")}
      </Typography>
    </Box>
  );
};

export default AboutDescriptionComponent;
