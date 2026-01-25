import { Box } from "@mui/material";
import type { StackExhibitorProps } from "../../typings/reactComponents";
import StackSkillComponent from "./StackSkillComponent";
import type { StackInterface } from "../../typings/types";

const StackExhibitorComponent = ({stacks}: StackExhibitorProps ):React.ReactNode => {
    return(
        <Box
            component={'div'}
            sx={{
                margin: '0.5em',
                display: "grid",
                gridTemplateColumns: { 
                    xs: "repeat(3, 1fr)", 
                    sm: "repeat(8, 1fr)",
                    md: "repeat(12, 1fr)",
                    lg: "repeat(14, 1fr)",
                },
                gap: "1em",
            }}
        >
            {
                stacks?.map((stackItem: StackInterface) => (
                    <StackSkillComponent stack={stackItem} />
                ))
            }
        </Box>
    )
};
        
export default StackExhibitorComponent;