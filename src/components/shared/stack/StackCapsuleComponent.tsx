import { Box, Typography, type Theme } from "@mui/material";
import type { StackCapsuleProps } from "../../../typings/reactComponents";

const StackCapsuleComponent = ({stack, flat}: StackCapsuleProps):React.ReactNode => {

    const {text, icon} : {text: string, icon: string} = stack;

    return(
        <Box
            sx={(theme: Theme) => ({
                width: 'fit-content',
                backgroundColor: theme?.custom?.backgroundLigth,
                borderRadius: flat ? 'none' : '10em',
                display: 'flex',
                flexDirection: 'row',
                gap: { xs: '0.2em'},
                maxHeight: "1.5em",
                padding: '0.2em 0.8em',
            })}
        >
             <Box
               alt={text}
               component="img"
               src={icon}
               sx={{
                 margin: 'auto',
                 maxHeight: "1em",
                 width: "1.2em",
               }}
             />
            <Typography
                sx={(theme: Theme) => ({
                    alignContent: 'center',
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2?.fontSize,
                })}
            >
                {text}
            </Typography>
        </Box>
    )
};
        
export default StackCapsuleComponent;