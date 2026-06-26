function ProductName() {
  return (
    <section className="flex flex-col justify-center items-center p-12 gap-2">
      <h1 className="text-6xl uppercase text-white tracking-[15px] font-extrabold ">
        Wander
      </h1>
      <p className="text-green-400 tracking-[4.8px] uppercase font-medium text-[12px] relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-400/50 before:rounded-full before:-left-4 before:top-1.25 before:animate-pulse ">
        navigation online
      </p>
    </section>
  );
}

export default ProductName;
