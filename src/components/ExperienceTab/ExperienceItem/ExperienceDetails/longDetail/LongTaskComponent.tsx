import { Box, Typography, type Theme } from "@mui/material";
import type { LongTasksProps } from "../../../../../typings/reactComponents";
import LongTaskDescriptionComponent from "./LongTaskDescription";
import { useTranslation } from "react-i18next";

const LongTaskComponent = ({title, text, tasks}: LongTasksProps):React.ReactNode => {
    const { t } = useTranslation();

    return(
        <Box
            sx={() => ({
                margin: '1em auto 0',
                padding: '1em',
                width: { xs: '100%', md: '70%' },
            })}
        >
            <Box
                sx={(theme: Theme) => ({
                    background: theme?.palette?.primary?.main,
                    marginBottom: '1em', 
                    padding: '0.5em',
                    width: '100%',
                })}
            >
                <Typography
                    sx={(theme: Theme) => ({
                        color: theme?.custom.white,
                        textAlign: 'center',
                    })}
                >
                    {t(title)}
                </Typography>
            </Box>
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2?.fontSize,
                    textAlign: 'start',
                })}
            >
                {t(text)}
            </Typography>
            <LongTaskDescriptionComponent tasks={tasks} />
        </Box>
    )
};
        
export default LongTaskComponent;