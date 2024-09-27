import { Divider, Grid, List, Toolbar, Typography } from "@mui/material";
import { NoteItem } from "@/journal/components/";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNotes } from "@/journal/thunks";

export const Notes = () => {
  const dispatch = useDispatch();
  // const { notes } = useSelector(state => state.journal);

  const notes = [
    {
      title: "Prueba titulo 1",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 1,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 2",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 2,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 3",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 3,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 4",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 4,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 5",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 5,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 6",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 6,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 7",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 7,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 8",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 8,
      date: Date.now(),
      imageUrls: [],
    },
    {
      title: "Prueba titulo 9",
      body: "Esto es un body de prueba para ver el diseño y ver como se comporta",
      id: 9,
      date: Date.now(),
      imageUrls: [],
    },
  ];

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <List
          sx={{
            borderRadius: 0,
            backgroundColor: "lightgray",
          }}
        >
          {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </List>
      </Grid>
    </>
  );
};
