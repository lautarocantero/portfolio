
export const downloadCv = (): void => {
  const pdfPath: string = "/cv/Lautaro-Cantero-React-cv.pdf";
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = pdfPath;
  link.download = "Lautaro-Cantero-React-cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
