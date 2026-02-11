import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, type Theme } from "@mui/material";
import { useContext } from "react";
import { ImageDialogContext } from "./ImageDialogContext";

const ImageDialog = (): React.ReactNode => {
  const { showModal, setShowModal, selectedImage } = useContext(ImageDialogContext)!;

  return (
    <Dialog
      open={showModal}
      onClose={() => setShowModal(false)}
      maxWidth="lg"
      fullWidth
      sx={(theme: Theme) => ({
        backgroundColor: theme?.custom?.backgroundDark,
        width: "100%",
      })}
    >
      <DialogTitle
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          color: theme?.custom?.fontColor,
          fontSize: theme?.typography?.h5?.fontSize,
          width: "100%",
          textAlign: "center",
        })}
      >
        Imagen seleccionada
      </DialogTitle>
      <DialogContent
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          color: theme?.custom?.fontColor,
          width: "100%",
          padding: { xs: "0.1em", sm: "2em" },
        })}
      >
        {selectedImage && (
          <Box
            component="img"
            src={selectedImage}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        )}
      </DialogContent>
      <DialogActions
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        })}
      >
        <Button
          onClick={() => setShowModal(false)}
          sx={(theme: Theme) => ({
            color: theme?.custom?.whiteTranslucid,
          })}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDialog;
