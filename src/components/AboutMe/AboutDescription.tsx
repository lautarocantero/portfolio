import { Box, Typography, type Theme } from "@mui/material";
import AboutLinksButtonsExhibitorComponent from "./AboutLinksButtontsExhibitor";


const AboutDescriptionComponent = ():React.ReactNode => {
    return(
        <Box sx={{ margin: '1em' }}>
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2.fontSize,
                    mt: '2em',
                    textAlign: 'center',
                })}
            >
                ¡Hola! ¿Qué tal?, mi nombre es
            </Typography>
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.palette?.primary?.main,
                    fontSize: theme?.typography?.h4.fontSize,
                    textAlign: 'center',
                })}
            >
                Lautaro Nicolas Cantero
            </Typography>
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2.fontSize,
                    textAlign: 'center',
                    fontStyle: 'italic'
                })}
            >
                programador full stack de 25 años, apasionado por la tecnología y el diseño.
            </Typography>
            <AboutLinksButtonsExhibitorComponent />
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    fontSize: theme?.typography?.body2.fontSize,
                    mt: '3em',
                    textAlign: 'center',
                })}
            >
                Trabajé más de 3 años como Front End Developer y actualmente me desempeño como freelancer full stack, 
                mis principales habilidades incluyen React, Node.js y TypeScript. Enfocado en aprender nuevas tecnologías
            </Typography>
            <Typography
               variant="subtitle1"
               sx={(theme: Theme) => ({
                 color: theme.palette.primary.main,
                 fontWeight: "bold",
                 textAlign: 'center',
                 fontSize: theme?.typography?.body2.fontSize,
                 mt: "2em",
               })}
            >
                Si quieres contactarme
            </Typography>
        </Box>
    )
};
        
export default AboutDescriptionComponent;

