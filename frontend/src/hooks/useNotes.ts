import { use, useState } from "react";
import { Note } from "../types";
import {
  createNewNote,
  deleteExistingNote,
  editExistingNote,
} from "../helpers/notes";

interface NotesHookType {
  notes: Note[];
  addNote: (content: string, userId: string) => Promise<void>;
  editNote: (content: string, id: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

export const useNotes = (notesPromise: Promise<Note[]>): NotesHookType => {
  const data = use(notesPromise);
  const [notes, setNotes] = useState<Note[]>(data);
  const [error, setError] = useState<Error | null>(null);

  const addNote = async (content: string, userId: string) => {
    createNewNote(content, userId)
      .then((newNote) => {
        setNotes((prevNotes) => [...prevNotes, newNote]);
      })
      .catch((error) => setError(error));
  };

  const editNote = async (id: string, content: string) => {
    editExistingNote(id, content)
      .then(() => {
        setNotes((prevNotes) => {
          return prevNotes.map((note) =>
            note.id === id ? { ...note, content } : note
          );
        });
      })
      .catch((error) => setError(error));
  };

  const deleteNote = async (id: string) => {
    deleteExistingNote(id)
      .then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      })
      .catch((error) => setError(error));
  };

  if (error) {
    throw error;
  }

  return { notes, addNote, editNote, deleteNote };
};
