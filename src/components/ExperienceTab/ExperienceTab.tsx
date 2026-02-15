import { Box, Typography, type Theme } from "@mui/material";
import { Element } from "react-scroll";
import ExperienceExhibitorcomponent from "./ExperienceExhibitorComponent";
import { useTranslation } from "react-i18next";

const ExperienceTab = (): React.ReactNode => {
    const { t } = useTranslation();
    return (
        <Box component="section"  sx={{mt: '3em'}}>
            <Element name={t("nav.experience")}>
                    <Typography
                        component={'h2'}
                        sx={(theme: Theme) => ({
                            color: theme?.custom?.white,
                            fontSize: theme?.typography?.h2?.fontSize,
                            position: 'relative',
                            textAlign: 'center',
                        })}
                    >
                        {t("experience.title")}
                    </Typography>
                    <ExperienceExhibitorcomponent />
            </Element>
        </Box>
    )
}

export default ExperienceTab;