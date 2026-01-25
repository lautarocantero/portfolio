import { Box, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceDetailProps } from "../../../../typings/reactComponents";
import ExperienceDetailHandlerComponent from "./ExperienceDetailHandler";

const ExperienceDetailcomponent = ({isExpanded, experienceItem }: ExperienceDetailProps):React.ReactNode => {

    const { title } : { title: string } = experienceItem;

    return(
        <Box
            component={'div'}
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "flex-start", 
                alignItems: "center", 
            }}
        >
            <Typography
                component={'h6'}
                sx={(theme: Theme) => ({
                    textAlign: 'center',
                    color: theme?.custom?.fontColor,
                })}
            >
                {title}
            </Typography>
            
            <ExperienceDetailHandlerComponent isExpanded={isExpanded} experienceItem={experienceItem} />
        </Box>
    )
};
        
export default React.memo(ExperienceDetailcomponent);