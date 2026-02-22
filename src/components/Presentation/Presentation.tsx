import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import PresentationButtonscomponent from "./PresentationButtons";
import PresentationInfo from "./PresentationInfo";
import PresentationPhoto from "./PresentationPhoto";

const PresentationTab = () => {
    const { t } = useTranslation();

    return (
        <Element name={t("nav.home")}>
            <Box
                sx={{
                    paddingTop: '5em',
                    width: '90%',
                    margin: '4em auto 0',
                    height: "60em",
                    maxHeight: "60em",
                }}
            >
                <PresentationPhoto />
                <PresentationInfo />
                <PresentationButtonscomponent />
            </Box>
        </Element>
    )
} 

export default PresentationTab;