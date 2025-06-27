import { ReactNode } from "react";
import NoteDeleteButton from "./NoteDeleteButton";
import NoteEditButton from "./NoteEditButton";

interface NoteItemProps {
  children: ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}

const NoteItem = ({ children, onEdit, onDelete }: NoteItemProps) => {
  return (
    <div className="relative bg-neutral-100 shadow-md group">
      <p className="p-8 text-md">{children}</p>
      <div className="flex absolute bottom-2 right-2 gap-2">
        <NoteEditButton onClick={onEdit} />
        <NoteDeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default NoteItem;
