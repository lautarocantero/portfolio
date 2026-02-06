import { Box, List, Typography, type Theme } from "@mui/material";
import ProjectDescriptionItemComponent from "./ProjectDescriptionItem";
import { projectItemTypeEnum } from "../../../../typings/types/enums";


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
                    width: { xs: '100%', sm: '90%', md: '70%'},
                    '& > li': {
                        display: 'list-item',
                        color: theme?.custom?.white,
                        fontSize: theme?.typography?.body2?.fontSize,
                    },
                })} 
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-around',
                    }}
                >
                    <Box>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.feature} text="Monitorea tus ventas desde casa" logo={'public/icons/money-svgrepo-com (1).svg'}/>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.feature}  text="Controla tus productos en tiempo real"  logo={'public/icons/product-svgrepo-com.svg'}/>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.feature}  text="Gestiona tus pedidos facilmente"  logo={'public/icons/chat-square-svgrepo-com.svg'}/>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.feature}  text="Evita discrepancias de stock"  logo={'public/icons/stock-svgrepo-com (1).svg'}/>
                    </Box>
                    <Box>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.benefit}  text="Ahorra tiempo"  logo={'public/icons/watch-svgrepo-com.svg'}/>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.benefit}  text="Tranquilidad"  logo={'public/icons/relax-svgrepo-com.svg'}/>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.benefit}  text="Mayor control"  logo={'public/icons/control-discipline-moderation-svgrepo-com.svg'}/>
                        <ProjectDescriptionItemComponent type={projectItemTypeEnum?.benefit}  text="Escalabilidad"  logo={'public/icons/improve-incomes-svgrepo-com.svg'}/>
                    </Box>
                </Box>
            </List>
            
        </>
    )
};
        
export default ProjectDescriptionClientComponent;