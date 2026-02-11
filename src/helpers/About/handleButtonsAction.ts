import type { handleAboutLinkActionInterface } from "../../typings/types";
import { handleDownloadCv } from "../Presentation/handleCvDownload";


const handleAboutLinkAction = ({action, url, setShowModal}: handleAboutLinkActionInterface) => {

    switch (action) {
        case 'visit':
            window.open(`${url}`, "_blank")
            break;
        case 'email':
            setShowModal(true);
            break;
        case 'cv':
            handleDownloadCv();
            break;
        default:
            handleDownloadCv();
            break;
    }

}

export default handleAboutLinkAction;