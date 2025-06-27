import { useRef } from "react";
import SubmitButton from "../../Buttons/SubmitButton";
import TextInput, { TextInputRef } from "../../Inputs/TextInput";
import { useSelectedUser } from "../../../hooks/useSelectedUser";

interface NoteFormProps {
  addNote: (content: string, userId: string) => Promise<void>;
}

const NoteForm = ({ addNote }: NoteFormProps) => {
  const { selectedUser } = useSelectedUser();
  const inputRef = useRef<TextInputRef | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const content = inputRef.current?.getValue();

    if (!content || !selectedUser?.id) {
      inputRef.current?.playShakeAnimation();
      return;
    }

    addNote(content, selectedUser.id);
    inputRef.current?.setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 border-t-[1px] border-neutral-400"
    >
      <TextInput
        placeholder="I need to..."
        className="flex-grow"
        ref={inputRef}
      />
      <SubmitButton>Post</SubmitButton>
    </form>
  );
};

export default NoteForm;
