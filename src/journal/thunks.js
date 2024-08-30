import { noteApi } from "../api/noteApi"
import { setNotes } from "./slices/JournalSlice";

export const getNotes = () => {
    return async (dispatch) => {
        try {
            const { data } = await noteApi('/note');
            dispatch(setNotes({ notes: data }));
            console.log(data);

        } catch (error) {
            console.log('error');
        }
    }
}

export const postNote = () => {
    return async (dispatch) => {
        try {
            await axios
                .post(baseURL, {
                    title: "Hello World!",
                    body: "This is a new post."
                });
            dispatch(setNotes({ notes: data }));
        } catch (error) {
            console.log('error');
        }

    }
}
