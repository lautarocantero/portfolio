import { Box, Button, TextField, Typography, type Theme } from "@mui/material";


const ContactFormComponent = ():React.ReactNode => {
    return(
        <Box
            component={'form'}
            sx={{
                width: '100%',
                height: 'auto',
                margin: '0 auto',
                padding: '1em',
                display: 'flex',
                flexDirection: 'column',
                gap: '2em'
            }}
        >
            <TextField 
                variant="filled" 
                label="Nombre" 
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.custom?.white,
                })}
            />
            <TextField 
                variant="filled" 
                label="Email" 
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.custom?.white,
                })}
            />
            <TextField
                id="filled-multiline-static"
                label="Mensaje"
                multiline
                rows={6}
                defaultValue=""
                variant="filled"
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.custom?.white,
                })}
            />
            <Button
                sx={(theme: Theme) => ({
                    backgroundColor: theme?.custom?.backgroundLigth,
                    width: '10em',
                    margin: '2em auto 1em',
                    borderRadius: '0.3em',
                    '&:hover': {
                        cursor: 'pointer',
                    }
                })}
            >
                <Typography
                    sx={(theme: Theme) => ({
                        color: theme?.custom?.fontColor,
                        fontSize: theme?.typography?.body2?.fontSize,
                        textTransform: 'lowercase'
                    })}
                >
                    Enviar
                </Typography>
            </Button>
        </Box>
    )
};
        
export default ContactFormComponent;