import { Button, Typography, type Theme } from "@mui/material";


const ProjectItemButtonComponent = ():React.ReactNode => {
    return(
        <Button
            sx={(theme: Theme) => ({
                backgroundColor: theme?.palette?.primary?.main,
                width: '30%',
                margin: '2em auto 1em',
                borderRadius: '0.3em',
                '&:hover': {
                    cursor: 'pointer',
                }
            })}
        >
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.white,
                    fontSize: theme?.typography?.body2?.fontSize,
                    textTransform: 'lowercase'
                })}
            >
                Ver más
            </Typography>
        </Button>
    )
};
        
export default ProjectItemButtonComponent;