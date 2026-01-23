import { Box } from "@mui/material";
import PresentationPhoto from "./PresentationPhoto";
import PresentationInfo from "./PresentationInfo";
import PresentationButtonscomponent from "./PresentationButtons";
import { Element } from "react-scroll";

const PresentationComponent = () => {
    return (
        <Element name="Inicio">
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