import { Grid } from "@mui/material";
import React from "react";
import type { ProjectItemStackExpositureProps } from "../../typings/reactComponents";
import ProjectItemStackCapsuleComponent from "./ProjectItemStackCapsule";

const ProjectItemStackExpositurecomponent = ({stack}: ProjectItemStackExpositureProps ):React.ReactNode => {

    return(
        <Grid
            container
            display={'flex'}
            flexDirection={'row'}
            sx={{
                width: '90%',
                gap: '0.2em 0.3em',
                margin: 'auto'
            }}
        >
            {
                stack?.map((stk) => (
                    <ProjectItemStackCapsuleComponent stack={stk}/>
                ))
            }
        </Grid>
    )
};
        
export default React.memo(ProjectItemStackExpositurecomponent);