import { useNotes } from "../../hooks/useNotes";
import { Note } from "../../types";
import NoteForm from "./NoteForm";
import NoteGrid from "./NoteGrid";

interface NoteSectionProps {
  notesPromise: Promise<Note[]> 
}

const NoteSection = ({ notesPromise }: NoteSectionProps) => {
  const { notes, addNote, editNote, deleteNote } = useNotes(notesPromise);

  return (
    <main className="w-full flex flex-col pt-10">
      <NoteGrid notes={notes} editNote={editNote} deleteNote={deleteNote} />
      <NoteForm addNote={addNote} />
    </main>
  );
};

export default NoteSection;
