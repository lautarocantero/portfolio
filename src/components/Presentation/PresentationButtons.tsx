import { Box } from "@mui/material";
import PresentationButtoncomponent from "./PresentationButton";
import { handleDownloadCv } from "../../helpers/Presentation/handleCvDownload";
import { useTranslation } from "react-i18next";

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
                text={t("buttons.linkedin")} 
                icon={"/icons/linkedin-rounded-border-svgrepo-com.svg"}
                onClick={ () => window.open("https://www.linkedin.com/in/lautaro-cantero/", "_blank")}
            />
            <PresentationButtoncomponent 
                text={t("buttons.downloadCV")} 
                icon={"/icons/cv-file-interface-symbol-svgrepo-com.svg"} 
                onClick={handleDownloadCv}
            />
        </Box>
    )
};
        
export default PresentationButtonscomponent;