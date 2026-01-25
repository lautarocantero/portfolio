import React from "react";
import type { ExperienceItemDescriptionProps } from "../../../../typings/reactComponents";
import type { Stack, Task } from "../../../../typings/types";
import ShortData from "./shortDetail/ShortData";
import LongDataComponent from "./longDetail/Longdata";

const ExperienceDetailHandlerComponent = ( { isExpanded, experienceItem  } : ExperienceItemDescriptionProps ):React.ReactNode => {

    const {stack, tasks, short_description } : 
    { stack: Stack[], tasks: Task[], short_description: string } = experienceItem;

    return(
        <>
            {
                !isExpanded ? 
                <ShortData stack={stack} tasks={tasks} short_description={short_description} /> 
                : 
                <LongDataComponent experienceItem={experienceItem} />
            }
        </>
    )
};
        
export default React.memo(ExperienceDetailHandlerComponent);