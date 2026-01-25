import { Box, Typography, type Theme } from "@mui/material";
import type { LongDataDescriptionProps } from "../../typings/reactComponents";
import StackListComponent from "./ExperienceItemsStackList";


const LongDataDescriptionComponent = ({title, text, stack}: LongDataDescriptionProps):React.ReactNode => {
    return(
        <Box
            sx={(theme: Theme) => ({
                margin: '1em auto 0',
                padding: '1em',
                width: { xs: '95%', md: '70%' },
            })}
        >
            <Box
                sx={(theme: Theme) => ({
                    background: theme?.palette?.primary?.main,
                    width: '100%',
                    padding: '0.5em',
                    marginBottom: '1em', 
                })}
            >
                <Typography
                    sx={(theme: Theme) => ({
                        textAlign: 'center',
                        color: theme?.custom.white,
                    })}
                >
                    {title}
                </Typography>
            </Box>
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2?.fontSize,
                    textAlign: 'start',
                })}
            >
                {text}
            </Typography>
            <StackListComponent stack={stack} />
        </Box>
    )
};
        
export default LongDataDescriptionComponent;