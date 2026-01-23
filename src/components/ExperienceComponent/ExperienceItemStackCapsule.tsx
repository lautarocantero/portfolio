import { Box, Grid, Typography, type Theme } from "@mui/material";
import type { ExperienceItemStackCapsuleProps } from "../../typings/reactComponents";



const ExperienceItemStackCapsuleComponent = ({stack}: ExperienceItemStackCapsuleProps):React.ReactNode => {
    const {text, icon} = stack;
    return(
        <Grid
            sx={(theme: Theme) => ({
                backgroundColor: theme?.custom?.backgroundDark,
                borderRadius: '10em',
                display: 'flex',
                flexDirection: 'row',
                padding: '0.2em 0.8em',
                maxHeight: "1.5em",
                gap: { xs: '0.2em'}
            })}
        >
             <Box
               alt={text}
               component="img"
               src={icon}
               sx={{
                 width: "1.2em",
                 maxHeight: "1em",
                 margin: 'auto'
               }}
             />
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2?.fontSize,
                    alignContent: 'center',
                })}
            >
                {text}
            </Typography>
        </Grid>
    )
};
        
export default ExperienceItemStackCapsuleComponent;