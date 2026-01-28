import { Box, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceDetailProps } from "../../../../typings/reactComponents";
import ExperienceDetailHandlerComponent from "./ExperienceDetailHandler";
import { useTranslation } from "react-i18next";

const ExperienceDetailcomponent = ({isExpanded, experienceItem }: ExperienceDetailProps):React.ReactNode => {

    const { title } : { title: string } = experienceItem;
    const { t } = useTranslation();

    return(
        <Box
            component={'div'}
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "flex-start", 
                alignItems: "center", 
                minHeight: { sm: '22em', md: '20em' },
            }}
        >
            <Typography
                component={'h6'}
                sx={(theme: Theme) => ({
                    textAlign: 'center',
                    color: theme?.custom?.fontColor,
                    mt: '1em',
                })}
            >
                {t(title)}
            </Typography>
            
            <ExperienceDetailHandlerComponent isExpanded={isExpanded} experienceItem={experienceItem} />
        </Box>
    )
};
        
export default React.memo(ExperienceDetailcomponent);