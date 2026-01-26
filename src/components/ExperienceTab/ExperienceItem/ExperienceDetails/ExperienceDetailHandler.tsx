import React from "react";
import type { ExperienceDetailHandlerProps } from "../../../../typings/reactComponents";
import type { StackInterface, Task } from "../../../../typings/types";
import ExperienceDetailShortDescription from "./shortDetail/ExperienceDetailShortDescription";
import ExperienceDetailLongDescription from "./longDetail/LongDescriptionComponent";

const ExperienceDetailHandlerComponent = ( { isExpanded, experienceItem  } : ExperienceDetailHandlerProps ):React.ReactNode => {

    const {stack, tasks, short_description } : 
    { stack: StackInterface[], tasks: Task[], short_description: string } = experienceItem;

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