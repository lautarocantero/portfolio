import { Box, type Theme } from "@mui/material";
import { getProjectEntrys } from "../../../helpers/Projects/getProjectItems";
import type { ProjectEntryType } from "../../../typings/types";
import ProjectEntry from "./ProjectEntry/ProjectEntry";
import { useMemo } from "react";


const ProjectExhibitorcomponent = ():React.ReactNode => {
    const projectsEntries: ProjectEntryType[] = useMemo(() => getProjectEntrys(), []);

    return(
        <>
            {
                projectsEntries?.map((project: ProjectEntryType) => (
                    <Box
                        key={project?._id}
                        component={'div'}
                        sx={(theme: Theme) => ({
                            backgroundColor: theme?.custom?.backgroundLigth,
                            borderRadius: '2em',
                            height: 'auto',
                            margin: '2em auto 2em',
                            width: '95%',
                        })}
                    >
                        <ProjectEntry projectSelected={project}/>
                    </Box>
                ))
            }
        </>
    )
};
        
export default ProjectExhibitorcomponent;