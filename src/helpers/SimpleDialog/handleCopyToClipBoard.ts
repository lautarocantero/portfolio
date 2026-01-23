

export const handleCopyToClipBoard = (): void => {
  navigator.clipboard.writeText("lautaroncantero@gmail.com")
    .then(() => {
      console.log("Correo copiado al portapapeles");
    })
    .catch(err => {
      console.error("Error al copiar al portapapeles: ", err);
    });
};
