import { Box, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectSelectedProps } from "../../../../typings/reactComponents";
import type { ProjectLongDescriptionType } from "../../../../typings/types";
import CarouselComponent from "../../../shared/CarouselComponent";
import ProjectDescription from "./ProjectDescription";
import ProjectButtonsComponent from "./ProjectButtons";

const ProjectEntry = ({projectSelected}: ProjectSelectedProps ):React.ReactNode => {
    const { t } = useTranslation();

    const 
      { gallery_urls,long_description, inDevelopment } : 
      {gallery_urls: string[], long_description: ProjectLongDescriptionType, inDevelopment: boolean} 
    = projectSelected;

    return(
        <Box
          component="div"
          sx={(theme: Theme) => ({
            display: "flex",
            flexDirection: { xs: "column" },
            overflow: "hidden",
            position: "relative",
            width: "100%",
            "&::before": inDevelopment
              ? {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.custom?.white,
                  content: `"${t("projects.in.development")}"`,
                  fontSize: theme.typography.body2.fontSize,
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  padding: "0.3em 2em",
                  position: "absolute",
                  right: "-3em",
                  top: "2em",
                  transform: "rotate(45deg)",
                }
              : {},
          })}
        >
          <CarouselComponent gallery_urls={gallery_urls} bigScreen />
          <ProjectDescription
            long_description={long_description}
          />
          <ProjectButtonsComponent long_description={long_description}/>
        </Box>
    )
};
        
export default ProjectEntry;
