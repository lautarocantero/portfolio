import { Box, Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemDescriptionProps } from "../../typings/reactComponents";


const ExperienceItemDescriptionComponent = ( { description }: ExperienceItemDescriptionProps ):React.ReactNode => {
    return(
        <Grid
            sx={(theme: Theme) => ({
                width: '100%',
                backgroundColor: theme?.palette?.primary?.main,
                marginTop: '1em',
            })}
        >
            <Box
                sx={{
                    width: '80%',
                    margin: '0 auto',
                }}
            >
                <Typography
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.fontColor,
                        margin: '2em auto',
                        width: '95%',
                        fontSize: theme?.typography?.body2?.fontSize,
                        fontStyle: 'italic',
                    })}
                >
                    {description.split('\n').map((line, i) => ( <span key={i}> {line} <br /> </span> ))}
                </Typography>
            </Box>
        </Grid>
    )
};
        
export default React.memo(ExperienceItemDescriptionComponent);