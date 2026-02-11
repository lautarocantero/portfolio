import { Box, type Theme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../theme/context/themeContext";


const AboutIlustrationComponent = ():React.ReactNode => {
    const { appTheme } = useContext(ThemeContext);


    return(
        <Box
            component={'div'}
            sx={(theme: Theme) => ({
                alignItems: 'center', 
                backgroundImage: !appTheme 
                  ? 'url("/ideas/abstract-background-purple-texture-grainy_474888-5042-2233225676.jpg")' 
                  : 'url("/ideas/abstract-background-cian.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex', 
                flexDirection: 'column',
                height: '9.5em',
                justifyContent: 'flex-start',
                width: '100%',
                overflow: 'hidden'
            })}
        >
            <Box
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.custom?.aboutBackground,
                    borderRadius: '50%',
                    height: '10em',
                    objectFit: 'contain', 
                    width: '10em',
                    marginTop: '1em',
                })}  
            >
                <Box
                    component={'img'}
                    src="/images/foto_perfil/foto_perfil1_about_me_2.png"
                    sx={{
                        borderRadius: '50%',
                        height: '10em',
                        objectFit: 'contain', 
                        width: '10em',
                        paddingTop: '1em'
                    }}
                >
                </Box>
            </Box>
        </Box>
    )
};
        
export default AboutIlustrationComponent