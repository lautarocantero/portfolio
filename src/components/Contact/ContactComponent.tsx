import { Box, Typography, type Theme } from "@mui/material";
import ContactFormComponent from "./ContactForm";
import { Element } from "react-scroll";


const ContactComponent = ():React.ReactNode => {
    return(
        <Element name="Contacto">
            <Box
                component={'div'}
                sx={(theme: Theme) => ({ 
                    position: 'relative', 
                    height: 'auto', 
                    width: { xs: '100%', md: '60%' }, 
                    margin: '2em auto', 
                    backgroundImage: `linear-gradient( to bottom, ${theme?.custom?.backgroundLigth} 0%,
                        ${theme?.custom?.backgroundLigth} 60%,
                        ${theme?.palette?.primary?.main} 60%, 
                        ${theme?.palette?.primary?.main} 100% )`, 
                    backgroundSize: '100% 100%', 
                    '&::before': { 
                        content: '""', 
                        position: 'absolute', 
                        inset: 0, 
                        pointerEvents: 'none', 
                        backgroundImage: `
                          radial-gradient(circle at 90% 10%, ${theme?.palette?.primary?.main} 0 40px, transparent 41px),    
                          radial-gradient(circle at 60% 35%, ${theme?.palette?.primary?.main} 0 40px, transparent 41px),                   
                          radial-gradient(circle at 15% 25%, ${theme?.palette?.primary?.main} 0 55px, transparent 56px),
                          radial-gradient(circle at 75% 60%, ${theme?.palette?.primary?.main} 0 40px, transparent 41px),
                          radial-gradient(circle at 30% 75%, ${theme?.palette?.primary?.main} 0 50px, transparent 51px),
                          radial-gradient(circle at 90% 45%, ${theme?.palette?.primary?.main} 0 35px, transparent 36px)
                        `,
                        backgroundRepeat: 'no-repeat', }, })}
            >
                <Typography
                    component={'h2'}
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.white,
                        padding: '2em 0',
                        textAlign: 'center',
                        fontSize: theme?.typography?.h4?.fontSize,
                        fontWeight: 'bold',
                    })}
                >
                    Contacto
                </Typography>
                <ContactFormComponent />
            </Box>
        </Element>
    )
};
        
export default ContactComponent;