import React from "react";
import type { ShortDataProps } from "../../typings/reactComponents";
import ExperienceItemSwitcher from "./ExperienceItemSwitcher";
import { Box, Typography, type Theme } from "@mui/material";

const ShortDataComponent = ({ stack, tasks, short_description }: ShortDataProps): React.ReactNode => {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box
               sx={(theme: Theme) => ({
                    margin: '1em auto',
                    background: theme?.palette?.primary?.main,
                    padding: '1em',
                    width: '100%',
               })} 
            >
                <Typography
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
            <ExperienceItemSwitcher stack={stack} tasks={tasks} />
        </Box>
    );
};

export default React.memo(ShortDataComponent);
