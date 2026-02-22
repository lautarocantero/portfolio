import { Box, Typography, type Theme } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import { ThemeContext } from "../../theme/context/themeContext";
import AboutDescriptionComponent from "./AboutDescription";
import AboutIlustrationComponent from "./AboutIlustration";

const AboutMeTab = ():React.ReactNode => {
    const { t } = useTranslation();
    const { appTheme } = useContext(ThemeContext);

    return(
        <Box
            sx={{
                marginBottom: '10em'
            }}
        >
            <Element name={t("nav.about")}>
                <Box sx={{ position: 'relative'}}>
                    <Box
                      component="img"
                      src="/icons/curve-arrow.png"
                      alt="About me"
                      sx={{
                        width: "10%",
                        position: "absolute",
                        transform: "scaleX(-1) rotate(58deg)",
                        top: "-70px",
                        left: "632px",
                        filter: !appTheme ? 'invert(1) brightness(2) grayscale(1)' : '',
                      }}
                    />
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
                </Box>
                <Box
                    sx={(theme: Theme) => ({
                        width: { xs: '100%', md: '60%'},
                        backgroundColor: theme?.custom?.backgroundLigth,
                        boxShadow: `10px 10px 10px ${theme?.custom?.backgroundDark}`,
                        margin: '2em auto 0',
                        display: 'flex',
                        flexDirection: 'row',
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