import { Box } from "@mui/material"
import StackInnerCircleComponent from "./StackInnerCircle";
import StackLabel from "./StackLabel";
import type { StackContentProps } from "../../../typings/reactComponents";


const StackContentComponent = ({iconGif,icon,text,}: StackContentProps ):React.ReactNode => {


    return(
        <Box
            component={'div'}
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '70%',
                justifyContent: 'center',
                position: 'relative',
                width: '70%',
                zIndex: 2,
            }}
        >
            {/* Inner Circle with Icon */}
            <StackInnerCircleComponent icon={icon} iconGif={iconGif} text={text}/>

            {/* Label Below */}
            <StackLabel text={text} />
        </Box>
    )
};
        
export default StackContentComponent;