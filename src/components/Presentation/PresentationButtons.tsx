import { Box } from "@mui/material";
import PresentationButtoncomponent from "./PresentationButton";
import { handleDownloadCv } from "../../helpers/Presentation/handleCvDownload";

const PresentationButtonscomponent = ():React.ReactNode => {

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
                text={'Linkedin'} 
                icon={"/icons/linkedin-rounded-border-svgrepo-com.svg"}
                onClick={ () => window.open("https://www.linkedin.com/in/lautaro-cantero/", "_blank")}
            />
            <PresentationButtoncomponent 
                text={'Descargar CV'} 
                icon={"/icons/cv-file-interface-symbol-svgrepo-com.svg"} 
                onClick={handleDownloadCv}
            />
        </Box>
    )
};
        
export default PresentationButtonscomponent;