import { Box } from "@mui/material";
import PresentationPhoto from "./PresentationPhoto";
import PresentationInfo from "./PresentationInfo";
import PresentationButtonscomponent from "./PresentationButtons";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const PresentationComponent = () => {
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

export default PresentationComponent;