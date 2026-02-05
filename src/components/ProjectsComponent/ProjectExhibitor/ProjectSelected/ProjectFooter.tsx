import { Box, type Theme } from "@mui/material";


const ProjectFooterComponent = ():React.ReactNode => {
    return(
        <Box
            component={'div'}
            sx={(theme: Theme) => ({
                width: '100%',
                height: '3em',
                backgroundColor: theme?.custom?.backgroundDark,
                borderRadius: '0 0 2em 2em',
                mt: '2em',
            })}
        >
        </Box>
    )
};
        
export default ProjectFooterComponent;