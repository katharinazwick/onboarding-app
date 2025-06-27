import React, { useEffect, useRef } from "react";
import TextInput, { TextInputRef } from "../../Inputs/TextInput";
import SubmitButton from "../../Buttons/SubmitButton";
import { Note } from "../../../types";

interface NoteEditDialogProps {
  initialNote: Note | null;
  editNote: (content: string, id: string) => Promise<void>;
  setSelectedEditNote: (note: Note | null) => void;
}

const NoteEditDialog = ({
  initialNote,
  editNote,
  setSelectedEditNote,
}: NoteEditDialogProps) => {
  const inputRef = useRef<TextInputRef | null>(null);

  useEffect(() => {
    if (initialNote && inputRef.current) {
      (document.getElementById("modal") as HTMLDialogElement)?.showModal();
      inputRef.current.setValue(initialNote.content);
    }
  }, [initialNote]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const content = inputRef.current?.getValue().trim();

    if (!content || !initialNote) {
      inputRef.current?.playShakeAnimation();
      return;
    }

    await editNote(initialNote.id, content);

    const dialog = document.getElementById("modal") as HTMLDialogElement;
    dialog?.close();
  }

  return (
    <dialog onClose={() => setSelectedEditNote(null)} id="modal" className="modal">
      <div className="modal-box flex items-center gap-2">
        <TextInput ref={inputRef} className="flex-grow" />
        <form method="dialog" onSubmit={handleSubmit}>
          <SubmitButton>Edit</SubmitButton>
        </form>
      </div>
    </dialog>
  );
};

export default NoteEditDialog;
