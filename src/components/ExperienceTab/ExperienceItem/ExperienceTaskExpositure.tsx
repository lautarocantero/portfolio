import { Box, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceTaskExpositureProps } from "../../../typings/reactComponents";
import TaskListComponent from "../../shared/tasks/TaskListComponent";
import { t } from "i18next";

const ExperienceTaskExpositurecomponent = ({tasks}: ExperienceTaskExpositureProps ):React.ReactNode => {

    return(
        <Box
            component={'div'}
            sx={{ 
                width: '90%', 
                marginBottom: '1em',
                minHeight: { xs: '10em', sm: '16em'}, 
            }}
        >
                <Typography
                    component={'h6'}
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.fontColor,
                        marginTop: '1em',
                        textAlign: 'center',
                    })}
                >
                    {t("experience.task.realized")}
                </Typography>
            <TaskListComponent tasks={tasks} />
        </Box>
    )
};
        
export default React.memo(ExperienceTaskExpositurecomponent);