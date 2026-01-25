import { Box, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ShortDataProps } from "../../../../../typings/reactComponents";
import ExperienceHandler from "./ExperienceHandler";

const ExperienceDetailShortDescription = ({ stack, tasks, short_description }: ShortDataProps): React.ReactNode => {
    return (
        <Box component="div" sx={{ width: '100%', }} >
            <Box
                component={'div'}
                sx={(theme: Theme) => ({
                 background: theme?.palette?.primary?.main,
                 margin: '1em auto',
                 padding: '1em',
                 width: '100%',
                })} 
            >
                <Typography
                    component={'p'}
                    sx={(theme: Theme) => ({
                        color: theme?.custom.white,
                        fontSize: theme?.typography?.body2?.fontSize,
                        fontStyle: 'italic',
                        textAlign: 'center',
                    })}
                >
                    {short_description}
                </Typography>
            </Box>
            <ExperienceHandler stack={stack} tasks={tasks} />
        </Box>
    );
};

export default React.memo(ExperienceDetailShortDescription);
