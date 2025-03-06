import { createSlice } from '@reduxjs/toolkit';


export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: null,
        //     title: '',
        //     body: '',
        //     date: null,
        //     imageUrls: []
        // }
    },
    reducers: {
        creatingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        SetNotes: (state, action) => {
        },
        setSaving: (state, action) => {
        },
        updateNote: (state, action) => {
        },
        deleteNoteById: (state, action) => {
        }
    }
});

export const {
    creatingNewNote,
    addNewEmptyNote,
    setActiveNote,
    SetNotes,
    setSaving,
    updateNote,
    deleteNoteById } = journalSlice.actions;