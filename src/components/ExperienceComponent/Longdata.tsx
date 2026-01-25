import React from "react";
import { Box, Typography, type Theme } from "@mui/material";
import type { LongDataProps } from "../../typings/reactComponents";
import type { LongDescriptionItem, Stack, Task } from "../../typings/types";
import LongDataDescriptionComponent from "./LongDataDescription";
import LongDataTaskComponent from "./LongDataTaskComponen";

const LongDataComponent = ({ experienceItem }: LongDataProps): React.ReactNode => {
    const { stack, tasks, long_description } : { stack: Stack[], tasks: Task[], long_description: LongDescriptionItem } = experienceItem;
    const { description, objective, tasksDescription, technologiesDescription } = long_description;

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box
               sx={(theme: Theme) => ({
                    margin: '1em auto',
                    background: theme?.palette?.primary?.main,
                    padding: '1em',
                    width: '100%',
               })} 
            >
                <Typography
                    sx={(theme: Theme) => ({
                        color: theme?.custom.white,
                        fontSize: theme?.typography?.body2?.fontSize,
                        fontStyle: 'italic',
                        textAlign: 'center',
                    })}
                >
                    {objective}
                </Typography>
            </Box>
            <LongDataTaskComponent title="Participación" text={tasksDescription} tasks={tasks}/>
            <LongDataDescriptionComponent title="Tecnologías" text={technologiesDescription} stack={stack} />
        </Box>
    );
};

export default React.memo(LongDataComponent);
