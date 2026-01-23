import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, type Theme } from "@mui/material";
import { useContext } from "react";
import { DialogContext } from "./DialogContext";
import { handleCopyToClipBoard } from "../../helpers/SimpleDialog/handleCopyToClipBoard";

const SimpleDialog = (): React.ReactNode => {

    const { showModal, setShowModal } = useContext(DialogContext)!;

    return (
      <Dialog
        open={showModal} 
        onClose={() => setShowModal(false)}
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundDark, 
          width: '100%',
        })}
      >
        <DialogTitle
          sx={(theme: Theme) => ({
            backgroundColor: theme?.custom?.backgroundLigth, 
            color: theme?.custom?.fontColor,
            fontSize: theme?.typography?.h5?.fontSize,
            width: '100%',
            textAlign: 'center',
          })}
        >
          Mi mail
        </DialogTitle>
        <Box
          component={'div'}
        >
          <DialogContent
            sx={(theme: Theme) => ({
              backgroundColor: theme?.custom?.backgroundLigth, 
              color: theme?.custom?.fontColor,
              width: '100%',
              padding: { xs: '0.1em', sm: '2em', }
            })}
          >
            <Box
              component={'img'}
              src="public/images/email/email.png"
              sx={{
                width: '100%',
                height: '10em',
              }}
            />
          </DialogContent>
          <DialogActions
            sx={(theme: Theme) => ({
              backgroundColor: theme?.custom?.backgroundLigth, 
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
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
            <Button 
              type="button"
              onClick={handleCopyToClipBoard}
              sx={(theme: Theme) => ({
                color: theme?.custom?.fontColor,
              })}
            >
              Copiar
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    );
}

export default SimpleDialog;