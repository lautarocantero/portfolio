import { Box, Typography, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import ProjectExhibitorcomponent from "./ProjectExhibitor/ProjectExhibitor";
import { useMemo } from "react";

const ProjectsSection = (): React.ReactNode => {
    const { t } = useTranslation();

    const title = useMemo(() => t("projects.title"), [t]);

    return (
        <Box
            component={'section'}
        >
            <Element name={t("projects.title")}>
            <Box
                component={'div'}
            >
                <Typography
                    component={'h2'}
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.fontColor,
                        fontSize: theme?.typography?.h2?.fontSize,
                        mt: { xs: '5em' },
                        textAlign: 'center',
                    })}
                >
                    {title}
                </Typography>
                <Box    /*─────────────────── 🔎 Fondo violeta de la sección 🔎 ───────────────────*/
                    sx={(theme: Theme) => ({
                        backgroundColor: theme?.palette?.primary?.main,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'auto',
                        mt: "2em",
                        minHeight: "103em",
                    })}
                >
                    <ProjectExhibitorcomponent />
                </Box>
            </Box>
            </Element>
        </Box>
    )
}

export default ProjectsSection;