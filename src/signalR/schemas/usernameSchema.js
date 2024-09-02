import * as Yup from "yup";

export const userNameSchema = Yup.object().shape({
    username: Yup.string().required().min(4).max(25),
    chatroom: Yup.string().required().min(1).max(20),
});