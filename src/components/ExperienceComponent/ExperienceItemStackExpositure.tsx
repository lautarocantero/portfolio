import { Box, Grid, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceItemStackExpositureProps } from "../../typings/reactComponents";
import StackListComponent from "./ExperienceItemsStackList";

const ExperienceItemStackExpositureComponent = ({stack}: ExperienceItemStackExpositureProps ):React.ReactNode => {

    return(
        <Box
            sx={{ width: '90%', marginBottom: '1em' }}
        >
            <Grid>
                <Typography
                    component={'h6'}
                    sx={(theme: Theme) => ({
                        textAlign: 'center',
                        color: theme?.custom?.fontColor,
                        marginTop: '1em',
                    })}
                >
                    Tecnologias utilizadas
                </Typography>
            </Grid>
            <StackListComponent stack={stack}/>
        </Box>
    )
};
        
export default React.memo(ExperienceItemStackExpositureComponent);