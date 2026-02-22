import { Box, type Theme } from "@mui/material"
import PresentationText from "./PresentationText";
import 'animate.css';
import { useTranslation } from "react-i18next";
import { TitleSizeEnum } from "../../typings/types/enums";

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
            <PresentationText text={t("hero.name")} size={TitleSizeEnum?.large} title/>
            <PresentationText text={t("hero.role")} remarked size={TitleSizeEnum?.large}/>
            <PresentationText text={t("hero.welcome")} size={TitleSizeEnum?.small} className={'animate__animated animate__zoomIn'}/>
        </Box>
    )
};

export default PresentationInfo;