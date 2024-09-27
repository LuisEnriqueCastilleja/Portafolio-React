import { gifApi } from "../api/gifApi";
import { setGifs, startLoadingGifs } from "./slices/gifSlice";

export const getGifs = (nombre = "Naruto") => {
  return async (dispatch) => {
    dispatch(startLoadingGifs());

    const { data } = await gifApi(`${nombre}`);
    console.log(data.data);

    dispatch(setGifs({ gifs: data.data }));
  };
};
