import { Box, Typography, type Theme } from "@mui/material";
import ProjectExhibitorcomponent from "./ProjectExhibitor";
import { Element } from "react-scroll";

const ProjectsComponent = (): React.ReactNode => {
    return (
        <Element name="Proyectos">
        <Box>
            <Typography
                component={'h2'}
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    textAlign: 'center',
                    fontSize: theme?.typography?.h2?.fontSize,
                    mt: { xs: '5em' },
                })}
            >
                Proyectos
            </Typography>
            <Box
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.palette?.primary?.main,
                })}
            >
                <ProjectExhibitorcomponent />
            </Box>
        
        </Box>
        </Element>
    )
}

export default ProjectsComponent;