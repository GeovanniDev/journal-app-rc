import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, creatingNewNote, setActiveNote, setNotes } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState ) => {

        dispatch(creatingNewNote());
        const { uid } = getState().auth;

        const newNote = {
            title: 'tests',
            body: '',
            date: new Date().getTime()
        };

        const newDoc = doc(collection(FirebaseDb, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        
        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const docs = await getDocs(collection(FirebaseDb, `${uid}/journal/notes`));
        const notes = [];

        docs.forEach(doc => notes.push({ id: doc.id, ...doc.data() }));

        dispatch(setNotes(notes));
    };
};