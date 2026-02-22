import { alpha, Box, type Theme } from "@mui/material";
import { GetAboutLinks } from "../../helpers/About/getAboutLinks";
import type { AboutLinkInterface } from "../../typings/types";
import AboutLinkComponent from "./AboutLink";
import { ThemeContext } from "../../theme/context/themeContext";
import { useContext } from "react";



const AboutLinksButtonsExhibitorComponent = ():React.ReactNode => {
    const { appTheme } = useContext(ThemeContext);
    const aboutLinks: AboutLinkInterface[] = GetAboutLinks();

    return(
        <Box
            component={'div'}
            sx={(theme: Theme) => ({
                display: 'flex',
                flexDirection: 'row',
                gap: '1em',
                justifyContent: 'center',
                backgroundImage: !appTheme 
                  ? 'url("/ideas/abstract-background-purple-texture-grainy_474888-5042-2233225676.jpg")' 
                  : 'url("/ideas/abstract-background-cian.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                p: '0.5em',
                borderRadius: '1em',
                boxShadow: `8px 8px 10px ${alpha(theme?.custom?.backgroundDark, 1)}`,
                width: { xs: '100%', md: '50%'},
                margin: '2em auto 0'
            })}
        >
            {
                aboutLinks?.map((link: AboutLinkInterface ) => (
                    <AboutLinkComponent link={link} key={link.text}/>
                ))
            }
        </Box>
    )
};
        
export default AboutLinksButtonsExhibitorComponent;