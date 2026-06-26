import { useState } from "react";
import ModeButton from "./ModeButton";
import LaunchButton from "./LaunchButton";
import Map from "../../assets/icons/Map.svg?react";
import Compass from "../../assets/icons/Compass.svg?react";

function Modes() {
  const [mode, setMode] = useState<string | null>(null);

  return (
    <section>
      <p className="text-gray-600 text-[10px] tracking-[3px] uppercase">
        select mode
      </p>
      <form className="flex justify-between pt-4">
        <ModeButton
          mode="compass"
          icon={Compass}
          onChange={(newMode: string) => setMode(newMode)}
        />
        <ModeButton
          mode="map"
          icon={Map}
          onChange={(newMode: string) => setMode(newMode)}
        />
      </form>

      <LaunchButton isInvisible={mode === null} content={`Launch ${mode}`} />
    </section>
  );
}

export default Modes;
