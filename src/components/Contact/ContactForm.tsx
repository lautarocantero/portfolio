import { Box, Button, TextField, Typography, type Theme } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import type { ContactErrorInterface } from "../../typings/types";

const ContactFormComponent = (): React.ReactNode => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k1r3emb", "template_ec2a37s", form.current!, {
        publicKey: "_hhq0MIv0xJ_bL7e0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error: ContactErrorInterface) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box
      component={"form"}
      ref={form}
      onSubmit={sendEmail}
      sx={{
        width: "100%",
        height: "auto",
        margin: "0 auto",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      <TextField
        variant="filled"
        label="Nombre"
        name="user_name"
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.white,
        })}
      />
      <TextField
        variant="filled"
        label="Email"
        name="user_email"
        type="email"
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.white,
        })}
      />
      <TextField
        id="filled-multiline-static"
        label="Mensaje"
        name="message"
        multiline
        rows={6}
        defaultValue=""
        variant="filled"
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.white,
        })}
      />
      <Button
        type="submit"
        sx={(theme: Theme) => ({
          backgroundColor: theme?.custom?.backgroundLigth,
          width: "10em",
          margin: "2em auto 1em",
          borderRadius: "0.3em",
          "&:hover": {
            cursor: "pointer",
          },
        })}
      >
        <Typography
          sx={(theme: Theme) => ({
            color: theme?.custom?.fontColor,
            fontSize: theme?.typography?.body2?.fontSize,
            textTransform: "lowercase",
          })}
        >
          Enviar
        </Typography>
      </Button>
    </Box>
  );
};

export default ContactFormComponent;
