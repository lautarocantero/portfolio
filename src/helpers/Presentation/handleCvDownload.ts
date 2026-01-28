import i18n from "../../i18n";
import { downloadCv } from "../shared/downloadCv";

export const handleDownloadCv = ():void => {
    const currentLanguage : string = i18n.language;
    downloadCv({currentLanguage});
}