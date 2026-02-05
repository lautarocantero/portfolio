import { Typography, type Theme } from "@mui/material";
import type { ProjectDescriptionTitleProps } from "../../../../typings/reactComponents";
import { useTranslation } from "react-i18next";


const ProjectDescriptionTitleComponent = ({title}: ProjectDescriptionTitleProps ):React.ReactNode => {
    const { t } = useTranslation();

    return(
        <>
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.white,
                    textAlign: 'center',
                    fontSize: theme?.typography?.h3?.fontSize,
                    fontStyle: 'italic',
                })}
            >
                {t(title)}
            </Typography>
        </>
    )
};
        
export default ProjectDescriptionTitleComponent;