import { Box, Typography, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectReasonsProps } from "../../../../../typings/reactComponents";


const ProjectReasonsComponent = ({title, reasons}: ProjectReasonsProps ):React.ReactNode => {
    const { t } = useTranslation();


    return(
      <Box sx={{ mt: 12 }}>
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          sx={(theme) => ({
            textDecoration: "underline",
            textDecorationColor: theme.palette.secondary.main, 
            textDecorationThickness: "2px",
            textUnderlineOffset: "4px",
          })}
        >
          {t("projects.kiosco.why.choose")} {t(title)}?
        </Typography>


        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            mt: 5,
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
                  borderRadius: 2,
                  boxShadow: `5px 5px 1px ${theme.palette.secondary.main}`,
                  color: theme.custom.white,
                  fontSize: theme?.typography?.body2?.fontSize,
                  p: 2,
                })}
              >
                {t(reason)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    )
};
        
export default ProjectReasonsComponent;