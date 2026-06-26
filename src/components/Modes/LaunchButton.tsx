import Next from "../../assets/icons/Next.svg?react";

interface IProps {
  isInvisible: boolean;
  content: string;
}

function LaunchButton({ isInvisible, content }: IProps) {
  return (
    <button
      className={`bg-green-400 h-14 rounded-lg active:scale-105 hover:bg-green-500 uppercase tracking-[3.6px] text-[13px] font-extrabold flex justify-center items-center gap-2 mt-12 w-full shadow-lg shadow-green-400/20 transition-all duration-300 ${isInvisible ? "opacity-0" : "opacity-100 translate-y-2 cursor-pointer"}`}
    >
      {content}
      <Next />
    </button>
  );
}

export default LaunchButton;
