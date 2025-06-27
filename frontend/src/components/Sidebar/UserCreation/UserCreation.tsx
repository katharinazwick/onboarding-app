import { useRef } from "react";
import SubmitButton from "../../Buttons/SubmitButton";
import TextInput, { TextInputRef } from "../../Inputs/TextInput";

interface UserCreationProps {
  addUser: (username: string) => Promise<void>;
}

const UserCreation = ({ addUser }: UserCreationProps) => {
  const inputRef = useRef<TextInputRef | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmedUsername = inputRef.current?.getValue().trim();
    
    if (!trimmedUsername) {
      inputRef.current?.playShakeAnimation();
      return
    };

    addUser(trimmedUsername);
    inputRef.current?.setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <TextInput placeholder="Username" className="input-sm" ref={inputRef} />
      <SubmitButton className="btn-sm">Create</SubmitButton>
    </form>
  );
};

export default UserCreation;
