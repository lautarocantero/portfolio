import React from "react";
import type { ExperienceItemDescriptionProps } from "../../../../typings/reactComponents";
import type { Stack, Task } from "../../../../typings/types";
import ExperienceDetailShortDescription from "./shortDetail/ExperienceDetailShortDescription";
import ExperienceDetailLongDescription from "./longDetail/ExperienceDetailLongDescription";

const ExperienceDetailHandlerComponent = ( { isExpanded, experienceItem  } : ExperienceItemDescriptionProps ):React.ReactNode => {

    const {stack, tasks, short_description } : 
    { stack: Stack[], tasks: Task[], short_description: string } = experienceItem;

    return(
        <>
            {
                !isExpanded ? 
                <ExperienceDetailShortDescription stack={stack} tasks={tasks} short_description={short_description} /> 
                : 
                <ExperienceDetailLongDescription experienceItem={experienceItem} />
            }
        </>
    )
};
        
export default React.memo(ExperienceDetailHandlerComponent);