import { FORM_ERROR_MESSAGES } from "@/shared/constants";
import * as yup from "yup";

export const noteFormSchema = yup.object({
  title: yup
    .string()
    .required(FORM_ERROR_MESSAGES.required)
    .min(10, FORM_ERROR_MESSAGES.min(10)),
  body: yup
    .string()
    .required(FORM_ERROR_MESSAGES.required)
    .min(10, FORM_ERROR_MESSAGES.min(10)),
});
