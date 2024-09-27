import { useDispatch } from "react-redux";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "@/journal/slices/JournalSlice";

export const NoteItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  return (
    <ListItem sx={{ padding: "0px", margin: "0px" }}>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText
            sx={{
              textAlign: "justify",
            }}
            primary={title}
          />
          <ListItemText sx={{ textAlign: "justify" }} secondary={body} />
          <Grid item alignSelf="end">
            <ListItemText sx={{ textAlign: "justify" }} secondary={date} />
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
