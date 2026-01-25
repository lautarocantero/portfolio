import { Box, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemTaskExpositureProps } from "../../../typings/reactComponents";
import ExperienceItemTaskListComponent from "../../shared/Tasks/ExperienceItemTaskList";

const ExperienceItemTaskExpositurecomponent = ({tasks}: ExperienceItemTaskExpositureProps ):React.ReactNode => {

    return(
        <Box
            component={'div'}
            sx={{ width: '90%', marginBottom: '1em' }}
        >
                <Typography
                    component={'h6'}
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.fontColor,
                        marginTop: '1em',
                        textAlign: 'center',
                    })}
                >
                    Tareas realizadas
                </Typography>
            <ExperienceItemTaskListComponent tasks={tasks} />
        </Box>
    )
};
        
export default React.memo(ExperienceItemTaskExpositurecomponent);