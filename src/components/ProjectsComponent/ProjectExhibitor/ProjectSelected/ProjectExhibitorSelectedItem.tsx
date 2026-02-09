import { Box, type Theme } from "@mui/material";
import type { ProjectSelectedProps } from "../../../../typings/reactComponents";
import CarouselComponent from "../../../shared/CarouselComponent";
import ProjectDescription from "./ProjectDescription";

const ProjectExhibitorSelectedItem = ({selectedItem}: ProjectSelectedProps ):React.ReactNode => {
    const { gallery_urls, short_description,long_description, stack, inDevelopment } = selectedItem;

    return(
        <Box
          component="div"
          sx={(theme: Theme) => ({
            display: "flex",
            flexDirection: { xs: "column" },
            width: "100%",
            position: "relative",
            overflow: "hidden",
            "&::before": inDevelopment
              ? {
                  content: '"En desarrollo"',
                  position: "absolute",
                  top: "2em",
                  right: "-3em",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.custom?.white,
                  fontWeight: "bold",
                  padding: "0.3em 2em",
                  transform: "rotate(45deg)",
                  fontSize: theme.typography.body2.fontSize,
                  letterSpacing: "1px",
                }
              : {},
          })}
        >
          <CarouselComponent gallery_urls={gallery_urls} bigScreen />
          <ProjectDescription
            short_description={short_description}
            long_description={long_description}
            stack={stack}
          />
        </Box>
    )
};
        
export default ProjectExhibitorSelectedItem;
