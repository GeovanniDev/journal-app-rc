import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, creatingNewNote, setActiveNote } from "./journalSlice";

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