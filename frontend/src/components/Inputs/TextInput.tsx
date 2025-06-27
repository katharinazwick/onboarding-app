import { ChangeEvent, useImperativeHandle, useState } from "react";
import style from "./TextInput.module.css"

interface TextInputProps {
  className?: string;
  placeholder?: string;
  ref: React.Ref<TextInputRef>;
}

export interface TextInputRef {
  getValue: () => string;
  setValue: (val: string) => void;
  playShakeAnimation: () => void;
}

const TextInput = ({ className, placeholder, ref}: TextInputProps) => {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);

  function playShakeAnimation() {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    setValue: (val: string) => setValue(val),
    playShakeAnimation
  }));

  return (
    <input
    className={`input input-bordered ${className || ""} ${shake ? style.shake: ""}`}
      value={value}
      placeholder={placeholder}
      type="text"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
};

export default TextInput;
