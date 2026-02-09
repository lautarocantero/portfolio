import { Box } from "@mui/material";
import ProjectButtonComponent from "./ProjectButton";
import type { ProjectButtonsProps } from "../../../../typings/reactComponents";
import { useTranslation } from "react-i18next";

const ProjectButtonsComponent = ({ long_description }: ProjectButtonsProps ):React.ReactNode => {
    const { design_url, project_url } = long_description;
    const { t } = useTranslation();

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row'},
                width: '100%',
                margin: '1em auto',
                p: 1,
                gap: { xs: '1em', sm: 0}
            }}
        >
            <ProjectButtonComponent 
              text={t("projects.kiosco.buttons.code")} 
              onClick={ () => window.open(project_url, "_blank") }
            />
            <ProjectButtonComponent 
              text={t("projects.kiosco.buttons.design")} 
              onClick={ () => window.open(design_url, "_blank") }
            />
            <ProjectButtonComponent 
              text={t("projects.kiosco.buttons.page")} 
              onClick={() => {}} 
              disabled
            />
        </Box>
    )
};
        
export default ProjectButtonsComponent;
