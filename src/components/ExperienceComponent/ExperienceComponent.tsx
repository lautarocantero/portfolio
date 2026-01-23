import { Box, Typography, type Theme } from "@mui/material";
import ExperienceExhibitorcomponent from "./ExperienceExhibitor";
import { Element } from "react-scroll";

const ExperienceComponent = (): React.ReactNode => {
    return (
        <Box
            sx={{
                mt: '3em'
            }}
        >
            <Element name="Experiencia">
                <Box>
                    <Typography
                        component={'h2'}
                        sx={(theme: Theme) => ({
                            color: theme?.custom?.fontColor,
                            textAlign: 'center',
                            fontSize: theme?.typography?.h2?.fontSize,
                            position: 'relative',
                        })}
                    >
                        Experiencia
                    </Typography>
                    <ExperienceExhibitorcomponent />
                </Box>
            </Element>
        </Box>
    )
}

export default ExperienceComponent;