import { Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ProjectItemDescriptionProps } from "../../typings/reactComponents";


const ProjectItemDescriptionComponent = ( { short_description }: ProjectItemDescriptionProps ):React.ReactNode => {
    return(
        <Grid>
            <Typography
                sx={(theme: Theme) => ({
                    textAlign: 'start',
                    color: theme?.custom?.fontColor,
                    margin: '4em auto',
                    width: '95%',
                    fontSize: theme?.typography?.body2?.fontSize,

                })}
            >
                {short_description}
            </Typography>
        </Grid>
    )
};
        
export default React.memo(ProjectItemDescriptionComponent);