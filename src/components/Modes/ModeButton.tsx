interface IProps {
  mode: string;
  icon: any;
  onChange: (newMode: string) => void;
}

function ModeButton({ mode, icon: Icon, onChange }: IProps) {
  return (
    <label className="cursor-pointer border w-43 h-43 border-zinc-800 rounded-2xl bg-zinc-950 active:scale-108 transition-transform duration-200">
      <input
        className=" appearance-none peer absolute"
        type="radio"
        name="mode"
        value={mode}
        onChange={() => onChange(mode)}
      />
      <div className="flex flex-col items-center justify-center h-full gap-4 peer-checked:text-green-400 text-gray-600 transition-colors duration-300 ">
        <Icon className="" />
        <p className="text-[10px] tracking-[3px] uppercase">{mode}</p>
      </div>
    </label>
  );
}

export default ModeButton;
