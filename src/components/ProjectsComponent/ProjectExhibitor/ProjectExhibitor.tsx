import { Box, type Theme } from "@mui/material";
import type { ProjectItemInterface } from "../../../typings/types";
import { getProjectItems } from "../../../helpers/Projects/getProjectItems";
import ProjectExhibitorSelectedItem from "./ProjectSelected/ProjectExhibitorSelectedItem";


const ProjectExhibitorcomponent = ():React.ReactNode => {
    const projectsItems: ProjectItemInterface[] = getProjectItems();

    return(
        <Box
            component={'div'}
            sx={(theme: Theme) => ({
                width: '95%',
                height: 'auto',
                margin: '2em auto 2em',
                backgroundColor: theme?.custom?.backgroundLigth,
                borderRadius: '2em'
            })}
        >
            <ProjectExhibitorSelectedItem selectedItem={projectsItems[0]}/>
        </Box>
    )
};
        
export default ProjectExhibitorcomponent;