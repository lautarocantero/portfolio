import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useMemo } from "react";
import type { StackGridProps } from "../../typings/reactComponents";
import type { StackSkillType } from "../../typings/types";
import StackSkillComponent from "./StackItem/StackSkillComponent";


const StackGridComponent = ({stacks}: StackGridProps):React.ReactNode => {

    const stacksMapped = useMemo(() => 
        stacks?.map((stackItem: StackSkillType) => (
            <StackSkillComponent stack={stackItem} key={stackItem.text}/>
        ))
    ,[stacks]);

    return(
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                display: "grid",
                gridTemplateColumns: { 
                    xs: "repeat(2, 1fr)", 
                    sm: "repeat(5, 1fr)",
                    md: "repeat(6, 1fr)",
                    lg: "repeat(8, 1fr)",
                },
                gap: "1em",
                margin: '2em 0.5em 0',
            }}
        >
        {
           stacksMapped
        }
        </Box>
    )
};
        
export default StackGridComponent;
