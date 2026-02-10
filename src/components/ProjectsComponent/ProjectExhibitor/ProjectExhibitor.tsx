import { Box, type Theme } from "@mui/material";
import { getProjectItems } from "../../../helpers/Projects/getProjectItems";
import type { ProjectItemInterface } from "../../../typings/types";
import ProjectExhibitorSelectedItem from "./ProjectSelected/ProjectExhibitorSelectedItem";


const ProjectExhibitorcomponent = ():React.ReactNode => {
    const projectsItems: ProjectItemInterface[] = getProjectItems();

    return(
        <>
            {
                projectsItems?.map((project: ProjectItemInterface) => (
                    <Box
                        component={'div'}
                        sx={(theme: Theme) => ({
                            backgroundColor: theme?.custom?.backgroundLigth,
                            borderRadius: '2em',
                            height: 'auto',
                            margin: '2em auto 2em',
                            width: '95%',
                        })}
                    >
                        <ProjectExhibitorSelectedItem selectedItem={project}/>
                    </Box>
                ))
            }
        </>
    )
};
        
export default ProjectExhibitorcomponent;