import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { handleDownloadCv } from "../../helpers/Presentation/handleCvDownload";
import PresentationButtoncomponent from "./PresentationButton";

const PresentationButtonscomponent = ():React.ReactNode => {
    const { t } = useTranslation();

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row'},
                justifyContent: "space-evenly",
                margin: "auto", 
                width: { xs: '100%', sm: "90%", md: "70%"}
            }}
        >
            <PresentationButtoncomponent 
                icon={"/icons/linkedin-rounded-border-svgrepo-com.svg"}
                onClick={ () => window.open("https://www.linkedin.com/in/lautaro-cantero/", "_blank")}
                text={t("buttons.linkedin")} 
            />
            <PresentationButtoncomponent 
                icon={"/icons/cv-file-interface-symbol-svgrepo-com.svg"} 
                onClick={handleDownloadCv}
                text={t("buttons.downloadCV")} 
            />
        </Box>
    )
};
        
export default PresentationButtonscomponent;