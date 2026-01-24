import { Box, Grid, Typography, type Theme } from "@mui/material";
import type { ExperienceItemTaskCapsuleProps } from "../../typings/reactComponents";

const ExperienceItemTaskCapsuleComponent = ({task}: ExperienceItemTaskCapsuleProps):React.ReactNode => {
    const {text, icon} = task;
    return(
        <Grid
            sx={(theme: Theme) => ({
                backgroundColor: theme?.custom?.backgroundLigth,
                borderRadius: '10em',
                display: 'flex',
                flexDirection: 'row',
                padding: '0.2em 0.8em',
                maxHeight: "1.5em",
                gap: { xs: '0.2em'}
            })}
        >
            <Box
              component="div"
              sx={(theme: Theme) => ({
                width: "1.2em",
                height: "1.2em",
                backgroundColor: theme?.custom?.white,
                overflow: "hidden",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <Box
                alt={text}
                component="img"
                src={icon}
                sx={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />
            </Box>
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
        
export default ExperienceItemTaskCapsuleComponent;