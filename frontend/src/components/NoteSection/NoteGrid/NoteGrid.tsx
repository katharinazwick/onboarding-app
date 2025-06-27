import { Note } from "../../../types";
import NoteItem from "./NoteItem";
import { useSelectedUser } from "../../../hooks/useSelectedUser";
import NoNotes from "../NoteStatus/NoNotes";
import NoteEditDialog from "./NoteEditDialog";
import { useState } from "react";

interface NoteGridProps {
  notes: Note[];
  editNote: (content: string, id: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

const COLUMNS = 4;

const NoteGrid = ({ notes, editNote, deleteNote }: NoteGridProps) => {
  const [selectedEditNote, setSelectedEditNote] = useState<Note | null>(null);

  const { selectedUser } = useSelectedUser();

  const selectedUserNotes = notes.filter(
    (note) => note.userId === selectedUser?.id
  );

  const columnNotes: Note[][] = Array.from({ length: COLUMNS }, () => []);

  selectedUserNotes.forEach((note, index) => {
    columnNotes[index % COLUMNS].push(note);
  });

  return (
    <section className={`h-full pr-4 relative overflow-y-auto`}>
      <div className={`mx-4 grid grid-cols-4 gap-6`}>
        {columnNotes.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4 h-fit pb-4">
            {column.map((note) => (
              <NoteItem
                key={note.id}
                onEdit={() => setSelectedEditNote(note)}
                onDelete={() => deleteNote(note.id)}
              >
                {note.content}
              </NoteItem>
            ))}
          </div>
        ))}
      </div>

      <NoteEditDialog editNote={editNote} initialNote={selectedEditNote} setSelectedEditNote={setSelectedEditNote} />

      {selectedUserNotes.length === 0 && <NoNotes />}
    </section>
  );
};

export default NoteGrid;
