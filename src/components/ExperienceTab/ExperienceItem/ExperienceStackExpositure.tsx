import { Box, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceStackExpositureProps } from "../../../typings/reactComponents";
import StackListComponent from "../../shared/Stack/StackListComponent";

const ExperienceStackExpositureComponent = ({stack}: ExperienceStackExpositureProps ):React.ReactNode => {

    return(
        <Box
            component={'div'}
            sx={{ width: '90%', marginBottom: '1em' }}
        >
            <Typography
                component={'h6'}
                sx={(theme: Theme) => ({
                    textAlign: 'center',
                    color: theme?.custom?.fontColor,
                    marginTop: '1em',
                })}
            >
                Tecnologías utilizadas
            </Typography>
            <StackListComponent stack={stack}/>
        </Box>
    )
};
        
export default React.memo(ExperienceStackExpositureComponent);