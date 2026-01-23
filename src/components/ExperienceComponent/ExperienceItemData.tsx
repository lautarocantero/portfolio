import { Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemDataProps } from "../../typings/reactComponents";
import ExperienceItemDescriptionComponent from "./ExperienceItemDescription";
import ExperienceItemStackExpositurecomponent from "./ExperienceItemStackExpositure";

const ExperienceItemDatacomponent = ({title, stack, short_description}: ExperienceItemDataProps):React.ReactNode => {
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
            <ExperienceItemStackExpositurecomponent stack={stack}/>
            <ExperienceItemDescriptionComponent short_description={short_description}/>
        </Grid>
    )
};
        
export default React.memo(ExperienceItemDatacomponent);