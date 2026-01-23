import { Box, Typography, type Theme } from "@mui/material";
import AboutIlustrationComponent from "./AboutIlustration";
import AboutDescriptionComponent from "./AboutDescription";
import { Element } from "react-scroll";


const AboutMeComponent = ():React.ReactNode => {
    return(
        <Box>
        <Element name="Sobre mí">
        <Typography
            component={'h2'}
            sx={(theme: Theme) => ({
                color: theme?.custom?.fontColor,
                textAlign: 'center',
                fontSize: theme?.typography?.h2?.fontSize,
                mt: { xs: '2em' },
            })}
        >
            Sobre mí
        </Typography>
        
            <Box
                sx={(theme: Theme) => ({
                    width: { xs: '100%', md: '60%'},
                    backgroundColor: theme?.custom?.backgroundLigth,
                    height: 'auto',
                    margin: '0 auto'
                })}
            >
                <AboutIlustrationComponent />
                <AboutDescriptionComponent />
            </Box>
        </Element>
        </Box>
    )
};
        
export default AboutMeComponent;