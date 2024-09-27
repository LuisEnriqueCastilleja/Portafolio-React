import { endLogin, beginLogin } from "./slices/authSlice";

export const postLogin = (user, passwordd) => {
  return async (dispatch) => {
    try {
      dispatch(beginLogin());
      // const response = await axios
      //     .post(baseURL, {
      //         //TODO: Add properties
      //     });
      dispatch(endLogin());
      return "";
    } catch (error) {
      console.log(error);
    }
  };
};
