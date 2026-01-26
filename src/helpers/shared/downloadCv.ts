
export const downloadCv = (): void => {
  const pdfPath: string = "/cv/cv-Lautaro-Cantero-2026-.pdf";
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = pdfPath;
  link.download = "cv-Lautaro-Cantero-2026.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
