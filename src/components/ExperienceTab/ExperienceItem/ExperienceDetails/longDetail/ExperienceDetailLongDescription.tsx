import { Box } from "@mui/material";
import React from "react";
import type { LongDataProps } from "../../../../../typings/reactComponents";
import type { LongDescriptionItemInterface, StackInterface, Task } from "../../../../../typings/types";
import LongDescriptionComponent from "./LongDescription";
import LongTaskComponent from "./LongTaskComponent";
import LongObjectiveComponent from "./LongObjective";

const LongDataComponent = ({ experienceItem }: LongDataProps): React.ReactNode => {
    const { stack, tasks, long_description } : 
    { stack: StackInterface[], tasks: Task[], long_description: LongDescriptionItemInterface } = experienceItem;

    const { objective, tasksDescription, technologiesDescription } :
    { objective: string, tasksDescription: string, technologiesDescription: string, } = long_description;

    return (
        <Box sx={{ width: '100%', }} >
            <LongObjectiveComponent text={objective} />
            <LongTaskComponent title="Participación" text={tasksDescription} tasks={tasks}/>
            <LongDescriptionComponent title="Tecnologías" text={technologiesDescription} stack={stack} />
        </Box>
    );
};

export default React.memo(LongDataComponent);
