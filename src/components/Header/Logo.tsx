import Logo from "../../assets/icons/Logo.svg?react";

function LogoContainer() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex items-center justify-center p-7 w-24 h-24 border border-zinc-800 rounded-2xl bg-zinc-950">
        <Logo className="w-full h-full scale-140" />
      </div>
    </section>
  );
}

export default LogoContainer;
