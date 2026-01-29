import { Grid } from "@mui/material";
import type { ProjectItemInterface } from "../../typings/types";
import { getProjectItems } from "../../helpers/Projects/getProjectItems";
import ExperienceItemComponent from "../ExperienceTab/ExperienceItem/ExperienceItemComponent";

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
                    <ExperienceItemComponent experienceItem={project} key={project._id}/>
                ))
            }
        </Grid>
    )
};
        
export default ProjectExhibitorcomponent;