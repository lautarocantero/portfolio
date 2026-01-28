import { Box } from "@mui/material";
import React from "react";
import type { LongDescriptionProps } from "../../../../../typings/reactComponents";
import type { LongDescriptionInterface, StackInterface, Task } from "../../../../../typings/types";
import LongDescriptionContent from "./LongDescriptionContent";
import LongTaskComponent from "./LongTaskComponent";
import LongObjectiveComponent from "./LongObjective";
import { useTranslation } from "react-i18next";

const LongDescriptionComponent = ({ experienceItem }: LongDescriptionProps): React.ReactNode => {
    const { t } = useTranslation();
    const { stack, tasks, long_description } : 
    { stack: StackInterface[], tasks: Task[], long_description: LongDescriptionInterface } = experienceItem;

    const { objective, tasksDescription, technologiesDescription } :
    { objective: string, tasksDescription: string, technologiesDescription: string, } = long_description;

    return (
        <Box sx={{ width: '100%', }} >
            <LongObjectiveComponent text={t(objective)} />
            <LongTaskComponent title={t("experience.participation")} text={tasksDescription} tasks={tasks}/>
            <LongDescriptionContent title={t("experience.tech.long")} text={technologiesDescription} stack={stack} />
        </Box>
    );
};

export default React.memo(LongDescriptionComponent);
