import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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
        addNewEmptyNote: (state, action) => {
        },
        setActiveNote: (state, action) => {
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

export const { addNewEmptyNote,
    setActiveNote,
    SetNotes,
    setSaving,
    updateNote,
    deleteNoteById } = journalSlice.actions;