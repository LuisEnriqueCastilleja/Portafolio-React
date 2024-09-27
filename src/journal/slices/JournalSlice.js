import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSAved: "",
    notes: [],
    active: {
      id: "ABC123",
      title: "",
      body: "",
      date: 1234567,
      imageUrls: [],
    },
    isActive: false,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {
      state.active.title = action.payload.title;
      state.active.body = action.payload.body;
      state.active.date = action.payload.date;
      state.active.id = action.payload.id;
      state.imageUrls = action.payload.imageUrls;
      state.isActive = true;
    },
    setNotes: (state, action) => {
      state.notes = action.payload.notes;
    },
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
