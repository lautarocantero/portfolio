import React from "react";
import { Box, Typography, type Theme } from "@mui/material";
import type { LongDataTaskDescriptionProps } from "../../typings/reactComponents";
import type { Task } from "../../typings/types";
import ExperienceItemTaskCapsuleComponent from "./ExperienceItemTaskCapsuleComponent";


const LongDataTaskDescriptionComponent = ({
  tasks,
}: LongDataTaskDescriptionProps): React.ReactNode => {

  return (
    <>
      {tasks.map((task: Task, index: number) => (
        <Box 
            key={index}
            sx={{
                width: { xs: '100%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '0.5em',
                margin: { xs: '1em auto 0', sm: '1em 0' },
            }}
        >
            <ExperienceItemTaskCapsuleComponent task={task} />
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2?.fontSize,
                    textAlign: 'start',
                    marginTop: '0.2em',
                })}
            >
                {task.description}
            </Typography>
        </Box>
      ))}
    </>

  );
};

export default LongDataTaskDescriptionComponent;
