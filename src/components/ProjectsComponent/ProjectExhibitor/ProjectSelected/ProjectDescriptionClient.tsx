import { List, Typography, type Theme } from "@mui/material";
import ProjectDescriptionItemComponent from "./ProjectDescriptionItem";
import ProjectButtonsComponent from "./ProjectButtons";


const ProjectDescriptionClientComponent = ():React.ReactNode => {

    return(
        <>
            <Typography
                component={'h3'}
                sx={(theme: Theme) => ({
                    color: theme?.custom?.white,
                    backgroundColor: theme?.custom?.backgroundDark,
                    fontSize: theme?.typography?.h4?.fontSize,
                    textAlign: 'center',
                    width: '100%',
                    mt: '0.5em',
                    p: '0.5em 0',
                })}
            >
                ¿Qué ofrece?
            </Typography>
            <List
                component={'ul'}
                sx={(theme: Theme) => ({
                    p: '1.2em',
                    borderRadius: '1em',
                    '& > li': {
                        display: 'list-item',
                        color: theme?.custom?.white,
                        fontSize: theme?.typography?.body2?.fontSize,
                    },
                })} 
            >
            <ProjectDescriptionItemComponent text="Monitorea tus ventas desde casa" logo={'public/icons/money-svgrepo-com (1).svg'}/>
            <ProjectDescriptionItemComponent text="Controla tus productos en tiempo real"  logo={'public/icons/product-svgrepo-com.svg'}/>
            <ProjectDescriptionItemComponent text="Gestiona tus pedidos facilmente"  logo={'public/icons/chat-square-svgrepo-com.svg'}/>
            <ProjectDescriptionItemComponent text="Evita discrepancias de stock"  logo={'public/icons/stock-svgrepo-com (1).svg'}/>
            </List>
            <ProjectButtonsComponent />
        </>
    )
};
        
export default ProjectDescriptionClientComponent;