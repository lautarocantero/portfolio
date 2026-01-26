import { Box } from "@mui/material";
import React from "react";
import type { LogoExperienceInterface } from "../../typings/types";
import ExperienceLogoItemComponent from "./ExperienceLogoItem";
import { getExperienceLogos } from "../../helpers/Experience/getExperienceLogos";

const PreviousJobsExhibitorComponent = ():React.ReactNode => {
    const experienceLogosObject: LogoExperienceInterface [] = getExperienceLogos();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                gap: '2em',
                margin: '2em auto',
            }}
        >
            {
                experienceLogosObject?.map((logo: LogoExperienceInterface) => (
                    <ExperienceLogoItemComponent logo={logo} key={logo.title}/>
                ))
            }
        </Box>
    )
};
        
export default React.memo(PreviousJobsExhibitorComponent);