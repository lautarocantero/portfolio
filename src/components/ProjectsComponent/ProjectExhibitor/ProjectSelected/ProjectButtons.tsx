import { Box } from "@mui/material";
import ProjectButtonComponent from "./ProjectButton";


const ProjectButtonsComponent = ():React.ReactNode => {
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row'},
                width: '100%',
                margin: '0 auto',
                gap: '1em'
            }}
        >
            <ProjectButtonComponent text="Ir a la pagina" onClick={() => {}} disabled/>
            <ProjectButtonComponent text="Ver más" onClick={() => {}} />
        </Box>
    )
};
        
export default ProjectButtonsComponent;