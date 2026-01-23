import { Box, type Theme } from "@mui/material"
import PresentationText from "./PresentationText";
import 'animate.css';

const PresentationInfo = ():React.ReactNode => {
    return(
        <Box
            sx={(theme: Theme) => ({
                margin: '2em auto',
                textAlign: 'center',
                color: theme?.custom?.fontColor,
            })}
        >
            <PresentationText text={"Lautaro Cantero"} size="large" title/>
            <PresentationText text={"Desarrollador Full Stack"} remarked size="large"/>
            <PresentationText text={"¡Bienvenido a mi portafolio!"} size="small" className={'animate__animated animate__zoomIn'}/>
        </Box>
    )
};

export default PresentationInfo;