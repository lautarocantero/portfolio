import { Box, Typography, type Theme } from "@mui/material";
import { Element } from "react-scroll";
import ExperienceExhibitorcomponent from "./ExperienceExhibitorComponent";

const ExperienceTab = (): React.ReactNode => {
    return (
        <Box component="section"  sx={{mt: '3em'}}>
            <Element name="Experiencia">
                    <Typography
                        component={'h2'}
                        sx={(theme: Theme) => ({
                            color: theme?.custom?.white,
                            fontSize: theme?.typography?.h2?.fontSize,
                            position: 'relative',
                            textAlign: 'center',
                        })}
                    >
                        Experiencia
                    </Typography>
                    <ExperienceExhibitorcomponent />
            </Element>
        </Box>
    )
}

export default ExperienceTab;