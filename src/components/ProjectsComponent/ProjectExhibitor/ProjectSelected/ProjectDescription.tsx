import { Box, type Theme } from "@mui/material";
import type { ProjectDescriptionProps } from "../../../../typings/reactComponents";
import ProjectButtonsComponent from "./ProjectButtons";
import ProjectDescriptionHandlerComponent from "./ProjectDescriptionHandler";


const ProjectDescription = ({ long_description }: ProjectDescriptionProps ):React.ReactNode => {

    return(
        <Box 
            component="div" 
            sx={{ 
                minHeight: '20em',
                width: '100%', 
            }} >
            <Box
                component={'div'}
                sx={(theme: Theme) => ({
                    background: theme?.palette?.primary?.main,
                    margin: { xs: '1em auto 0', md: '3em auto 0'},
                    padding: '1em',
                    width: '100%',
                })} 
            >
            </Box>
            <ProjectDescriptionHandlerComponent long_description={long_description} />
            <ProjectButtonsComponent long_description={long_description}/>
        </Box>
    )
};
        
export default ProjectDescription;