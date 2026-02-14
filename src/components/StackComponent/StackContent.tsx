import { Box } from "@mui/material"
import StackInnerCircleComponent from "./StackInnerCircle";
import StackLabel from "./StackLabel";


const StackContentComponent = ({iconGif,icon,text,}: {iconGif: string; icon: string; text: string;}):React.ReactNode => {
    return(
        <Box
            component={'div'}
            sx={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '70%',
                height: '70%',
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