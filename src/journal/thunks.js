import axios from "axios";
import { noteApi } from "@/api";
import { setNotes } from "@/journal/slices/JournalSlice";

export const getNotes = () => {
  return async (dispatch) => {
    try {
      const { data } = await noteApi("/note");
      dispatch(setNotes({ notes: data }));
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };
};

export const postNote = (note) => {
  return async (dispatch) => {
    try {
      await axios.post(noteApi("/note"), {
        title: note.title,
        body: note.body,
      });
      dispatch(setNotes({ notes: data }));
    } catch (error) {
      console.log("Error", error);
    }
  };
};
