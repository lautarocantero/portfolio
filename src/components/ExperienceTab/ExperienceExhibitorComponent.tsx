import { Grid } from "@mui/material";
import { getExperienceItems } from "../../helpers/Experience/getExperienceItems";
import type { ExperienceItemInterface } from "../../typings/types";
import ExperienceItemcomponent from "./ExperienceItem/ExperienceItemComponent";

const ExperienceExhibitorcomponent = () : React.ReactNode => {
    const experienceItems: ExperienceItemInterface[] = getExperienceItems();
    
    return(
        <Grid
            container
            size={12}
            sx={() => ({
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row'},
                width: '100%',
            })}
        >
            {
                experienceItems.map((experience: ExperienceItemInterface) => (
                    <ExperienceItemcomponent experienceItem={experience} />
                ))
            }
        </Grid>
    )
};
        
export default ExperienceExhibitorcomponent;