import { Box } from "@mui/material";
import type { StackExhibitorProps } from "../../typings/reactComponents";
import StackSkillComponent from "./StackSkillComponent";
import type { StackInterface } from "../../typings/types";

const StackExhibitorComponent = ({stacks}: StackExhibitorProps ):React.ReactNode => {
    return(
        <Box
            component={'div'}
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
        
export default StackExhibitorComponent;