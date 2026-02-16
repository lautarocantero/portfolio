import { Box, type Theme } from "@mui/material";
import type { StackLabelProps } from "../../../typings/reactComponents";


const StackLabel = ({text}: StackLabelProps):React.ReactNode => {
    return(
        <Box
            component={'span'}
            sx={(theme: Theme) => ({
                bottom: '-2.5em',
                color: theme.custom?.white || '#fff',
                fontSize: theme.typography.body2.fontSize,
                fontWeight: 700,
                letterSpacing: '0.5px',
                position: 'absolute',
                textAlign: 'center',
                textShadow: `0 2px 10px ${theme?.palette?.primary?.main}80`,
                top: { xs: '9em', lg: '13em'},
                whiteSpace: 'nowrap',
                zIndex: 3,
            })}
        >
            {text}
        </Box>
    )
};
        
export default StackLabel;