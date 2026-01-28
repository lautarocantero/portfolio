import { Box, Button, Typography, type Theme } from "@mui/material";
import type { ExperienceItemButtonProps } from "../../../typings/reactComponents";
import React from "react";
import { useTranslation } from "react-i18next";

const ExperienceItemButtonComponent = ({isExpanded, setIsExpanded}: ExperienceItemButtonProps):React.ReactNode => {
    const { t } = useTranslation();

    return(
        <Box
            component={'div'}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Button
                onClick={() => { 
                    setIsExpanded(!isExpanded);
                    }
                }
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.palette?.primary?.main,
                    borderRadius: '0.3em',
                    margin: '2em auto 1em',
                    width: '30%',
                    '&:hover': {
                        cursor: 'pointer',
                    }
                })}
            >
                <Typography
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.white,
                        fontSize: theme?.typography?.body2?.fontSize,
                        textTransform: 'lowercase'
                    })}
                >
                    {isExpanded ? t("experience.button.read.less") : t("experience.button.read.more")}
                </Typography>
            </Button>
        </Box>
    )
};
        
export default React.memo(ExperienceItemButtonComponent);