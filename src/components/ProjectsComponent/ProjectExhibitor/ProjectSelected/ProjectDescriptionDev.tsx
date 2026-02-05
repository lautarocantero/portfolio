import { Typography, type Theme } from "@mui/material";


const ProjectDescriptionDevComponent = ():React.ReactNode => {
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
                ¿Cómo se hizo?
            </Typography>
            <Typography>dev</Typography>
        </>
    )
};
        
export default ProjectDescriptionDevComponent;