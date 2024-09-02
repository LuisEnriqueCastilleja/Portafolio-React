import { useDispatch } from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../slices/JournalSlice';


export const NoteItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title} />
                    <ListItemText secondary={body} />
                    <Grid item alignSelf='end'>
                        <ListItemText secondary={date} />
                    </Grid>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}