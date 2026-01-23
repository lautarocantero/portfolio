import { Box, Grid } from "@mui/material";
import ExperienceItemcomponent from "./ExperienceItem";
import { getExperienceItems } from "../../helpers/Experience/getExperienceItems";
import type { ExperienceItemInterface } from "../../typings/types";

const ExperienceExhibitorcomponent = ():React.ReactNode => {
    const experienceItem: ExperienceItemInterface[] = getExperienceItems();
    
    return(
        <Box>
            <Grid
                container
                size={12}
                sx={() => ({
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row'}
                })}
            >
                {
                    experienceItem.map((experience: ExperienceItemInterface) => (
                        <ExperienceItemcomponent experienceItem={experience} />
                    ))
                }
            </Grid>
        </Box>
    )
};
        
export default ExperienceExhibitorcomponent;