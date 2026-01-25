import { Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemDataProps } from "../../typings/reactComponents";
import ExperienceItemDescriptionComponent from "./ExperienceItemDescription";

const ExperienceItemDatacomponent = ({isExpanded, experienceItem }: ExperienceItemDataProps):React.ReactNode => {

    const { title } : { title: string } = experienceItem;

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
            
            <ExperienceItemDescriptionComponent isExpanded={isExpanded} experienceItem={experienceItem} />
        </Grid>
    )
};
        
export default React.memo(ExperienceItemDatacomponent);