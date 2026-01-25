import { Box } from "@mui/material";
import React from "react";
import type { LongDataProps } from "../../../../../typings/reactComponents";
import type { LongDescriptionItem, Stack, Task } from "../../../../../typings/types";
import LongDataDescriptionComponent from "../LongDataDescription";
import LongDataTaskComponent from "./LongDataTaskComponen";
import LongDataObjectiveComponent from "./LongdataObjective";

const LongDataComponent = ({ experienceItem }: LongDataProps): React.ReactNode => {
    const { stack, tasks, long_description } : 
    { stack: Stack[], tasks: Task[], long_description: LongDescriptionItem } = experienceItem;

    const { objective, tasksDescription, technologiesDescription } :
    { objective: string, tasksDescription: string, technologiesDescription: string, } = long_description;

    return (
        <Box sx={{ width: '100%', }} >
            <LongDataObjectiveComponent text={objective} />
            <LongDataTaskComponent title="Participación" text={tasksDescription} tasks={tasks}/>
            <LongDataDescriptionComponent title="Tecnologías" text={technologiesDescription} stack={stack} />
        </Box>
    );
};

export default React.memo(LongDataComponent);
