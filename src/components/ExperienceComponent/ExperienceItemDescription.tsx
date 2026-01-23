import { Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemDescriptionProps } from "../../typings/reactComponents";


const ExperienceItemDescriptionComponent = ( { short_description }: ExperienceItemDescriptionProps ):React.ReactNode => {
    return(
        <Grid>
            <Typography
                sx={(theme: Theme) => ({
                    textAlign: 'start',
                    color: theme?.custom?.fontColor,
                    margin: '2em auto',
                    width: '95%',
                    fontSize: theme?.typography?.body2?.fontSize,

                })}
            >
                {short_description}
            </Typography>
        </Grid>
    )
};
        
export default React.memo(ExperienceItemDescriptionComponent);