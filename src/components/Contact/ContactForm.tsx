import { Box, Button, TextField, Typography, type Theme } from "@mui/material";
import { useFormik } from "formik";
import React, { useCallback, useContext, useState } from "react";
import * as Yup from "yup";
import { sendEmail } from "../../helpers/ContactForm/handleSendEmail";
import type { ContactFormSubmitInterface, EmailContactFormInterface } from "../../typings/types";
import { SnackBarContext } from "../shared/snackbar/SnackBarContext";

const getInitialValues = (): EmailContactFormInterface => ({
  name: "",
  email: "",
  message: "",
});

const getValidationSchema = () =>
  Yup.object({
    name: Yup.string()
      .trim()
      .required("El nombre es obligatorio")
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(50, "El nombre no puede superar los 50 caracteres"),

    email: Yup.string()
      .trim()
      .email("Debe ser un email válido")
      .required("El email es obligatorio"),

    message: Yup.string()
      .trim()
      .required("El mensaje es obligatorio")
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .max(500, "El mensaje no puede superar los 500 caracteres"),
  });

const ContactFormComponent = (): React.ReactNode => {
  const [isLoadingSendEmail, setIsLoadingSendEmail] = useState<boolean>(false);
  const { showSnackBar } = useContext(SnackBarContext)!;

  const sendEmailMemorized = useCallback(
    async (values: EmailContactFormInterface, { resetForm }: { resetForm: () => void }) => {
      setIsLoadingSendEmail(true);
      try {
        await sendEmail({
          values: values,
          resetForm: resetForm,
          showSnackBar: showSnackBar,
        });
      } finally {
        setIsLoadingSendEmail(false);
      }
    },
    []
  );

  const {
    values,
    errors,
    handleSubmit,
    setFieldValue,
    isValid, 
    dirty,
  } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    onSubmit: sendEmailMemorized,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
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
        name="name"
        value={values.name}
        onChange={(e) => setFieldValue("name", e.target.value)}
        error={errors.name ? true : false}
        helperText={errors.name}
        sx={(theme: Theme) => ({ backgroundColor: theme?.custom?.white })}
      />
      <TextField
        variant="filled"
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={(e) => setFieldValue("email", e.target.value)}
        error={errors.email ? true : false}
        helperText={errors.email}
        sx={(theme: Theme) => ({ backgroundColor: theme?.custom?.white })}
      />
      <TextField
        label="Mensaje"
        name="message"
        multiline
        rows={6}
        variant="filled"
        value={values.message}
        onChange={(e) => setFieldValue("message", e.target.value)}
        error={errors.message ? true : false}
        helperText={errors.message}
        sx={(theme: Theme) => ({ backgroundColor: theme?.custom?.white })}
      />
      <Button
        type="submit"
        disabled={!isValid || !dirty || isLoadingSendEmail}
        sx={(theme: Theme) => ({
          backgroundColor: isValid && dirty ? theme?.custom?.backgroundLigth : theme?.palette?.error?.main,
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
          {isLoadingSendEmail ? "Enviando..." : "Enviar"}
        </Typography>
      </Button>
    </Box>
  );
};

export default ContactFormComponent;