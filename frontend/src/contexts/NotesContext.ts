import { createContext } from "react";
import { Note } from "../types";

interface NotesContextType {
  notes: Note[];
  addNote: (content: string, userId: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

const NotesContext = createContext<NotesContextType | null>(null);

export default NotesContext;
