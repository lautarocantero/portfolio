import emailjs from "@emailjs/browser";
import type { ContactErrorInterface, sendEmailInterface } from "../../typings/types";
import { AlertColor } from "../../typings/types/enums";
import i18n from "i18next";

export const sendEmail = ({ values, resetForm, showSnackBar }: sendEmailInterface): Promise<void> => {
  return emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name: values.name, email: values.email, message: values.message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      showSnackBar(i18n.t("contact.success"), AlertColor.Success);
      resetForm();
    })
    .catch((error: ContactErrorInterface) => {
      showSnackBar(i18n.t("contact.error"), AlertColor.Error);
    });
};
