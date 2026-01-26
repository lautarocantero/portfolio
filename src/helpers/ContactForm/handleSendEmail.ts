import emailjs from "@emailjs/browser";
import type { ContactErrorInterface, sendEmailInterface } from "../../typings/types";

export const sendEmail = ({ values, resetForm }: sendEmailInterface): Promise<void> => {
  return emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name: values.name, email: values.email, message: values.message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      resetForm();
    })
    .catch((error: ContactErrorInterface) => {
      console.log("FAILED...", error.text);
    });
};
