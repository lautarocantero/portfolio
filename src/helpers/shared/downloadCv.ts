import type { downloadCvInterface } from "../../typings/types";

export const downloadCv = ({currentLanguage}: downloadCvInterface) : void => {
  console.log(currentLanguage.toUpperCase());
  const pdfPath: string = `cv/Lautaro-Cantero-CV-Full-Stack-2026-${currentLanguage.toUpperCase()}.pdf`;
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = pdfPath;
  link.download = `Lautaro-Cantero-CV-Full-Stack-2026-${currentLanguage.toUpperCase()}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
