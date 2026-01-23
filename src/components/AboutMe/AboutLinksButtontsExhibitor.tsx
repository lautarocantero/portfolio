import { alpha, Box, type Theme } from "@mui/material";
import { GetAboutLinks } from "../../helpers/About/getAboutLinks";
import type { AboutLinkInterface } from "../../typings/types";
import AboutLinkComponent from "./AboutLink";



const AboutLinksButtonsExhibitorComponent = ():React.ReactNode => {
    const aboutLinks: AboutLinkInterface[] = GetAboutLinks();

    return(
        <Box
            component={'div'}
            sx={(theme: Theme) => ({
                display: 'flex',
                flexDirection: 'row',
                gap: '1em',
                justifyContent: 'center',
                backgroundColor: theme?.palette?.primary?.main,
                p: '0.5em',
                borderRadius: '1em',
                boxShadow: `8px 8px 10px ${alpha(theme?.custom?.backgroundDark, 100)}`,
                width: { xs: '100%', md: '50%'},
                margin: '2em auto 0'
            })}
        >
            {
                aboutLinks?.map((link: AboutLinkInterface ) => (
                    <AboutLinkComponent link={link} />
                ))
            }
        </Box>
    )
};
        
export default AboutLinksButtonsExhibitorComponent;