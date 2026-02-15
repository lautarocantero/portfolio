import { Box } from "@mui/material";
import type { StackInterface, StackSkillType } from "../../typings/types";
import StackSkillComponent from "./StackItem/StackSkillComponent";
import { motion } from "framer-motion";


interface StackGridProps {
    stacks: StackSkillType[]
}


const StackGridComponent = ({stacks}: StackGridProps):React.ReactNode => {
    return(
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                margin: '2em 0.5em 0',
                display: "grid",
                gridTemplateColumns: { 
                    xs: "repeat(2, 1fr)", 
                    sm: "repeat(5, 1fr)",
                    md: "repeat(6, 1fr)",
                    lg: "repeat(8, 1fr)",
                },
                gap: "1em",
            }}
        >
        {
            stacks?.map((stackItem: StackInterface) => (
                <StackSkillComponent stack={stackItem} key={stackItem.text}/>
            ))
        }
        </Box>
    )
};
        
export default StackGridComponent;
