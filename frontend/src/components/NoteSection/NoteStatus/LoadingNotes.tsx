import Lottie from "lottie-react";
import animationLoading from "../../../assets/animations/animation_notes_loading.json";

const LoadingNotes = () => {
  return (
    <Lottie
      animationData={animationLoading}
      loop={true}
      autoPlay={true}
      className="relative h-full mx-auto grayscale brightness-50"
      style={{ width: "100px" }}
    ></Lottie>
  );
};

export default LoadingNotes;
