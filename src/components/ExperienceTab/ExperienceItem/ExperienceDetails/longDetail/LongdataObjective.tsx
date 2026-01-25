import { Box, Typography, type Theme } from "@mui/material";
import type { LongDataObjectiveProps } from "../../../../../typings/reactComponents";

const LongDataObjectiveComponent = ({ text }: LongDataObjectiveProps): React.ReactNode => {
    return(
        <Box
           sx={(theme: Theme) => ({
                background: theme?.palette?.primary?.main,
                margin: '1em auto',
                padding: '1em',
                width: '100%',
           })} 
        >
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom.white,
                    fontSize: theme?.typography?.body2?.fontSize,
                    fontStyle: 'italic',
                    textAlign: 'center',
                })}
            >
                {text}
            </Typography>
        </Box>
    )
};
        
export default LongDataObjectiveComponent;