import { Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ProjectItemDataProps } from "../../typings/reactComponents";
import ProjectItemDescriptionComponent from "./ProjectItemDescription";
import ProjectItemStackExpositurecomponent from "./ProjectItemStackExpositure";

const ProjectItemDatacomponent = ({title, stack, short_description}: ProjectItemDataProps):React.ReactNode => {
    return(
        <Grid
            container
            display={'flex'}
            flexDirection={'column'}
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
            <ProjectItemStackExpositurecomponent stack={stack}/>
            <ProjectItemDescriptionComponent short_description={short_description}/>
        </Grid>
    )
};
        
export default React.memo(ProjectItemDatacomponent);