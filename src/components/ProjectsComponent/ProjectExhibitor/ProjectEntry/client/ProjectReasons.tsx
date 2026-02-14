import { Box, Typography, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectReasonsProps } from "../../../../../typings/reactComponents";
import React, { useMemo } from "react";
import type { TFunction } from "i18next";


const ProjectReasonsComponent = ({title, reasons}: ProjectReasonsProps ):React.ReactNode => {
    const { t } = useTranslation();

    const renderReasons = (reasons: string[], t: TFunction) =>
      reasons.map((reason, i) => (
        <Box key={i} sx={{ flex: { xs: "1 1 100%", sm: "1 1 45%" } }}>
          <Typography
            variant="body1"
            sx={(theme: Theme) => ({
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
              boxShadow: `3px 3px 1px ${theme.palette.secondary.main}`,
              color: theme.custom.white,
              fontSize: theme?.typography?.body2?.fontSize,
              p: 2,
            })}
          >
            {t(reason)}
          </Typography>
        </Box>
      ));
    
    const reasonsMap = useMemo(() => renderReasons(reasons, t), [reasons, t]);


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
          {reasonsMap}
        </Box>
      </Box>
    )
};
        
export default React.memo(ProjectReasonsComponent);