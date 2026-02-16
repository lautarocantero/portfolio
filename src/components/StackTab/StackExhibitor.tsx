import React from "react";
import type { StackExhibitorProps } from "../../typings/reactComponents";
import StackGridComponent from "./StackGrid";
import StackListComponent from "./StackList";

const StackExhibitorComponent = ({stacks, isDetailedList}: StackExhibitorProps ):React.ReactNode => {
    return(
        <>
            {
                !isDetailedList ? 
                <StackGridComponent stacks={stacks} />
                :
                <StackListComponent stacks={stacks} />
            }
        </>
    )
};
        
export default React.memo(StackExhibitorComponent);