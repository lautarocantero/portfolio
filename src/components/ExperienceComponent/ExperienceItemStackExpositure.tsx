import { Grid } from "@mui/material";
import React from "react";
import type { ExperienceItemStackExpositureProps } from "../../typings/reactComponents";
import ExperienceItemStackCapsuleComponent from "./ExperienceItemStackCapsule";

const ExperienceItemStackExpositurecomponent = ({stack}: ExperienceItemStackExpositureProps ):React.ReactNode => {

    return(
        <Grid
            container
            display={'flex'}
            flexDirection={'row'}
            sx={{
                width: '90%',
                gap: { xs: '0.1em 0.2em'},
                minHeight: '5em',
                maxHeight: '5em',
                overflowY: 'auto',
                scrollbarWidth: "thin",
                justifyContent: 'flex-start',
                alignItems: "start",
                marginTop: { xs: '2em', sm: "1em" }
            }}
        >
            {
                stack?.map((stk) => (
                    <ExperienceItemStackCapsuleComponent stack={stk}/>
                ))
            }
        </Grid>
    )
};
        
export default React.memo(ExperienceItemStackExpositurecomponent);