import { Box, type Theme } from "@mui/material"
import PresentationText from "./PresentationText";
import 'animate.css';
import { useTranslation } from "react-i18next";

const PresentationInfo = ():React.ReactNode => {
    const {t} = useTranslation();
    return(
        <Box
            sx={(theme: Theme) => ({
                margin: '2em auto',
                textAlign: 'center',
                color: theme?.custom?.fontColor,
            })}
        >
            <PresentationText text={t("Lautaro Cantero")} size="large" title/>
            <PresentationText text={t("Desarrollador Full Stack")} remarked size="large"/>
            <PresentationText text={t("¡Bienvenido a mi portafolio!")} size="small" className={'animate__animated animate__zoomIn'}/>
        </Box>
    )
};

export default PresentationInfo;