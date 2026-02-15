import { Box, Typography, type Theme } from "@mui/material";
import React from "react";
import type { ExperienceStackExpositureProps } from "../../../typings/reactComponents";
import StackListComponent from "../../shared/stack/StackListComponent";
import { useTranslation } from "react-i18next";

const ExperienceStackExpositureComponent = ({stack}: ExperienceStackExpositureProps ):React.ReactNode => {
    const { t } = useTranslation();

    return(
        <Box
            component={'div'}
            sx={{ 
                width: '90%', 
                marginBottom: '1em',
                minHeight: { xs: '10em', sm: '16em'}, 
            }}
        >
            <Typography
                component={'h6'}
                sx={(theme: Theme) => ({
                    textAlign: 'center',
                    color: theme?.custom?.fontColor,
                    marginTop: '1em',
                })}
            >
                {t("experience.tech")}
            </Typography>
            <StackListComponent stacks={stack}/>
        </Box>
    )
};
        
export default React.memo(ExperienceStackExpositureComponent);