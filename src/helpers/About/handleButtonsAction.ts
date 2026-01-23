import type { handleAboutLinkActionInterface } from "../../typings/types";
import { downloadCv } from "../shared/downloadCv";


const handleAboutLinkAction = ({action, url, setShowModal}: handleAboutLinkActionInterface) => {

    switch (action) {
        case 'visit':
            window.open(`${url}`, "_blank")
            break;
        case 'email':
            setShowModal(true);
            break;
        case 'cv':
            downloadCv();
            break;
        default:
            downloadCv();
            break;
    }

}

export default handleAboutLinkAction;