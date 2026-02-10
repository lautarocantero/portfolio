import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { ProjectButtonsProps } from "../../../../typings/reactComponents";
import ProjectButtonComponent from "./ProjectButton";
import type { ProjectButtonType } from "../../../../typings/types";


const ProjectButtonsComponent = ({ long_description }: ProjectButtonsProps ):React.ReactNode => {
    const { t } = useTranslation();
    const 
        { design_url, project_url, deploy_url } : 
        { design_url : string, project_url : string, deploy_url : string } 
    = long_description;


    const ProjectButtonProperties: ProjectButtonType[] = [
        { text: "projects.buttons.code", onClick: () => { window.open(project_url, "_blank") }},
        { text: "projects.buttons.design", onClick: () => { window.open(design_url, "_blank") }},
        { text: "projects.buttons.page", onClick: () => { window.open(deploy_url, "_blank")}, disabled: deploy_url?.length <= 0},
    ]

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row'},
                gap: { xs: '1em', sm: 0},
                margin: '1em auto',
                p: 1,
                width: '100%',
            }}
        >
            {
                ProjectButtonProperties?.map((prop: ProjectButtonType) => (
                    <ProjectButtonComponent 
                      text={t(prop?.text)} 
                      onClick={ prop?.onClick }
                      disabled={ prop?.disabled }
                    />
                ))
            }
        </Box>
    )
};
        
export default ProjectButtonsComponent;
