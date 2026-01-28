import { Box, Button, TextField, Typography, type Theme } from "@mui/material";
import { useFormik } from "formik";
import React, { useCallback, useContext, useState } from "react";
import * as Yup from "yup";
import { sendEmail } from "../../helpers/ContactForm/handleSendEmail";
import type { EmailContactFormInterface } from "../../typings/types";
import { SnackBarContext } from "../shared/snackbar/SnackBarContext";
import { useTranslation } from "react-i18next";

const getInitialValues = (): EmailContactFormInterface => ({
  name: "",
  email: "",
  message: "",
});

const getValidationSchema = (t: any) =>
  Yup.object({
    name: Yup.string()
      .trim()
      .required(t("contact.validation.nameRequired"))
      .min(2, t("contact.validation.nameMin"))
      .max(50, t("contact.validation.nameMax")),
    email: Yup.string()
      .trim()
      .email(t("contact.validation.emailValid"))
      .required(t("contact.validation.emailRequired")),
    message: Yup.string()
      .trim()
      .required(t("contact.validation.messageRequired"))
      .min(10, t("contact.validation.messageMin"))
      .max(500, t("contact.validation.messageMax")),
  });

const ContactFormComponent = (): React.ReactNode => {
  const { t } = useTranslation();
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
    validationSchema: getValidationSchema(t),
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
        label={t("contact.name")}
        name="name"
        value={values.name}
        onChange={(e) => setFieldValue("name", e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        sx={(theme: Theme) => ({ backgroundColor: theme?.custom?.white })}
      />
      <TextField
        variant="filled"
        label={t("contact.email")}
        name="email"
        type="email"
        value={values.email}
        onChange={(e) => setFieldValue("email", e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        sx={(theme: Theme) => ({ backgroundColor: theme?.custom?.white })}
      />
      <TextField
        label={t("contact.message")}
        name="message"
        multiline
        rows={6}
        variant="filled"
        value={values.message}
        onChange={(e) => setFieldValue("message", e.target.value)}
        error={!!errors.message}
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
          {isLoadingSendEmail ? t("contact.sending") : t("contact.send")}
        </Typography>
      </Button>
    </Box>
  );
};

export default ContactFormComponent;
