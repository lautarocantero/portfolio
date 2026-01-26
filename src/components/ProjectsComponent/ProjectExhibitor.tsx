import { Grid } from "@mui/material";
import ProjectItemcomponent from "./ProjectItem";
import type { ProjectItemInterface } from "../../typings/types";
import { getProjectItems } from "../../helpers/Projects/getProjectItems";

const ProjectExhibitorcomponent = ():React.ReactNode => {
    const experienceItem: ProjectItemInterface[] = getProjectItems();
    return(
        <Grid
            container
            size={12}
            sx={() => ({
                width: '100%',
                height: 'auto',
                display: 'flex',
                margin: '2em 0',
            })}
        >
            {
                experienceItem.map((project: ProjectItemInterface) => (
                    <ProjectItemcomponent projectItem={project} key={project._id}/>
                ))
            }
        </Grid>
    )
};
        
export default ProjectExhibitorcomponent;