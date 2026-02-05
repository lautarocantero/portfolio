import { Box, Typography, type Theme } from "@mui/material";
import type { ProjectDescriptionProps } from "../../../../typings/reactComponents";
import { useTranslation } from "react-i18next";
import ProjectDescriptionHandlerComponent from "./ProjectDescriptionHandler";


const ProjectDescription = ({short_description}: ProjectDescriptionProps ):React.ReactNode => {
    const { t } = useTranslation();

    return(
        <Box component="div" sx={{ width: '100%', minHeight: '20em' }} >
            <Box
                component={'div'}
                sx={(theme: Theme) => ({
                    background: theme?.palette?.primary?.main,
                    margin: { xs: '1em auto 0', md: '3em auto 0'},
                    padding: '1em',
                    width: '100%',
                })} 
            >
                <Typography
                    component={'p'}
                    sx={(theme: Theme) => ({
                        color: theme?.custom.white,
                        fontSize: theme?.typography?.body2?.fontSize,
                        fontStyle: 'italic',
                        textAlign: 'center',
                    })}
                >
                    {t(short_description)}
                </Typography>
            </Box>
            <ProjectDescriptionHandlerComponent />
        </Box>
    )
};
        
export default ProjectDescription;