import { Box, Typography, type Theme } from "@mui/material";
import AboutIlustrationComponent from "./AboutIlustration";
import AboutDescriptionComponent from "./AboutDescription";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const AboutMeTab = ():React.ReactNode => {
    const { t } = useTranslation();

    return(
        <Box
            sx={{
                marginBottom: '10em'
            }}
        >
            <Element name={t("nav.about")}>
            <Typography
                component={'h2'}
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    textAlign: 'center',
                    fontSize: theme?.typography?.h2?.fontSize,
                    mt: { xs: '2em' },
                })}
            >
                {t("about.title")}
            </Typography>
            
                <Box
                    sx={(theme: Theme) => ({
                        width: { xs: '100%', md: '60%'},
                        backgroundColor: theme?.custom?.backgroundLigth,
                        height: 'auto',
                        margin: '2em auto 0'
                    })}
                >
                    <AboutIlustrationComponent />
                    <AboutDescriptionComponent />
                </Box>
            </Element>
        </Box>
    )
};
        
export default AboutMeTab;