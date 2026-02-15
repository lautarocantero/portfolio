import { Box, type Theme } from "@mui/material";


const StackLabel = ({text}: {text: string}):React.ReactNode => {
    return(
        <Box
            component={'span'}
            sx={(theme: Theme) => ({
                position: 'absolute',
                bottom: '-2.5em',
                color: theme.custom?.white || '#fff',
                fontSize: theme.typography.body2.fontSize,
                fontWeight: 700,
                letterSpacing: '0.5px',
                textAlign: 'center',
                textShadow: `0 2px 10px ${theme?.palette?.primary?.main}80`,
                zIndex: 3,
                whiteSpace: 'nowrap',
                top: { xs: '9em', lg: '13em'},
            })}
        >
            {text}
        </Box>
    )
};
        
export default StackLabel;