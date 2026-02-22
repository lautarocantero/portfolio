import { Box, Typography, type Theme } from "@mui/material";
import AboutLinksButtonsExhibitorComponent from "./AboutLinksButtontsExhibitor";
import { useTranslation } from "react-i18next";

const AboutDescriptionComponent = (): React.ReactNode => {
  const { t } = useTranslation();

  return (
    <Box 
      sx={(theme: Theme) => ({ 
        minWidth: '33em',
        maxWidth: '33em',
        boxShadow: `5px 5px 10px ${theme?.custom?.backgroundDark}`,
        p: 1,
      })}
    >

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
          minHeight: '5em',
          borderBottom: `0.1em dotted ${theme?.custom?.fontColor}`,
        })}
      >
        {t("about.role")}
      </Typography>

      <Typography
        sx={(theme: Theme) => ({
          color: theme?.custom?.fontColor,
          fontSize: theme?.typography?.body2.fontSize,
          mt: "2em",
          textAlign: "center",
        })}
      >
        {t("about.experience")}
      </Typography>

      <Typography
        sx={(theme: Theme) => ({
          color: theme?.custom?.fontColor,
          fontSize: theme?.typography?.body2.fontSize,
          mt: "2em",
          textAlign: "center",
        })}
      >
        {t("about.focus")}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={(theme: Theme) => ({
          color: theme?.custom?.fontColor,
          fontWeight: "bold",
          textAlign: "center",
          fontSize: theme?.typography?.body2.fontSize,
          mt: "2em",
        })}
      >
        {t("about.contact")}
      </Typography>

      <AboutLinksButtonsExhibitorComponent />

    </Box>
  );
};

export default AboutDescriptionComponent;
