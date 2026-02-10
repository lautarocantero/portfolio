import { Box, Typography, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectSummaryProps } from "../../../../../typings/reactComponents";


const ProjectSummaryComponent = ({tasksDescription}: ProjectSummaryProps ):React.ReactNode => {
    const { t } = useTranslation();


    return(
        <Box sx={(theme: Theme) => ({ 
          backgroundColor: theme?.palette?.primary?.main,
          mt: 8, 
          p: 2,
          textAlign: "center",
          width: '100%',
          '& p': {
            borderBottom: `1px solid ${theme?.custom?.white}`,
            borderTop: `1px solid ${theme?.custom?.white}`,
            color: theme?.custom?.white,
            fontSize: theme?.typography?.body2?.fontSize,
          }
        })}>
          <Typography
            variant="body1"
            sx={(theme: Theme) => ({
              color: theme.custom.fontColorTransparent,
              maxWidth: "700px",
              mx: "auto",
            })}
          >
            {t(tasksDescription)}
          </Typography>
        </Box>
    )
};
        
export default ProjectSummaryComponent;