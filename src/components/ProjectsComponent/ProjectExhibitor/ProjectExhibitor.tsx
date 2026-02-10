import { Box, type Theme } from "@mui/material";
import { getProjectEntrys } from "../../../helpers/Projects/getProjectItems";
import type { ProjectEntryType } from "../../../typings/types";
import ProjectExhibitorSelectedItem from "./ProjectSelected/ProjectExhibitorSelectedItem";


const ProjectExhibitorcomponent = ():React.ReactNode => {
    const projectsEntries: ProjectEntryType[] = getProjectEntrys();

    return(
        <>
            {
                projectsEntries?.map((project: ProjectEntryType) => (
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
                        <ProjectExhibitorSelectedItem projectSelected={project}/>
                    </Box>
                ))
            }
        </>
    )
};
        
export default ProjectExhibitorcomponent;