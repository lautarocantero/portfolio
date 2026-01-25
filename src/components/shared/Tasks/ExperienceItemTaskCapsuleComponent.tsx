import { Box, Grid, Typography, type Theme } from "@mui/material";
import type { ExperienceItemTaskCapsuleProps } from "../../../typings/reactComponents";

const ExperienceItemTaskCapsuleComponent = ({task}: ExperienceItemTaskCapsuleProps):React.ReactNode => {
    const {text, icon}: {text: string, icon: string} = task;

    return(
        <Grid
            sx={(theme: Theme) => ({
                backgroundColor: theme?.palette?.primary?.main,
                borderRadius: '10em',
                display: 'flex',
                flexDirection: 'row',
                gap: { xs: '0.2em'},
                padding: '0.2em 0.8em',
            })}
        >
            <Box
              component="div"
              sx={(theme: Theme) => ({
                alignItems: "center",
                backgroundColor: theme?.custom?.white,
                borderRadius: "50%",
                display: "flex",
                height: "1.2em",
                justifyContent: "center",
                overflow: "hidden",
                width: "1.2em",
              })}
            >
              <Box
                alt={text}
                component="img"
                src={icon}
                sx={{
                  height: "70%",
                  objectFit: "contain",
                  width: "70%",
                }}
              />
            </Box>
            <Typography
                sx={(theme: Theme) => ({
                    alignContent: 'center',
                    color: theme?.custom?.white,
                    fontSize: theme?.typography?.body2?.fontSize,
                })}
            >
                {text}
            </Typography>
        </Grid>
    )
};
        
export default ExperienceItemTaskCapsuleComponent;