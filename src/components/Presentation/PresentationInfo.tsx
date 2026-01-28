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
            <PresentationText text={t("hero.name")} size="large" title/>
            <PresentationText text={t("hero.role")} remarked size="large"/>
            <PresentationText text={t("hero.welcome")} size="small" className={'animate__animated animate__zoomIn'}/>
        </Box>
    )
};

export default PresentationInfo;