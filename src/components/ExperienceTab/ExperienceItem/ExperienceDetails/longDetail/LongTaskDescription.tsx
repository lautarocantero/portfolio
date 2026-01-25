import React from "react";
import { Box, Typography, type Theme } from "@mui/material";
import type { LongTaskDescriptionProps } from "../../../../../typings/reactComponents";
import type { Task } from "../../../../../typings/types";
import TaskCapsuleComponent from "../../../../shared/Tasks/TaskCapsuleComponent";

const LongTaskDescriptionComponent = ({
  tasks,
}: LongTaskDescriptionProps): React.ReactNode => {

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
            <TaskCapsuleComponent task={task} />
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2?.fontSize,
                    marginTop: '0.2em',
                    textAlign: 'start',
                })}
            >
                {task.description}
            </Typography>
        </Box>
      ))}
    </>

  );
};

export default LongTaskDescriptionComponent;
