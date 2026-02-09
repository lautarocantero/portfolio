import { Box, Typography, useTheme, type Theme } from "@mui/material";
import type { LongDescriptionInterface } from "../../../../../typings/types";
import ProjectSelectedBenefitCard from "../ProjectSelectedBenefitCard";
import { useTranslation } from "react-i18next";

interface ProjectLongDescriptionClientProps {
  long_description: LongDescriptionInterface;
}

const ProjectLongDescriptionClientComponent = ({ long_description } : ProjectLongDescriptionClientProps ) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const { title,note, benefits = [], reasons = [] } = long_description;

  return (
    <Box
      sx={{
        backgroundColor: theme.custom.background,
        color: theme.custom.fontColor,
        minHeight: "100vh",
        py: 6,
        px: { xs: 1, md: 6 },
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={(theme: Theme) => ({ 
          fontSize: { xs: theme?.typography?.h3?.fontSize, md: theme?.typography?.h2?.fontSize},
          textAlign: "center", 
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'underline',
          textDecorationColor: theme.palette.primary.main,
        })}
      >
        {t(title)}🏪
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          m: { xs: "2em auto", sm: "3em auto"},
          color: theme.custom.fontColor,
          p: 1,
          borderRadius: '1em',
          fontSize: theme?.typography?.body1?.fontSize,
          borderLeft: `0.1em solid ${theme?.palette?.primary?.main}`,
          boxShadow: "15px 10px 10px rgba(0, 0, 0, 0.36)",
        }}
      >
        {t(long_description.objective)}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme.custom.fontColorTransparent,
          fontStyle: 'italic',
          mb: 6,
          fontSize: theme?.typography?.body2?.fontSize,
        }}
      >
        {t(note)}
      </Typography>

      {/* Benefits */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {benefits.map((benefit, index) => (
          <ProjectSelectedBenefitCard key={index} benefit={benefit} />
        ))}
      </Box>

      {/* Reasons */}
      <Box sx={{ mt: 12 }}>
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          sx={(theme) => ({
            textDecoration: "underline",
            textDecorationColor: theme.palette.secondary.main, 
            textUnderlineOffset: "4px",
            textDecorationThickness: "2px",
          })}
        >
          {t("projects.kiosco.why.choose")} {t(title)}?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: 5,
            gap: 2,
            justifyContent: "center",
          }}
        >
          {reasons.map((reason, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 45%" },
              }}
            >
              <Typography
                variant="body1"
                sx={(theme: Theme) => ({
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: `5px 5px 1px ${theme.palette.secondary.main}`,
                  color: theme.custom.white,
                  p: 2,
                  borderRadius: 2,
                  fontSize: theme?.typography?.body2?.fontSize,
                })}
              >
                {t(reason)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Summary */}
      <Box sx={(theme: Theme) => ({ 
        mt: 8, 
        textAlign: "center",
        backgroundColor: theme?.palette?.primary?.main,
        p: 2,
        width: '100%',
        '& p': {
          color: theme?.custom?.white,
          fontSize: theme?.typography?.body2?.fontSize,
          borderTop: `1px solid ${theme?.custom?.white}`,
          borderBottom: `1px solid ${theme?.custom?.white}`,
        }
      })}>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "700px",
            mx: "auto",
            color: theme.custom.fontColorTransparent,
          }}
        >
          {t(long_description.tasksDescription)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectLongDescriptionClientComponent;
