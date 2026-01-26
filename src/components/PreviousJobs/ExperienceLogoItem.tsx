import { Box, Typography, type Theme } from "@mui/material";
import type { ExperienceLogoProps } from "../../typings/reactComponents";


const ExperienceLogoItemComponent = ( { logo } : ExperienceLogoProps ):React.ReactNode => {
    const { logo: logoImage, title, url } : { logo: string, title: string, url: string} = logo;
    return(
        <Box
            onClick={ () => window.open(url, "_blank")}  
            sx={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
            }}
        >
            <Box 
                component={'img'}
                src={logoImage}
                sx={{
                    width: '5em',
                    height: '5em',
                    borderRadius: '50%',
                }}
            />
            <Typography
                sx={(theme: Theme) => ({
                    color: theme?.custom?.fontColor,
                    textAlign: 'center',
                    marginTop: '1em',
                    fontSize: theme?.typography?.h5?.fontSize,
                })}
            >
                {title}
            </Typography>
        </Box>
    )
};
        
export default ExperienceLogoItemComponent;