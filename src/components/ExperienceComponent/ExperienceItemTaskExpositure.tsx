import { Box, Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemTaskExpositureProps } from "../../typings/reactComponents";
import type { Task } from "../../typings/types";
import ExperienceItemTaskCapsuleComponent from "./ExperienceItemTaskCapsuleComponent";

const ExperienceItemTaskExpositurecomponent = ({tasks}: ExperienceItemTaskExpositureProps ):React.ReactNode => {

    return(
        <Box
            sx={{ width: '90%', marginBottom: '1em' }}
        >
            <Grid>
                <Typography
                    component={'h6'}
                    sx={(theme: Theme) => ({
                        textAlign: 'center',
                        color: theme?.custom?.fontColor,
                        marginTop: '1em',
                    })}
                >
                    Tareas realizadas:
                </Typography>
            </Grid>
            <Grid
                container
                display={'flex'}
                flexDirection={'row'}
                sx={(theme: Theme) => ({
                    gap: { xs: '0.1em 0.2em'},
                    height: 'auto',
                    overflowY: 'auto',
                    scrollbarWidth: "thin",
                    justifyContent: 'center',
                    alignItems: "start",
                    marginTop: { xs: '2em', sm: "1em" },
                    backgroundColor: theme?.custom?.backgroundDark,
                    padding: '0.5em',
                    borderRadius: '1em',
                })}
            >
                {
                    tasks?.map((task: Task) => (
                        <ExperienceItemTaskCapsuleComponent task={task}/>
                    ))
                }
            </Grid>
        </Box>
    )
};
        
export default React.memo(ExperienceItemTaskExpositurecomponent);