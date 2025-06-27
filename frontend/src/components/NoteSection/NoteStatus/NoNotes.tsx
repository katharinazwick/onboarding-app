import Lottie from "lottie-react";
import noNotesAnimation from "../../../assets/animations/animation_no_notes.json";

const NoNotes = () => {
  return (
    <div className="text-center flex flex-col gap-1">
      <Lottie
        animationData={noNotesAnimation}
        loop={true}
        autoPlay={true}
        className="mx-auto w-[350px]"
      ></Lottie>
      <p className="mt-[-80px]">You don't have any notes yet...</p>
      <p className="text-neutral-400 text-sm">
        Start writing your notes here. Always keep an eye on everything and
        monitor which notes are still left undone.
      </p>
    </div>
  );
};

export default NoNotes;
