import { Divider, Grid, List, Toolbar, Typography } from '@mui/material'
import { NoteItem } from './NoteItem';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getNotes } from "../thunks"

export const Notes = () => {

    const dispatch = useDispatch();
    const { notes } = useSelector(state => state.journal);

    useEffect(() => {
        dispatch(getNotes());
    }, []);


    return (
        <>
            <Grid container direction='column' sx={{
                direction: 'column',
                display: 'flex'
            }}>
                <Typography variant='h6' noWrap component='div'>
                    Notas pendientes de Luis Castilleja.
                </Typography>
                <Divider />
                <List>
                    {
                        notes.map(note => (
                            <NoteItem key={note.id} {...note} />
                        ))
                    }
                </List>
            </Grid>

        </>

    )
}