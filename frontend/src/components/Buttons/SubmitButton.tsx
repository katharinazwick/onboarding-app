import { ReactNode } from 'react'


interface SubmitButtonProps {
    children: ReactNode;
    className?: string;
}

const SubmitButton = ({children, className}: SubmitButtonProps) => {
  return (
    <button type="submit" className={`btn btn-neutral bg-neutral-950 ${className || ""}`}>
        {children}
    </button>
  )
}

export default SubmitButton