import { Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemDataProps } from "../../typings/reactComponents";
import ExperienceItemDescriptionComponent from "./ExperienceItemDescription";
import ExperienceItemSwitcher from "./ExperienceItemSwitcher";

const ExperienceItemDatacomponent = ({isExpanded, title, stack, short_description, long_description, tasks}: ExperienceItemDataProps):React.ReactNode => {
    return(
        <Grid
            container
            display={'flex'}
            flexDirection={'column'}
            sx={{ 
                justifyContent: "flex-start", 
                alignItems: "center", 
            }}
        >
            <Typography
                component={'h6'}
                sx={(theme: Theme) => ({
                    textAlign: 'center',
                    color: theme?.custom?.fontColor,
                })}
            >
                {title}
            </Typography>
            
            <ExperienceItemDescriptionComponent description={ isExpanded ? long_description  : short_description }/>
            <ExperienceItemSwitcher stack={stack} tasks={tasks} />
        </Grid>
    )
};
        
export default React.memo(ExperienceItemDatacomponent);